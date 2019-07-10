<template>
  <div class="">
    <el-row style="margin-bottom: 10px; text-align:left;">
      <el-col>
        <label for="">视功能检查时间： </label>
        <el-date-picker
          :editable="false"
          :clearable="false"
          v-model="selectDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"/>
      </el-col>
    </el-row>
    <visualTab />
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
// import Sortable from 'sortablejs'
// import { } from '@/utils/standard'
import visualTab from './visual_function_examination_tab'
export default {
  components: {
    visualTab
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
</style>
