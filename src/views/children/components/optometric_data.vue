<template>
  <div class="">
    <el-row style="margin-bottom: 10px; text-align:left;">
      <el-col>
        <label for="">验光数据检查日期： </label>
        <el-date-picker
          :editable="false"
          :clearable="false"
          v-model="selectDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"/>
      </el-col>
    </el-row>
    <eyesightTested />
    <odlMirrorDegree />
    <hitomi />
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
// import Sortable from 'sortablejs'
// import { } from '@/utils/standard'
import eyesightTested from './optometric_data_eyesight_tested'
import odlMirrorDegree from './optometric_data_old_mirror_degree'
import hitomi from './optometric_data_hitomi'
export default {
  components: {
    eyesightTested,
    odlMirrorDegree,
    hitomi
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
