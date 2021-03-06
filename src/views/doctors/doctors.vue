<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.doctors') }}</span>
      </div>

      <div class="filter-container">
        <el-button size="mini" icon="el-icon-plus" @click="handleClickNew">新增</el-button>
        <el-button size="mini" icon="el-icon-edit" @click="handleClickEdit">{{ generateShow('common.modify') }}</el-button>
        <el-button v-if="$store.getters.baseType === 'admin'" size="mini" icon="el-icon-location-outline" @click="handleClickLocation">修改地区</el-button>
        <el-button v-if="$store.getters.baseType === 'admin'" size="mini" icon="el-icon-finished" @click="handleClickSkilled">{{ generateShow('common.modify_skilled') }}</el-button>
        <el-button size="mini" icon="el-icon-delete" @click="handleClickDelete">{{ generateShow('common.delete') }}</el-button>
        <el-button v-if="$store.getters.super" size="mini" @click="handleClickAuthorize">{{ generateShow('common.authorize') }}</el-button>
      </div>

      <el-row style="margin-top: 10px;">
        <el-col>
          {{ generateShow('common.name_field') }}:
          <el-input v-model="listQuery.name" :placeholder="generateShow('common.name_field')" size="mini" label="名称" style="width: 200px;" class="filter-item" clearable/>
          {{ generateShow('common.phone') }}:
          <el-input v-model="listQuery.phone" :placeholder="generateShow('common.phone')" size="mini" label="联系电话" style="width: 180px;" class="filter-item" clearable/>
          {{ generateShow('common.account_login') }}:
          <el-input v-model="listQuery.email" :placeholder="generateShow('common.account_login')" size="mini" style="width: 180px;" class="filter-item" clearable/>
          <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
          <el-button class="filter-item" size="mini" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
        </el-col>
      </el-row>

      <el-table :data="list" border style="width: 100%; margin-top: 10px;" highlight-current-row @sort-change="handleColumnSort" @current-change="handleCurrentSelect">
        <el-table-column :label="generateShow('common.name_field')" prop="name" min-width="90"/>
        <el-table-column :label="generateShow('common.address')" prop="address" min-width="120"/>
        <el-table-column :label="generateShow('common.location')" prop="locationStreet" sortable min-width="90"/>
        <el-table-column :label="generateShow('common.children_count')" prop="childrenCount" sortable min-width="90"/>
        <el-table-column :label="generateShow('common.phone')" prop="phone" min-width="100"/>
        <el-table-column :label="generateShow('common.account_login')" prop="email" min-width="160"/>
        <el-table-column label="所属代理" prop="parentName" min-width="80"/>
        <el-table-column :label="generateShow('common.created_at')" prop="createdAt" min-width="120"/>
        <el-table-column :label="generateShow('common.state')" min-width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.authorize | stateFileter }}</span>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewDoctor v-if="newDoctorVisible" :dialog-visible="newDoctorVisible" @hidden="hideChangeEmit"/>
    <EditDoctor v-if="editDoctorVisible" :dialog-visible="editDoctorVisible" :item="currentItem" @hidden="hideChangeEmit"/>
    <Location v-if="locationDoctorVisible" :dialog-visible="locationDoctorVisible" :item="currentItem" @hidden="hideChangeEmit"/>
    <Services v-if="skillDoctorVisible" :dialog-visible="skillDoctorVisible" :item="currentItem" @hidden="hideChangeEmit"/>
  </div>
</template>
<script>
import { fetchList, deleteItem, authorizeDoctor } from '@/api/doctors'
import NewDoctor from './components/new_doctor'
import EditDoctor from './components/edit_doctor'
import Services from './components/services'
import Location from './components/location'

export default {
  components: { NewDoctor, EditDoctor, Services, Location },
  filters: {
    stateFileter(state) {
      const stateMap = { pending: '审核中', pass: '审核通过', reject: '审核拒绝' }
      return stateMap[state]
    }
  },
  data() {
    return {
      newDoctorVisible: false,
      editDoctorVisible: false,
      locationDoctorVisible: false,
      skillDoctorVisible: false,
      currentItem: undefined,
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        name: undefined,
        phone: undefined,
        email: undefined,
        type: undefined,
        sort_prop: undefined,
        sort_order: undefined
      }
    }
  },
  created() { this.getList() },
  methods: {
    hideChangeEmit(refreshState) {
      if (refreshState) { this.getList() }
      this.newDoctorVisible = false
      this.editDoctorVisible = false
      this.locationDoctorVisible = false
      this.skillDoctorVisible = false
    },
    handleCurrentSelect(item) { this.currentItem = item },
    handleClickAuthorize() {
      if (!this.currentItem) { this.$message({ type: 'warning', message: '请先选择一项进行操作!' }); return }
      if (this.currentItem.authorize !== 'pending') { this.$message({ type: 'warning', message: '该账号已审核通过!' }); return }
      this.$confirm('确定要审核通过该账户吗?', '提示', { confirmButtonText: '是', cancelButtonText: '否', type: 'warning' }).then(() => {
        authorizeDoctor({ id: this.currentItem.id }).then(res => {
          this.getList()
          this.$message({ type: 'success', message: '审核成功!' })
        })
      }).catch(() => {})
    },
    handleClickEdit() {
      if (!this.currentItem) { this.$message({ type: 'warning', message: '请先选择一项进行操作!' }); return }
      this.editDoctorVisible = true
    },
    handleClickNew() { this.newDoctorVisible = true },
    handleClickLocation() {
      if (!this.currentItem) { this.$message({ type: 'warning', message: '请先选择一项进行操作!' }); return }
      this.locationDoctorVisible = true
    },
    handleClickSkilled() {
      if (!this.currentItem) { this.$message({ type: 'warning', message: '请先选择一项进行操作!' }); return }
      this.skillDoctorVisible = true
    },
    handleClickDelete() {
      if (!this.currentItem) { this.$message({ type: 'warning', message: '请先选择一项进行操作!' }); return }
      this.$confirm('确认删除该医生账号?', '提示', { confirmButtonText: '是', cancelButtonText: '否', type: 'warning' }).then(() => {
        deleteItem({ id: this.currentItem.id }).then(res => {
          this.getList()
          this.$message({ type: 'success', message: '删除成功!' })
        })
      }).catch(() => {})
    },
    getList() {
      if (this.$store.getters.baseType === 'agent') {
        Object.assign(this.listQuery, { agent_id: this.$store.getters.id })
      }
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleColumnSort(val) {
      this.listQuery.sort_prop = val.prop
      this.listQuery.sort_order = val.order
      this.getList()
    },
    handleFilter() {
      this.getList()
    },
    handleFilterClear() {
      this.listQuery.name = ''
      this.listQuery.phone = ''
      this.listQuery.email = ''
    }
  }
}
</script>

