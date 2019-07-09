<template>
  <div class="">
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td rowspan="4" class="td-20 title-font">健康因素</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">监测项目</td>
          <td class="td-20 title-font tab-header" style="width: 20%;">标准值</td>
          <td class="td-20 title-font tab-header" style="width: 20%;">建议达标值</td>
          <td class="td-20 title-font tab-header" style="width: 20%;">监测结果</td>
          <td class="td-20 title-font tab-header" style="width: 10%;">评分</td>
        </tr>
        <tr>
          <td class="title-font">户外时间</td>
          <td>
            <label class="label" for="startValInput">
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>≥80分钟/天</td>
          <td class="c-blue">1分钟/天</td>
          <td class="c-blue">1</td>
        </tr>
        <tr>
          <td class="title-font">阳光摄入</td>
          <td>36W lux/天</td>
          <td>≥24W lux/天</td>
          <td class="c-blue">lux/天</td>
          <td class="c-blue">2</td>
        </tr>
        <tr>
          <td class="title-font">运动步数</td>
          <td>12000步/天</td>
          <td>≥8000步/天</td>
          <td class="c-blue">3步/天</td>
          <td class="c-blue">4</td>
        </tr>
        <tr>
          <td rowspan="3" class="title-font">危险因素</td>
          <td class="title-font">颈椎与用眼负荷</td>
          <td>720D/天</td>
          <td>≤480D/天</td>
          <td class="c-blue">D/天</td>
          <td class="c-blue">2</td>
        </tr>
        <tr>
          <td class="title-font">不良用眼姿势</td>
          <td>45次/天</td>
          <td>≤30次/天</td>
          <td class="c-blue">次/天</td>
          <td class="c-blue">2</td>
        </tr>
        <tr>
          <td class="title-font">近距离用眼时间</td>
          <td>240分钟/天</td>
          <td>≤160分钟/天</td>
          <td class="c-blue">分钟/天</td>
          <td class="c-blue">222</td>
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
// import { } from '@/utils/standard'
export default {
  props: {
    outTime: {
      type: Number,
      default: 0
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
  },
  methods: {
  }
}
</script>

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
  width: 100%;
  border:.5px solid #ebeef5;
  border-left: 0.5px solid #ebeef5;
  border-top: .5px;
}
.table-cls td,.table-cls tr{
  border-right: 0.5px solid #ebeef5;
  border-bottom: 0.5px;
  border-left: 0.5px;
  border-top: 0.5px solid #ebeef5;
  border-color:#ebeef5;
}
.tab-header{
  background: #27adff;
  color: #fff;
}
</style>
