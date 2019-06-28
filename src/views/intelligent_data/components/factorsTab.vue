<template>
  <div class="app-container">
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td rowspan="4" class="td-20 title-font">近视健康因素情况</td>
          <td class="td-20 title-font tab-header" style="width: 30%;">监测项目</td>
          <td class="td-20 title-font tab-header" style="width: 20%;">监测结果</td>
          <td class="td-20 title-font tab-header" style="width: 20%;">建议参考值</td>
          <td class="td-20 title-font tab-header" style="width: 10%;">达标情况</td>
        </tr>
        <tr>
          <td class="title-font">户外时间120分钟/天</td>
          <td>111分钟</td>
          <td>≥80分钟</td>
          <td>111</td>
        </tr>
        <tr>
          <td class="title-font">阳光摄入36万lux/天</td>
          <td>lux</td>
          <td>≥24万lux</td>
          <td>111</td>
        </tr>
        <tr>
          <td class="title-font">运动步数12000步/天</td>
          <td>111步</td>
          <td>≥8000步</td>
          <td>1</td>
        </tr>
        <tr>
          <td rowspan="3" class="title-font">近视危险因素情况</td>
          <td class="title-font">近距离用眼时长260分钟/天</td>
          <td>11分钟</td>
          <td>≤160分钟</td>
          <td>22</td>
        </tr>
        <tr>
          <td class="title-font">不良用眼姿态90次/天</td>
          <td>22次</td>
          <td>≤60次</td>
          <td>1</td>
        </tr>
        <tr>
          <td class="title-font">颈椎与用眼负荷720D/天</td>
          <td>1D</td>
          <td>≤480D</td>
          <td>333</td>
        </tr>
        <!--<tr>
          <td class="title-font">初步提示</td>
          <td colspan="4">若想达到近视防控效果最大化，请多去户外运动，沐浴光照，三项健康因素全部达到参考值；同时避免错误用眼习惯增加近视风险，将导致近视加深的近视危险因素下降到参考值以下。</td>
        </tr>-->
      </table>
    </el-row>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
// import Sortable from 'sortablejs'

export default {
  name: 'DragTable',
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
    // this.getList()
  },
  methods: {
    // getList() {
    //   this.listLoading = true
    //   fetchList(this.listQuery).then(response => {
    //     this.list = response.data.items
    //     this.total = response.data.total
    //     this.listLoading = false
    //     this.oldList = this.list.map(v => v.id)
    //     this.newList = this.oldList.slice()
    //     this.$nextTick(() => {
    //       // this.setSort()
    //     })
    //   })
    // }
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
.table-cls{
    margin-top: 20px;
    width: 100%;
    border:.5px solid #979797;
    border-left: 0.5px solid #979797;
    border-top: .5px;
  }
  .table-cls td{
    border-right: 0.5px solid #979797;
    border-bottom: 0.5px;
    border-left: 0.5px;
  }
  .tab-header{
    background: #27adff;
    color: #fff;
  }
</style>
