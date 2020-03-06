<template>
  <div>
    <div>
      <ve-bar :data="chartData"/>
    </div>
    <el-card class="box-card">
      <div class="filter-container">
        <el-form :inline="true" :model="formQuery" class="demo-form-inline">
          <el-form-item label="学校">
            <el-select v-model="listQuery.school_id" clearable placeholder="请选择">
              <el-option v-for="item in schools" :key="item.id" :label="item.name" :value="item.id"/>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button size="mini" plain icon="el-icon-search" @click="onClickSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="list"
        border
        style="width: 100%; margin-top: 10px;">
        <el-table-column
          label="学校"
          prop="school_name"
          min-width="60"/>
        <el-table-column
          label="筛查批次"
          prop="examine_name"
          min-width="90"/>
        <el-table-column
          label="姓名"
          prop="name"
          min-width="60"/>
        <el-table-column
          label="联系电话"
          prop="phone"
          min-width="80"/>
        <el-table-column
          label="性别"
          min-width="40">
          <template slot-scope="scope">
            {{ scope.row.sex | genderFilter }}
          </template>
        </el-table-column>
        <el-table-column
          label="年龄"
          min-width="40">
          <template slot-scope="scope">
            {{ scope.row.birthday | ageFilter }}
          </template>
        </el-table-column>
        <el-table-column label="裸眼视力">
          <el-table-column
            label="右眼"
            prop="ucva_od"
            min-width="40"/>
          <el-table-column
            label="左眼"
            prop="ucva_os"
            min-width="40"/>
        </el-table-column>
        <el-table-column label="戴镜视力">
          <el-table-column
            label="右眼"
            prop="wear_eyesight_od"
            min-width="40"/>
          <el-table-column
            label="左眼"
            prop="wear_eyesight_os"
            min-width="40"/>
        </el-table-column>
        <el-table-column
          label="所属机构"
          prop="merchant_name"
          min-width="80"/>
      </el-table>

      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
  </div>
</template>

<script>
import { fetchList } from '@/api/screenings'
import { fetchDistribute } from '@/api/screening_reports'
import { fetchSchools } from '@/api/schools'
import ShowScreening from '../components/show_screening'
export default {
  components: { ShowScreening },
  data() {
    return {
      chartData: {
        columns: ['视力', '右眼（OD）', '左眼（OS）'],
        rows: [
          { '视力': '< 4.0', '右眼（OD）': 0, '左眼（OS）': 0 },
          { '视力': '4.0-4.1', '右眼（OD）': 0, '左眼（OS）': 0 },
          { '视力': '4.2-4.3', '右眼（OD）': 0, '左眼（OS）': 0 },
          { '视力': '4.4-4.5', '右眼（OD）': 0, '左眼（OS）': 0 },
          { '视力': '4.6-4.8', '右眼（OD）': 0, '左眼（OS）': 0 },
          { '视力': '4.9-5.0', '右眼（OD）': 0, '左眼（OS）': 0 },
          { '视力': '> 5.0', '右眼（OD）': 0, '左眼（OS）': 0 }
        ]
      },
      formQuery: {
        user: '',
        region: ''
      },
      schools: [],
      list: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        school_id: undefined
      }
    }
  },
  created() {
    this.getList()
    this.getSchools()
  },
  methods: {
    getSchools() {
      fetchSchools().then(res => {
        this.schools = res.data.items
      })
    },
    onClickSearch() {
      this.getList()
      this.getDistribute()
    },
    getDistribute() {
      fetchDistribute(this.listQuery).then(res => {
        console.log('res => ', res)
        this.chartData.rows = res.data
      })
    },
    getList() {
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
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
    handleFilter() {
      this.getList()
    },
    handleFilterClear() {
      this.listQuery.name = ''
      this.listQuery.phone = ''
    }
  }
}
</script>

<style scoped>
  .el-form-item {
    margin-bottom: 0;
  }
</style>
