<template>
  <div class="">
    <el-row>
      <el-col>
        <h3 class="text-left">视力检查</h3>
      </el-col>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <thead>
          <tr>
            <th class="td-20 title-font tab-header" />
            <th class="td-20 title-font tab-header" style="width: 26%;">裸眼远视力</th>
            <th class="td-20 title-font tab-header" style="width: 26%;">戴镜远视力</th>
            <th class="td-20 title-font tab-header" style="width: 26%;">裸眼近视力</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="title-font tab-header">右眼OD</td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectDataList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="title-font tab-header">左眼OS</td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectDataList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="title-font tab-header">双眼OU</td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in selectDataList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
        </tbody>
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
      newList: [],
      selectDate: new Date(),
      num1: 0,
      selectData: ['', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.5', '2.0', '0.08', '0.06', '0.05', '0.04', '0.02', '树指', '手动', '光感', '无光感'],
      selectDataList: ['', '0.03', '0.04', '0.05', '0.06', '0.08', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2']
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
