<template>
  <div class="">
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <thead>
          <tr>
            <th class="td-20 title-font tab-header" style="width: 10%;" />
            <th class="td-20 title-font tab-header" style="width: 10%;">眼别</th>
            <th class="td-20 title-font tab-header">球镜 DS</th>
            <th class="td-20 title-font tab-header">柱镜 DC</th>
            <th class="td-20 title-font tab-header">轴向 AX</th>
            <th class="td-20 title-font tab-header">棱镜 △</th>
            <th class="td-20 title-font tab-header">底向Base</th>
            <th class="td-20 title-font tab-header" style="white-space:nowrap">矫正视力</th>
            <th class="td-20 title-font tab-header">瞳距PD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="title-font -tab-header" rowspan="2">小瞳复光</td>
            <td>右眼OD</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.callbackExamination.sphereOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.callbackExamination.cylinderOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.callbackExamination.axisOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.callbackExamination.prismOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <select v-model="getRequireData.callbackExamination.baseOd" class="label" name="">
                <option v-for="(item, index) in baseList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getRequireData.callbackExamination.correctedVisualAcuityOd" class="label" name="">
                <option v-for="(item, index) in correctList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <label class="about" for="startValInput">
                <span>R</span>
                <input v-model="getRequireData.callbackExamination.pupillaryDistanceOd" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>左眼OS</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.callbackExamination.sphereOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.callbackExamination.cylinderOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.callbackExamination.axisOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.callbackExamination.prismOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <select v-model="getRequireData.callbackExamination.baseOs" class="label" name="">
                <option v-for="(item, index) in baseList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getRequireData.callbackExamination.correctedVisualAcuityOs" class="label" name="">
                <option v-for="(item, index) in correctList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <label class="about" for="startValInput">
                <span>L</span>
                <input v-model="getRequireData.callbackExamination.pupillaryDistanceOs" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td class="title-font -tab-header" rowspan="3">配镜处方</td>
            <td>右眼OD</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.glassPrescription.sphereOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.glassPrescription.cylinderOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.glassPrescription.axisOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.glassPrescription.prismOd" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <select v-model="getRequireData.glassPrescription.baseOd" class="label" name="">
                <option v-for="(item, index) in baseList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getRequireData.glassPrescription.correctedVisualAcuityOd" class="label" name="">
                <option v-for="(item, index) in correctList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td rowspan="2">
              <label class="about" for="startValInput">
                <span>OU</span>
                <input v-model="getRequireData.glassPrescription.pupillaryDistanceOu" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>左眼OS</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.glassPrescription.sphereOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.glassPrescription.cylinderOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.glassPrescription.axisOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getRequireData.glassPrescription.prismOs" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <select v-model="getRequireData.glassPrescription.baseOs" class="label" name="">
                <option v-for="(item, index) in baseList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select v-model="getRequireData.glassPrescription.correctedVisualAcuityOs" class="label" name="">
                <option v-for="(item, index) in correctList" :key="index" :value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>佩戴方式</td>
            <td colspan="7">
              <div class="text-left text">
                <el-checkbox v-model="getRequireData.glassPrescription.wearDistance">远用</el-checkbox>
                <el-checkbox-group class="left">
                  <el-checkbox v-model="btn">近用</el-checkbox>
                </el-checkbox-group>
                <label class="add-text" for="startValInput">
                  <span>近附加ADD</span>
                  <input v-model="getRequireData.glassPrescription.nearlyAttachedAdd" type="number" name="startValInput" >
                </label>
              </div>
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
      num1: '',
      btn: 'false',
      baseList: ['', '底向in', '底向out', '底向up', '底向down'],
      correctList: ['', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.6', '0.8', '1.0', '1.2', '1.5', '2.0', '0.08', '0.06', '0.05', '0.04', '0.02', '数指', '手动', '光感', '无光感'],
      medicine: ['', '托吡卡胺', '环戊通', '阿托品', '其他']
      // formThead: ['', '']
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
.left{
  float: left;
  margin: 5px 20px 0;
}
.text >>> .el-checkbox__input.is-checked+.el-checkbox__label {
  color: #606266;
}
.el-checkbox{
  display: inline-block;
}
.add-text input{
  height: 32px;
}
</style>
