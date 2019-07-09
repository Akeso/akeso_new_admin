<template>
  <div class="">
    <el-row>
      <el-col>
        <h3 class="text-left">小瞳和散瞳验光</h3>
      </el-col>
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
            <th class="td-20 title-font tab-header">矫正视力</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="title-font -tab-header" rowspan="2">小瞳综合验光</td>
            <td>右眼OD</td>
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
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in baseList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in correctList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>左眼OS</td>
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
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in baseList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in correctList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="title-font -tab-header" rowspan="3">散瞳验光</td>
            <td>右眼OD</td>
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
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in baseList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in correctList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>左眼OS</td>
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
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in baseList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
            <td>
              <select class="label" name="">
                <option v-for="(item, index) in correctList" :key="index" value="item">{{ item }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>散瞳药物</td>
            <td colspan="6">
              <select class="label" name="">
                <option v-for="(item, index) in medicine" :key="index" value="item">{{ item }}</option>
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
  },
  data() {
    return {
      num1: '',
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

</style>
