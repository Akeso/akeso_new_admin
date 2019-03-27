<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Child Information</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          <a :href="downloadUrl + '?child_id=' + userId + '&selectDate=' + selectDate">export data</a>
        </el-button>
      </div>
      <el-row style="margin-bottom: 10px;">
        <el-col>
          <label for="">Select Date</label>
          <el-date-picker
            :editable="false"
            :clearable="false"
            v-model="selectDate"
            type="date"
            placeholder="Select Date"
            value-format="yyyy-MM-dd"
            @change="changeDate"/>
        </el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6"><div class="grid-content bg-purple">Name</div></el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.childName }}</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6"><div class="grid-content bg-purple">Monitoring indicators</div></el-col>
        <el-col :span="18"><div class="grid-content bg-purple">Monitoring results</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/> Time outdoor</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.outTime }} minutes</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Eye protection lighting time</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.protectLuxTime }} minutes</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Outdoor sunlight intake</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.outTimeLux }} lux</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Movement steps</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.stepCount }} step</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Neck burden</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.nearworkBurdenDay }} D</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Time near-word</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.nearworkTotal }} minutes</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Poor eye position</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.badPostureTimes }} times</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Average eye distance</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.avgEyeDistance }} cm</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Use eye time continuously</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.eyeTimeContinuously }} hours</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Use eye frequency continuously</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.eyeFrequencyContinuously }} times</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Accommodation burden</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.accommodationBurden }} D/hour</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/>  Mean daily light exposure</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.dailyLightExposure }} lux/min</div></el-col>
      </el-row>
      <el-row :gutter="6">
        <el-col :span="6">
          <div class="grid-content bg-purple"><svg-icon :icon-class="'eye-open'"/> Mean night light exposure</div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple">{{ healthScore.dailyNightExposure }} lux/min</div></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { fetchDailyEn } from '@/api/reports'
export default {
  data() {
    return {
      userId: this.$route.params.id,
      selectDate: new Date(),
      healthScore: {},
      downloadUrl: '/api/a1/excels/original_data'
    }
  },
  mounted() {
  },
  created() {
    this.getDaily()
  },
  methods: {
    getDaily() {
      fetchDailyEn({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        this.healthScore = response.data
      })
    },
    changeDate() {
      this.getDaily()
    }
  }
}
</script>

<style scoped>
.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding-left: 10px;
  /*text-align: center;*/
  line-height: 35px;
}
/* element中的样式 */
.el-row {
  margin-bottom: 5px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
</style>

