<template>
  <div class="">
    <el-row style="margin-bottom: 10px; text-align:left;">
      <el-col>
        <label for="">验光数据检查日期： </label>
        <el-date-picker
          :editable="false"
          :clearable="false"
          v-model="getOptometricData.examination_time"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"/>
      </el-col>
    </el-row>
    <eyesightTested/>
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
      // examination_time: new Date(),
      num1: 0
    }
  },
  computed: {
    getOptometricData: function() {
      // return this.$store.state.eyeExaminations.optometric
      return this.$store.getters.eyeExation
    }
  },
  created() {
    // const data = this.$store.getters.eyeExation
    // data.examination_time = this.examination_time
    // this.$store.commit('handleData', data)
    console.log(this.getOptometricData)
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
