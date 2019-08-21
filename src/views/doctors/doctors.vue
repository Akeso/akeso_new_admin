<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ generateShow('route.doctors') }}</span>
      </div>

      <div class="filter-container">
        <el-button class="filter-item" type="success" icon="el-icon-plus" @click="handleClickNew">新增</el-button>
      </div>

      <el-row>
        <el-col>
          {{ generateShow('common.name_field') }}:
          <el-input v-model="listQuery.name" :placeholder="generateShow('common.name_field')" label="名称" style="width: 200px;" class="filter-item" clearable/>
          {{ generateShow('common.phone') }}:
          <el-input v-model="listQuery.phone" :placeholder="generateShow('common.phone')" label="联系电话" style="width: 180px;" class="filter-item" clearable/>
          {{ generateShow('common.account_login') }}:
          <el-input v-model="listQuery.email" :placeholder="generateShow('common.account_login')" style="width: 180px;" class="filter-item" clearable/>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px;">
        <el-col>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
          <el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;"
        @sort-change="handleColumnSort">
        <el-table-column
          :label="generateShow('common.name_field')"
          prop="name"
          min-width="90"/>
        <el-table-column
          :label="generateShow('common.address')"
          prop="address"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.location')"
          prop="locationStreet"
          min-width="80"/>
        <el-table-column
          :label="generateShow('common.phone')"
          prop="phone"
          min-width="100"/>
        <el-table-column
          :label="generateShow('common.account_login')"
          prop="email"
          min-width="160"/>
        <el-table-column
          :label="generateShow('common.created_at')"
          prop="createdAt"
          min-width="120"/>
        <el-table-column
          :label="generateShow('common.account_type')"
          prop="baseTypeVal"
          min-width="60"/>
        <el-table-column
          label="操作"
          min-width="120" >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClickEdit(scope.row)">{{ generateShow('common.modify') }}</el-button>
            <el-button type="text" size="small" @click="handleClickLocation(scope.row)">{{ generateShow('common.modify_location') }}</el-button>
            <el-button type="text" size="small" @click="handleClickSkilled(scope.row)">{{ generateShow('common.modify_skilled') }}</el-button>
            <el-button type="text" size="small" @click="handleClickDelete(scope.row)">{{ generateShow('common.delete') }}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <NewDoctor ref="newDoctor" @create-success="getList"/>
    <EditDoctor ref="editDoctor" @update-success="getList"/>
    <Services ref="services" @update-success="getList"/>
    <Location ref="location" @update-success="getList"/>
  </div>
</template>
<script>
import { fetchList, deleteItem } from '@/api/doctors'
import NewDoctor from './components/new_doctor'
import EditDoctor from './components/edit_doctor'
import Services from './components/services'
import Location from './components/location'
export default {
  components: { NewDoctor, EditDoctor, Services, Location },
  data() {
    return {
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
        sortProp: undefined,
        sortOrder: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClickLocation(val) {
      this.$refs.location.show(val)
    },
    handleClickSkilled(val) {
      this.$refs.services.show(val)
    },
    handleClickEdit(val) {
      this.$refs.editDoctor.handleShow(val)
    },
    handleClickNew() {
      this.$refs.newDoctor.show()
    },
    handleClick(val) {
    },
    handleClickDelete(val) {
      this.$confirm('确认删除该医生账号?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        deleteItem({ id: val.id }).then(response => {
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
      })
    },
    getList() {
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
      this.listQuery.sortProp = val.prop
      this.listQuery.sortOrder = val.order
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

