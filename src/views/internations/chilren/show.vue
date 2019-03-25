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
      <el-row>
        <el-col :span="6" style="border: 5px #000000;"><p>Name</p></el-col>
        <el-col :span="18"><p>{{ healthScore.childName }}</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Out Time</p></el-col>
        <el-col :span="18"><p>{{ healthScore.outTime }} minutes</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Eye protection lighting time</p></el-col>
        <el-col :span="18"><p>{{ healthScore.protectLuxTime }} minutes</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Outdoor sunlight intake</p></el-col>
        <el-col :span="18"><p>{{ healthScore.outTimeLux }} lux</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Movement steps</p></el-col>
        <el-col :span="18"><p>{{ healthScore.stepCount }} 步</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Neck burden</p></el-col>
        <el-col :span="18"><p>{{ healthScore.nearworkBurdenDay }} D</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Time near-word</p></el-col>
        <el-col :span="18"><p>{{ healthScore.nearworkTotal }} minutes</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Poor eye position</p></el-col>
        <el-col :span="18"><p>{{ healthScore.badPostureTimes }} times</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Average eye distance</p></el-col>
        <el-col :span="18"><p>{{ healthScore.avgEyeDistance }} cm</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Use eye time continuously</p></el-col>
        <el-col :span="18"><p>{{ healthScore.eyeTimeContinuously }} hours</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Use eye frequency continuously</p></el-col>
        <el-col :span="18"><p>{{ healthScore.eyeFrequencyContinuously }} times</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Accommodation burden</p></el-col>
        <el-col :span="18"><p>{{ healthScore.accommodationBurden }} D/hour</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Mean daily light exposure</p></el-col>
        <el-col :span="18"><p>{{ healthScore.dailyLightExposure }} lux/min</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>Mean night light exposure</p></el-col>
        <el-col :span="18"><p>{{ healthScore.dailyNightExposure }} lux/min</p></el-col>
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

