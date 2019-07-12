<template>
  <div class="">
    <el-row style="margin-bottom: 10px; text-align:left;">
      <el-col>
        <label for="">复查验光检查日期： </label>
        <el-date-picker
          :editable="false"
          :clearable="false"
          v-model="getRequireData.callbackExamination.examinationTime"
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
  computed: {
    getRequireData: function() {
      // return this.$store.state.eyeExaminations.optometric
      return this.$store.getters.eyeExation
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
