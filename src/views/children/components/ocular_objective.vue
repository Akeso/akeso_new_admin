<template>
  <div class="">
    <el-row>
      <el-col class="text-left title">
        <label for="">眼部检查（客观检查）检查日期： </label>
        <el-date-picker
          :editable="false"
          :clearable="false"
          v-model="objectiveSelectDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"/>
      </el-col>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <thead>
          <tr>
            <th class="td-20 title-font tab-header" style="width:20%;">检查项目</th>
            <th class="td-20 title-font tab-header">具体检查参数</th>
            <th class="td-20 title-font tab-header">右眼</th>
            <th class="td-20 title-font tab-header">左眼</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="title-font -tab-header">眼压</td>
            <td>非接触眼压（mmHg</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td rowspan="9">眼部生物学参数检查</td>
            <td>眼轴长度（mm）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>角膜平坦曲率（D）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>角膜陡峭曲率（D）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>角膜平均曲率（D）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>中央角膜厚度（um）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>角膜直径（mm）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>前房深度（mm）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>瞳孔大小（mm）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>晶体厚度（mm）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td rowspan="2">泪液检查</td>
            <td>Schirmer试验（mm）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
          </tr>
          <tr>
            <td>泪膜破裂时间BUT（S）</td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
              </label>
            </td>
            <td>
              <label class="label" for="startValInput">
                <input v-model.number="num1" type="text" name="startValInput" >
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
      objectiveSelectDate: new Date(),
      baseList: ['', '底向in', '底向out', '底向up', '底向down'],
      correctList: ['', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.6', '0.8', '1.0', '1.2', '1.5', '2.0', '0.08', '0.06', '0.05', '0.04', '0.02', '数指', '手动', '光感', '无光感'],
      medicine: ['', '托吡卡胺', '环戊通', '阿托品', '其他']
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
    padding: 30px 0 10px;
  }
</style>
