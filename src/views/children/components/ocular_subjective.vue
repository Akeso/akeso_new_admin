<template>
  <div class="" style="">
    <el-row>
      <el-col class="text-left title">
        <label for="">眼部检查（主观检查）检查日期： </label>
        <el-date-picker
          :editable="false"
          :clearable="false"
          v-model="getData.examinationTime"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"/>
      </el-col>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <thead>
          <tr>
            <th class="td-20 title-font tab-header" colspan="2" style="width:40%;">检查项目</th>
            <th class="td-20 title-font tab-header">右眼</th>
            <th class="td-20 title-font tab-header">左眼</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="title-font -tab-header" rowspan="7">裂隙灯</td>
            <td>眼睑</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampEyelidOd" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampEyelidOs" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>结膜</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampConjunctivaOd" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="getData.slitLampConjunctivaOs" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>角膜</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampCorneaOd" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampCorneaOs" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>前房</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampAtriaOd" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampAtriaOs" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>虹膜</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampIrisOd" type="text" name="startValInput" value="正常" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampIrisOs" type="text" name="startValInput" value="正常" >
              </label>
            </td>
          </tr>
          <tr>
            <td>瞳孔</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampPupilOd" type="text" name="startValInput" value="正常" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampPupilOs" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>晶体</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampLensOd" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.slitLampLensOs" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td colspan="2">眼底</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.fundusOd" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model="getData.fundusOs" type="text" name="startValInput" >
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
      num1: '',
      subjectiveSelectDate: new Date(),
      baseList: ['', '底向in', '底向out', '底向up', '底向down'],
      correctList: ['', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.6', '0.8', '1.0', '1.2', '1.5', '2.0', '0.08', '0.06', '0.05', '0.04', '0.02', '数指', '手动', '光感', '无光感'],
      medicine: ['', '托吡卡胺', '环戊通', '阿托品', '其他']
    }
  },
  computed: {
    getData: function() {
      return this.$store.getters.Subject
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped>
  .title{
    padding: 5px 0 10px;
  }
</style>
