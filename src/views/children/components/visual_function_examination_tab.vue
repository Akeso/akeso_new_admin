<template>
  <div class="">
    <el-row>
      <el-col>
        <h3 class="text-left">小瞳和散瞳验光</h3>
      </el-col>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td class="title-font">主导眼</td>
          <td colspan="5">
            <select class="label" name="">
              <option v-for="(item, index) in dominantEye" :key="index" value="item">{{ item }}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="title-font">眼位</td>
          <td colspan="5">
            <label class="label" for="startValInput">
              <input v-model.number="num1" type="text" name="startValInput" >
            </label>
          </td>
        </tr>
        <tr>
          <td class="title-font">眼球运动</td>
          <td colspan="5">
            <label class="label" for="startValInput">
              <input v-model.number="num1" type="text" name="startValInput" >
            </label>
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="title-font">worth四点</td>
          <td class="title-font">距离33cm</td>
          <td colspan="4">
            <select class="label" name="">
              <option v-for="(item, index) in distanceThirty" :key="index" value="item">{{ item }}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="title-font">距离6m</td>
          <td colspan="4">
            <select class="label" name="">
              <option v-for="(item, index) in distanceThirty" :key="index" value="item">{{ item }}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="5"/>
          <td class="title-font">参考值范围</td>
        </tr>
        <tr>
          <td colspan="2" class="title-font">立体视检查</td>
          <td>
            <select class="label" name="">
              <option v-for="(item, index) in Stereoscopy" :key="index" value="item">{{ item }}</option>
            </select>
          </td>
          <td colspan="2"/>
          <td>40~2000</td>
        </tr>
        <tr>
          <td rowspan="4" class="title-font">远距离</td>
          <td class="title-font">隐斜(△)</td>
          <td colspan="3" class="clearfix">
            <div>
              <label class="about" for="startValInput">
                <span>H:</span>
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </div>
            <div style="margin-top:6px;">
              <label class="about" for="startValInput">
                <span>V:</span>
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </div>
          </td>
          <td>+1—-3</td>
        </tr>
        <tr>
          <td/>
          <td width="20%" class="title-font">模糊点</td>
          <td width="20%" class="title-font">破裂点</td>
          <td width="20%" class="title-font">恢复点</td>
          <td/>
        </tr>
        <tr>
          <td class="title-font">散开储备力BI(△)</td>
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
          <td>-/5—9/3—5</td>
        </tr>
        <tr>
          <td class="title-font">集合储备力BO(△)</td>
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
          <td>7—19/5—23/8—12</td>
        </tr>
        <tr>
          <td rowspan="10" class="title-font">近距离</td>
          <td class="title-font">调节反应BCC(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>0—+0.75</td>
        </tr>
        <tr>
          <td class="title-font">负相对调节NRA(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>+1.75—+2.25</td>
        </tr>
        <tr>
          <td class="title-font">正相对调节PRA(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>-1.75—-3.00</td>
        </tr>
        <tr>
          <td class="title-font">隐斜(△)</td>
          <td colspan="3" class="clearfix">
            <div>
              <label class="about" for="startValInput">
                <span>H:</span>
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </div>
            <div style="margin-top:6px;">
              <label class="about" for="startValInput">
                <span>V:</span>
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </div>
          </td>
          <td>0—-6</td>
        </tr>
        <tr>
          <td class="title-font">AC/A(△/D)</td>
          <td colspan="3" class="clearfix">
            <div>
              <label class="about" for="startValInput">
                <span>梯度法:</span>
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </div>
            <div style="margin-top:6px;">
              <label class="about" for="startValInput">
                <span>计算法:</span>
                <input v-model.number="num1" type="number" name="startValInput" >
              </label>
            </div>
          </td>
          <td>2—5/1   3—6/1</td>
        </tr>
        <tr>
          <td/>
          <td class="title-font">模糊点</td>
          <td class="title-font">破裂点</td>
          <td class="title-font">恢复点</td>
          <td/>
        </tr>
        <tr>
          <td class="title-font">散开储备力BI(△)</td>
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
          <td>11—15/19—23/10—16</td>
        </tr>
        <tr>
          <td class="title-font">集合储备力BO(△)</td>
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
          <td>14—24/18—24/7—15</td>
        </tr>
        <tr>
          <td class="title-font">调节幅度AMP(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>最小值：15-（0.25*年龄）</td>
        </tr>
        <tr>
          <td class="title-font">调节灵活度AF（c/m）</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td class="text-left">双眼≥8单眼≥11双眼相差≤1</td>
        </tr>
        <tr>
          <td class="title-font">集合近点NPC(cm)</td>
          <td class="title-font">破裂点</td>
          <td>
            <label class="label" for="startValInput">
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td class="title-font">恢复点</td>
          <td>
            <label class="label" for="startValInput">
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>8/11</td>
        </tr>
        <tr>
          <td colspan="2" class="title-font">调节反应MEM(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model.number="num1" type="number" name="startValInput" >
            </label>
          </td>
          <td>0—+0.75</td>
        </tr>
        <tr>
          <td colspan="6">注：以上参考值来源Morgan值分析法</td>
        </tr>
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
      dominantEye: ['', '右眼', '左眼', '双眼交替'], // 主眼
      eyePosition: '',
      distanceThirty: ['', '可见4个灯，2红2绿', '可见4个灯，1红3绿', '可见2个灯，2红', '可见3个灯，3绿', '可见5个灯'], // worth四点
      Stereoscopy: ['', '有', '无']

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
