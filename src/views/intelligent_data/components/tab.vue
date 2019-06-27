<template>
  <div class="app-container">
    <!-- Note that row-key is necessary to get a correct row order. -->
    <el-table v-loading="listLoading" row-key="id" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="scope">
          <span>姓名</span>
        </template>
      </el-table-column>

      <el-table-column width="" align="center" label="Date">
        <template slot-scope="scope">
          <span/>
        </template>
      </el-table-column>

      <el-table-column min-width="" label="Title">
        <template slot-scope="scope">
          <span>是否近视</span>
        </template>
      </el-table-column>

      <el-table-column width="" align="center" label="Author">
        <template slot-scope="scope">
          <span>手机号</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template slot-scope="scope">
          <!--<svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="icon-star"/>-->
          <span>户外时间</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Readings" width="95">
        <template slot-scope="scope">
          <span>近距离用眼时间</span>
        </template>
      </el-table-column>

    </el-table>
    <!-- $t is vue-i18n global function to translate lang (lang in @/lang)  -->
    <div class="show-d">{{ $t('table.dragTips1') }} : &nbsp; {{ oldList }}</div>
    <div class="show-d">{{ $t('table.dragTips2') }} : {{ newList }}</div>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
// import Sortable from 'sortablejs'

export default {
  name: 'DragTable',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      // sortable: null,
      oldList: [],
      newList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
        this.oldList = this.list.map(v => v.id)
        this.newList = this.oldList.slice()
        this.$nextTick(() => {
          // this.setSort()
        })
      })
    }
    // setSort() {
    //   const el = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
    //   this.sortable = Sortable.create(el, {
    //     ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
    //     setData: function(dataTransfer) {
    //       dataTransfer.setData('Text', '')
    //       // to avoid Firefox bug
    //       // Detail see : https://github.com/RubaXa/Sortable/issues/1012
    //     },
    //     onEnd: evt => {
    //       const targetRow = this.list.splice(evt.oldIndex, 1)[0]
    //       this.list.splice(evt.newIndex, 0, targetRow)

    //       // for show the changes, you can delete in you code
    //       const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
    //       this.newList.splice(evt.newIndex, 0, tempIndex)
    //     }
    //   })
    // }
  }
}
</script>

<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
</style>

<style scoped>
.icon-star{
  margin-right:2px;
}
.drag-handler{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d{
  margin-top: 15px;
}
</style>
