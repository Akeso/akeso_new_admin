<template>
  <div class="month-container">
    <el-row class="p-2">
      <!--{{ generateShow('common.name') }}:-->
      <!--<el-input v-model="search.name" :label="generateShow('common.name')" :placeholder="generateShow('common.name')" style="width: 100px;" class="filter-item" clearable />-->
      {{ generateShow('common.parent_phone') }}:
      <el-input v-model="search.parentPhone" :label="generateShow('common.parent_phone')" :placeholder="generateShow('common.parent_phone')" style="width: 150px;" class="filter-item" clearable />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ generateShow('common.search') }}</el-button>
      <el-button class="filter-item" type="primary" @click="handleFilterClear">{{ generateShow('common.clear') }}</el-button>
    </el-row>
    <div class="report-con p-nt-2">
      <el-row :gutter="20" class="m-t-2">
        <el-col>
          选择日期:
          <el-date-picker
            :clearable="false"
            v-model="selectSection.startDate"
            type="month"
            style="width: 150px;"
            format="yyyy-MM"
            value-format="yyyy-MM"
            placeholder="选择日期"/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">确认</el-button>
        </el-col>
      </el-row>
    </div>
    <h1 class="header-title b-blue">近视健康行为管理</h1>
    <div class="p-2">
      <div class="child-info center">
        <span>姓名：哈哈哈</span>
        <span>年龄：18岁</span>
        <span>性别：男</span>
        <span>时间：2019-08</span>
      </div>
      <el-row :gutter="20" class="m-t">
        <el-col :span="8">
          <div class="grid-content el-card box-card is-always-shadow">
            <p class="c-green grade">{{ report.health_index }}</p>
            <span>本月平均分</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content el-card box-card is-always-shadow">
            <p class="c-green grade">{{ report.wear_time }}</p>
            <span>本月戴镜时间/分钟</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content el-card box-card is-always-shadow">
            <p class="c-green grade">{{ report.effective_days }}</p>
            <span>本月健康同步天数/天</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="m-t">
        <el-col :span="24">
          <div class="el-card box-card is-always-shadow">
            <div class="el-card__header title center">
              <span class="title-text b-yellow">本月健康行为习惯为中+ ，未来近视风险较高</span>
            </div>
            <div class="el-card__body p-2">
              <p class="c-blue tit">指导建议：</p>
              <p class="info">1、请您告诉孩子每天把握课间休息时间，不要坐在教室，到户外沐浴阳光或远眺10分钟，可使眼睛得到有效放松，这是目前临床公认的预防近视发生最经济有效的措施；</p>
              <p class="info">2、对于每年近视增长较快者，除了改善读写姿势外，建议家长督促孩子非学习目的每次使用电子产品不超过15分钟，每天累计不超过1小时，完成任务可适当的奖励孩子，这是国家发布的最新近视防控教育指南。</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="center">
        <el-col class="c-blue h-subtitle">基于本月孩子健康行为习惯，可对孩子未来视力做科学预测哦！</el-col>
        <el-col>
          <span class="b-blue c-white subtitle">点击进行近视预测，提早预防近视发展</span>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="m-t">
        <el-col :span="12">
          <div class="el-card box-card is-always-shadow">
            <div class="el-card__header title">
              <span class="option-title c-blue">健康因子</span>
            </div>
            <div class="el-card__body p-2">
              <div class="header-classify">
                <p>健康行为习惯</p>
                <ul class="list clearfix">
                  <li>
                    <span class="b-red sign" />
                    <span>差</span>
                  </li>
                  <li>
                    <span class="b-yellow sign" />
                    <span>中</span>
                  </li>
                  <li>
                    <span class="b-green sign" />
                    <span>良</span>
                  </li>
                  <li>
                    <span class="b-blue sign" />
                    <span>优</span>
                  </li>
                </ul>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon1" alt="" class="icon">
                  <div class="left">
                    <p>户外时间</p>
                    <p>建议240分钟/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-green">本月平均值{{ report.out_time }}分钟</p>
                    <span class="b-green complete-num">完成7%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="20" color="#c82557" class="progress-l-r m-t-progress p-l-2"/>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon7" alt="" class="icon">
                  <div class="left">
                    <p>户外阳光摄入量</p>
                    <p>建议36W lux/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-green">本月平均值1000000lux</p>
                    <span class="b-green complete-num">完成7%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="20" color="#54ce50" class="progress-l-r m-t-progress p-l-2"/>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon8" alt="" class="icon">
                  <div class="left">
                    <p>运动步数</p>
                    <p>建议12000步/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-green">本月平均值4000步</p>
                    <span class="b-green complete-num">完成7%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="20" color="#27adff" class="progress-l-r m-t-progress p-l-2"/>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="el-card box-card is-always-shadow">
            <div class="el-card__header title">
              <span class="option-title c-blue">危险因子</span>
            </div>
            <div class="el-card__body p-2">
              <div class="header-classify">
                <p>近视风险</p>
                <ul class="list clearfix">
                  <li>
                    <span class="b-blue sign" />
                    <span>低</span>
                  </li>
                  <li>
                    <span class="b-green sign" />
                    <span>中</span>
                  </li>
                  <li>
                    <span class="b-yellow sign" />
                    <span>较高</span>
                  </li>
                  <li>
                    <span class="b-red sign" />
                    <span>特高</span>
                  </li>
                </ul>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon3" alt="" class="icon">
                  <div class="left">
                    <p>颈椎与用眼负担</p>
                    <p>建议720D/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-red">本月平均值294D</p>
                    <span class="b-red complete-num">风险增加59%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="20" color="#c82557" class="progress-l-r m-t-progress p-l-2"/>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon2" alt="" class="icon">
                  <div class="left">
                    <p>不良用眼姿势</p>
                    <p>建议45次/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-red">本月平均值9次</p>
                    <span class="b-red complete-num">风险增加59%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="20" color="#54ce50" class="progress-l-r m-t-progress p-l-2"/>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon4" alt="" class="icon">
                  <div class="left">
                    <p>近距用眼时间</p>
                    <p>建议240分钟/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-red">本月平均值400分钟</p>
                    <span class="b-red complete-num">风险增加59%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="20" color="#27adff" class="progress-l-r m-t-progress p-l-2"/>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content el-card box-card is-always-shadow">
            <div class="clearfix echarts-tit">
              <ul class="list right">
                <li>
                  <span class="b-blue sign" />
                  <span>优</span>
                </li>
                <li>
                  <span class="b-green sign" />
                  <span>良</span>
                </li>
                <li>
                  <span class="b-yellow sign" />
                  <span>中</span>
                </li>
                <li>
                  <span class="b-red sign" />
                  <span>差</span>
                </li>
              </ul>
            </div>
            <div class="chart-wrapper">
              <bar-chart :grate-data = "grateData"/>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { fetchMonthlyByPhone } from '@/api/open/reports'
import icon1 from '../../assets/images/report/icon5.png'
import icon7 from '../../assets/images/report/icon7.png'
import icon8 from '../../assets/images/report/icon8.png'
import icon3 from '../../assets/images/report/icon3.png'
import icon2 from '../../assets/images/report/icon2.png'
import icon4 from '../../assets/images/report/icon4.png'
import BarChart from './components/barEcharts'
export default {
  components: {
    BarChart
  },
  data() {
    return {
      message: '这个',
      selectSection: {
        startDate: new Date()
      },
      icon1,
      icon2,
      icon3,
      icon4,
      icon7,
      icon8,
      grateData: {},
      search: {
        parentPhone: '',
        name: ''
      },
      phone: undefined,
      report: {
        health_index: 0
      }
    }
  },
  created() {
    fetchMonthlyByPhone({ phone: this.phone }).then(res => {
      console.log('res => ', res.data)
      this.report = res.data
    })
  },
  methods: {
    handleFilter() {
    },
    handleFilterClear() {
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .c-green{
    color: #54ce50;
  }
  .b-green{
    background: #54ce50;
  }
  .b-yellow{
    background:#f5a623;
  }
  .c-blue{
    color: #27adff;
  }
  .b-blue{
    background: #27adff;
  }
  .c-white{
    color: #fff;
  }
  .c-red{
    color: #c82557;
  }
  .b-red{
    background: #c82557;
  }
  .grid-content{
    text-align: center;
    padding: 30px 0;
  }
  .grade{
    font-size: 60px;
    padding-bottom: 15px;
  }
  .title-text{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    padding: 0 10px;
    color: #fff;
  }
  .option-title{
    display: inline-block;
    height: 22px;
    line-height: 22px;
    border-radius: 15px;
    font-size: 20px;
    padding: 0 20px;
  }
  .center{
    text-align: center;
  }
  .text-right{
    text-align: right;
  }
  .title{
    padding: 16px 0;
  }
  .m-t{
    margin: 20px 0;
  }
  .tit{
    font-size: 20px;
    padding-bottom: 8px;
  }
  .info{
    line-height: 24px;
  }
  .p-2{
    padding: 20px;
  }
  .p-nt-2{
    padding: 0 20px 20px;
  }
  .header-title{
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #fff;
    font-weight: 500;
    letter-spacing: 10px;
  }
  .subtitle{
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 18px;
  }
  .h-subtitle{
    padding-bottom: 16px;
    font-size: 18px;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .clearfix:after {
    display: block;
    content: '';
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }
  .list li{
    float: left;
    margin-right: 20px;
    list-style: none;
    padding: 20px 0;
  }
  .list li span{
    float: left;
    margin-right: 10px;
  }
  .sign{
    width: 14px;
    height: 14px;
  }
  .complete-num{
    padding: 2px 10px;
    border-radius: 3px;
    color: #fff;
  }
  .header-item{
    padding-left: 35px;
    position: relative;
  }
  .header-item p{
    margin-bottom: 6px;
  }
  .icon{
    width: 34px;
    height: 34px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .p-l-2{
    padding-left: 35px;
  }
  .m-t-progress{
    margin: 14px 0 30px;
  }
  .list,.header-item{
    font-size: 14px;
  }
  .echarts-tit li{
    padding: 0;
  }
  .el-button--medium {
    padding: 10px 20px;
  }
  .child-info span{
    margin-right: 30px;
    font-size: 20px;
    font-weight: 400;
  }
  .child-info span:last-child{
    margin-right: 0;
  }
</style>
