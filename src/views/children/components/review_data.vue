<template>
  <div class="">
    <el-row style="margin-bottom: 10px; text-align:left;">
      <el-col>
        <label for="">复查验光检查日期： </label>
        <el-date-picker
          :editable="false"
          :clearable="false"
          v-model="selectDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"/>
      </el-col>
    </el-row>
    <reviewTab />
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
// import Sortable from 'sortablejs'
// import { } from '@/utils/standard'
import reviewTab from './review_tab'
export default {
  components: {
    reviewTab
  },
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
      newList: [],
      selectDate: new Date(),
      num1: 0
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
.table-cls td,.table-cls tr,.table-cls th{
  border-right: 0.5px solid #ebeef5;
  border-bottom: 0.5px;
  border-left: 0.5px;
  border-top: 0.5px solid #ebeef5;
  border-color:#ebeef5;
}
.table-cls td{
  padding: 6px;
}
.table-cls td input{
  height: 32px;
}
.table-cls td select{
  width: 100%;
  height: 32px;
}
.tab-header{
  background: #27adff;
  color: #fff;
}
.text-left{
  text-align: left;
}
</style>
