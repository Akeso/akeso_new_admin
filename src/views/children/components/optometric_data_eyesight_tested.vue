<template>
  <div class="" style="width: 60%;">
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
            <td class="title-font -tab-header">右眼OD</td>
            <td>
              <select v-model="getOptometricData.nakedEyeDistantVisualAcuityOd" class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getOptometricData.wearGlassDistantVisualAcuityOd" class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getOptometricData.nakedEyeNearVisualAcuityOd" class="label" name="">
                <option v-for="(item, index) in selectDataList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="title-font -tab-header">左眼OS</td>
            <td>
              <select v-model="getOptometricData.nakedEyeDistantVisualAcuityOs" class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getOptometricData.wearGlassDistantVisualAcuityOs" class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getOptometricData.nakedEyeNearVisualAcuityOs" class="label" name="">
                <option v-for="(item, index) in selectDataList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="title-font -tab-header">双眼OU</td>
            <td>
              <select v-model="getOptometricData.nakedEyeDistantVisualAcuityOu" class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getOptometricData.wearGlassDistantVisualAcuityOu" class="label" name="">
                <option v-for="(item, index) in selectData" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getOptometricData.nakedEyeNearVisualAcuityOu" class="label" name="">
                <option v-for="(item, index) in selectDataList" :key="index" :value="item">{{ item }}</option>
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
      oldList: [],
      newList: [],
      selectDate: new Date(),
      num1: 0,
      selectData: ['', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.5', '2.0', '0.08', '0.06', '0.05', '0.04', '0.02', '树指', '手动', '光感', '无光感'],
      selectDataList: ['', '0.03', '0.04', '0.05', '0.06', '0.08', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2']
    }
  },
  computed: {
    getOptometricData: function() {
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
