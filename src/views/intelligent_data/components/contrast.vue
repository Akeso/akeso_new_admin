<template>
  <div class="container">
    <el-row :gutter="20">
      选择日期
      <el-select v-model="selectDate" placeholder="请选择">
        <el-option
          v-for="item in dateOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"/>
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
    </el-row>
    <!--<el-row :gutter="20">-->
    <!--<el-col :span="12">-->
    <!--条件选择-->
    <!--<el-select v-model="selectCondition" placeholder="请选择">-->
    <!--<el-option-->
    <!--v-for="item in conditionOptions"-->
    <!--:key="item.key"-->
    <!--:label="item.label"-->
    <!--:value="item.key"/>-->
    <!--</el-select>-->
    <!--</el-col>-->
    <!--<el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>-->
    <!--</el-row>-->
    <el-row>
      <el-tag>男女对比</el-tag>
    </el-row>
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td class="td-30 title-font">名称</td>
          <td class="td-70 title-font">统计值</td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">指配戴了智能眼镜的儿童， 右边<br>数值为系统里智能儿童的总和。</div>
              <span>智能儿童</span>
            </el-tooltip>
          </td>
          <td>{{ data.deviceChildrenCount }}</td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">指绑定了该机构/医生的所有儿童，右边<br>数值包括智能儿童和非智能儿童的总和。</div>
              <span>全部儿童</span>
            </el-tooltip>
          </td>
          <td>{{ data.childrenCount }}</td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">该值代表所有智能儿童与全部儿童的比值。</div>
              <span>智能/全部儿童占比</span>
            </el-tooltip>
          </td>
          <td>{{ data.deviceChildrenPercent }}%</td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">该值代表在选择的时间段内，智能儿童<br>的每日户外活动达标2小时及以上的情况与<br>所有智能儿童户外活动情况的比值，<br>>该比值越大，说明户外达标的情况越多。</div>
              <span>户外活动情况达标率</span>
            </el-tooltip>
          </td>
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="data.outTimePercent" status="success"/>
          </td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">该值代表在选择的时间段内，智能儿童<br>的每日运动步数达标10000步及以上的情况与<br>所有智能儿童运动步数情况的比值，<br>该比值越大，说明运动达标的情况越多。</div>
              <span>体育运动情况达标率</span>
            </el-tooltip>
          </td>
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="data.stepCountPercent" status="success"/>
          </td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">该值代表在选择的时间段内，智能儿童<br>的每日近距离用眼未超过建议的参考值情况与<br>所有智能儿童近距离用眼情况的比值，<br>该值越大，说明儿童的用眼情况越好。</div>
              <span>近距用眼不良未超标率</span>
            </el-tooltip>
          </td>
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="data.nearworkDayPercent" status="success"/>
          </td>
        </tr>
      </table>
    </el-row>
  </div>
</template>
<script>
const dateOptions = [
  { key: 'first', label: '近一周' },
  { key: 'second', label: '近一个月' },
  { key: 'third', label: '近三个月' }
]
const conditionOptions = [
  { key: 'area', label: '区域对比' },
  { key: 'gender', label: '性别对比' },
  { key: 'age', label: '年龄对比' }
]
export default {
  data() {
    return {
      dateOptions,
      conditionOptions,
      selectDate: 'first',
      selectCondition: 'area',
      data: {}
    }
  },
  methods: {
    handleFilter: function() {
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 10px 5px 10px 5px;
  }
  .el-row {
    margin-top: 10px;
  }
  .table-cls {
    margin-top: 10px;
    width: 100%;
    border: 1px solid #409EFF;
  }
  .td-70 {
    width: 70%;
  }
  .td-50 {
    width: 50%;
  }
  .td-30 {
    width: 30%;
  }
  .td-20 {
    width: 20%;
  }
  .title-font {
    font-weight: bold;
    color: #000;
    cursor: pointer;
  }
</style>
