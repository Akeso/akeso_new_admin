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
            <select v-model="getData.dominantEye" class="label" name="">
              <option v-for="(item, index) in dominantEye" :key="index" :value="item.title">{{ item.name }}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="title-font">眼位</td>
          <td colspan="5">
            <label class="label" for="startValInput">
              <input v-model="getData.phoria" type="text" name="startValInput" >
            </label>
          </td>
        </tr>
        <tr>
          <td class="title-font">眼球运动</td>
          <td colspan="5">
            <label class="label" for="startValInput">
              <input v-model="getData.eyeMovement" type="text" name="startValInput" >
            </label>
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="title-font">worth四点</td>
          <td class="title-font">距离33cm</td>
          <td colspan="4">
            <select v-model="getData.worth4Dots33cm" class="label" name="">
              <option v-for="(item, index) in distanceThirty" :key="index" :value="item.title">{{ item.name }}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="title-font">距离6m</td>
          <td colspan="4">
            <select v-model="getData.worth4Dots6m" class="label" name="">
              <option v-for="(item, index) in distanceThirtyT" :key="index" :value="item.title">{{ item.name }}</option>
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
            <!--<select v-model="getData.stereoTests" class="label" name="">
              <option v-for="(item, index) in Stereoscopy" :key="index" :value="item">{{ item }}</option>
            </select>-->
            <el-checkbox v-model="getData.isStereoTests">立体视检查</el-checkbox>
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
                <input v-model="getData.distantObliqueH" type="number" name="startValInput" >
              </label>
            </div>
            <div style="margin-top:6px;">
              <label class="about" for="startValInput">
                <span>V:</span>
                <input v-model="getData.distantObliqueV" type="number" name="startValInput" >
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
              <input v-model="getData.distantBiFuzzyPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.distantBiBreakPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.distantBiRecoveryPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>-/5—9/3—5</td>
        </tr>
        <tr>
          <td class="title-font">集合储备力BO(△)</td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.distantBoFuzzyPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.distantBoBreakPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.distantBoRecoveryPoint" type="number" name="startValInput" >
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
              <input v-model="getData.regulateReactionBccOu" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model="getData.regulateReactionBccOd" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model="getData.regulateReactionBccOs" type="number" name="startValInput" >
            </label>
          </td>
          <td>0—+0.75</td>
        </tr>
        <tr>
          <td class="title-font">负相对调节NRA(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model="getData.acmdNraOu" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model="getData.acmdNraOd" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model="getData.acmdNraOs" type="number" name="startValInput" >
            </label>
          </td>
          <td>+1.75—+2.25</td>
        </tr>
        <tr>
          <td class="title-font">正相对调节PRA(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model="getData.acmdPraOu" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model="getData.acmdPraOd" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model="getData.acmdPraOs" type="number" name="startValInput" >
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
                <input v-model="getData.nearObliqueH" type="number" name="startValInput" >
              </label>
            </div>
            <div style="margin-top:6px;">
              <label class="about" for="startValInput">
                <span>V:</span>
                <input v-model="getData.nearObliqueV" type="number" name="startValInput" >
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
                <input v-model="getData.convAcaGradient" type="number" name="startValInput" >
              </label>
            </div>
            <div style="margin-top:6px;">
              <label class="about" for="startValInput">
                <span>计算法:</span>
                <input v-model="getData.convAcaCalculation" type="number" name="startValInput" >
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
              <input v-model="getData.nearBiFuzzyPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.nearBiBreakPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.nearBiRecoveryPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>11—15/19—23/10—16</td>
        </tr>
        <tr>
          <td class="title-font">集合储备力BO(△)</td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.nearBoFuzzyPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.nearBoBreakPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.nearBoRecoveryPoint" type="number" name="startValInput" >
            </label>
          </td>
          <td>14—24/18—24/7—15</td>
        </tr>
        <tr>
          <td class="title-font">调节幅度AMP(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model="getData.acmdAmpOu" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model="getData.acmdAmpOd" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model="getData.acmdAmpOs" type="number" name="startValInput" >
            </label>
          </td>
          <td>最小值：15-（0.25*年龄）</td>
        </tr>
        <tr>
          <td class="title-font">调节灵活度AF（c/m）</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model="getData.acmdFlipperOu" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model="getData.acmdFlipperOd" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model="getData.acmdFlipperOs" type="number" name="startValInput" >
            </label>
          </td>
          <td class="text-left">双眼≥8单眼≥11双眼相差≤1</td>
        </tr>
        <tr>
          <td class="title-font">集合近点NPC(cm)</td>
          <td class="title-font">破裂点</td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.convNearPointBreak" type="number" name="startValInput" >
            </label>
          </td>
          <td class="title-font">恢复点</td>
          <td>
            <label class="label" for="startValInput">
              <input v-model="getData.convNearPointRecovery" type="number" name="startValInput" >
            </label>
          </td>
          <td>8/11</td>
        </tr>
        <tr>
          <td colspan="2" class="title-font">调节反应MEM(D)</td>
          <td>
            <label class="about" for="startValInput">
              <span>OU</span>
              <input v-model="getData.acmdMemOu" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>R</span>
              <input v-model="getData.acmdMemOd" type="number" name="startValInput" >
            </label>
          </td>
          <td>
            <label class="about" for="startValInput">
              <span>L</span>
              <input v-model="getData.acmdMemOs" type="number" name="startValInput" >
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
      dominantEye: [
        {
          name: '',
          title: ''
        },
        {
          name: '右眼',
          title: 'right'
        },
        {
          name: '左眼',
          title: 'left'
        },
        {
          name: '双眼交替',
          title: 'left_right'
        }
      ],
      eyePosition: '',
      distanceThirty: [
        {
          name: '',
          title: ''
        },
        {
          name: '可见4个灯，2红2绿',
          title: 'four_two_two_33cm'
        },
        {
          name: '可见4个灯，1红3绿',
          title: 'four_one_three_33cm'
        },
        {
          name: '可见2个灯，2红',
          title: 'two_two_33cm'
        },
        {
          name: '可见3个灯，3绿',
          title: 'three_three_33cm'
        },
        {
          name: '可见5个灯',
          title: 'five_33cm'
        }
      ], // worth四点
      distanceThirtyT: [
        {
          name: '',
          title: ''
        },
        {
          name: '可见4个灯，2红2绿',
          title: 'four_two_two_6m'
        },
        {
          name: '可见4个灯，1红3绿',
          title: 'four_one_three_6m'
        },
        {
          name: '可见2个灯，2红',
          title: 'two_two_6m'
        },
        {
          name: '可见3个灯，3绿',
          title: 'three_three_6m'
        },
        {
          name: '可见5个灯',
          title: 'five_6m'
        }
      ],
      Stereoscopy: ['', '有', '无']
    }
  },
  computed: {
    getData: function() {
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
