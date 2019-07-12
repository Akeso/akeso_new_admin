<template>
  <div class="">
    <el-row>
      <el-col>
        <h3 class="text-left">旧镜度数和电脑验光检查</h3>
      </el-col>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <thead>
          <tr>
            <th class="td-20 title-font tab-header" style="width: 10%;" />
            <th class="td-20 title-font tab-header" style="width: 10%;">眼别</th>
            <th class="td-20 title-font tab-header">球镜 DS</th>
            <th class="td-20 title-font tab-header">柱镜 DC</th>
            <th class="td-20 title-font tab-header">轴向 AX</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="title-font -tab-header" rowspan="2">旧镜度数</td>
            <td>右眼OD</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.currentSpectacles.sphereOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.currentSpectacles.cylinderOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.currentSpectacles.axisOd" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>左眼OS</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.currentSpectacles.sphereOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.currentSpectacles.cylinderOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.currentSpectacles.axisOs" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td class="title-font -tab-header" rowspan="2">电脑验光</td>
            <td>右眼OD</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.computerOptometry.sphereOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.computerOptometry.cylinderOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.computerOptometry.axisOd" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>左眼OS</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.computerOptometry.sphereOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.computerOptometry.cylinderOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getOptometricData.computerOptometry.axisOs" type="number" name="startValInput" >
              </label>
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
  },
  data() {
    return {
      num1: ''
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
