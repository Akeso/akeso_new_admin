<template>
  <div>
    <el-card :body-style="{ padding: '0px 10px 10px 20px' }">
      <div slot="header">
        <span>科普文章</span>
      </div>
      <el-form :inline="true" class="demo-form-inline" style="margin-top: 20px;">
        <el-form-item label="类型">
          <el-select v-model="listQuery.article_type" placeholder="全部">
            <el-option v-for="item in article_types" :label="item.name" :value="item.id" :key="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">搜索</el-button>
          <el-button type="success" @click="handleClickCreate">新增</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="list"
        border
        style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
          min-width="180"/>
        <el-table-column
          label="Logo"
          min-width="50">
          <template slot-scope="scope">
            <img :src="scope.row.avatar_url" style="width: 50px; height: 50px;" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="badPostureTimes"
          label="发表机构"
          min-width="60"/>
        <el-table-column
          prop="created_at"
          label="发布时间"
          min-width="60"/>
        <el-table-column
          label="状态"
          min-width="40">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.is_release ? '已发布' : '未发布' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="60" >
          <template slot-scope="scope">
            <el-button type="text" size="small">预览</el-button>
            <el-button type="text" size="small">发布</el-button>
            <el-button type="text" size="small" @click="handleClickEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
        <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
    </el-card>
    <New ref="create" @createSuccess="getList"/>
    <Edit ref="edit_center" @updateSuccess="getList"/>
  </div>
</template>
<script>
import { fetchArticleTypes } from '@/api/article_types'
import { fetchList } from '@/api/popular_science_centers'
import New from './components/new'
import Edit from './components/edit'
export default {
  components: { New, Edit },
  data() {
    return {
      article_types: [],
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        article_type: undefined
      }
    }
  },
  created() {
    this.getArticleTypes()
    this.getList()
  },
  methods: {
    handleClickEdit(val) {
      this.$refs.edit_center.show(val)
    },
    handleClickCreate() {
      this.$refs.create.show()
    },
    getArticleTypes() {
      fetchArticleTypes().then(res => {
        this.article_types = res.data.items
        this.$store.commit('handleArticleTypes', res.data.items)
      })
    },
    getList() {
      fetchList(this.listQuery).then(res => {
        this.list = res.data.items
      })
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    }
  }
}
</script>

<style scoped>
</style>
