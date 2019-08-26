<template>
  <div class="month-container">
    <div v-if="!has_child" class="box">
      <h3>没有查询到用户数据</h3>
    </div>
    <div class="header-title">健康用眼行为管理</div>
    <div class="p-2">
      <div class="child-info">
        <span>姓名：{{ child.name }}</span>
        <span>年龄：{{ child.age }}</span>
        <span>性别：{{ child.gender | genderFilter }}</span>
        <span>时间：{{ search.date }}</span>
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
      <el-row>
        <el-col class="h-subtitle">基于本月健康行为数据分析预测如下：</el-col>
        <!--<el-col>-->
        <!--<span class="b-blue c-white subtitle">点击进行近视预测，提早预防近视发展</span>-->
        <!--</el-col>-->
      </el-row>
      <el-row :gutter="20" class="m-t">
        <el-col :span="12">
          <div class="el-card box-card is-always-shadow">
            <div class="el-card__header title">
              <span class="option-title">健康因子</span>
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
                    <span class="b-green complete-num">完成{{ report.out_time_percent }}%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="report.out_time_percent" :color="report.out_time_percent_color" class="progress-l-r m-t-progress p-l-2"/>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon7" alt="" class="icon">
                  <div class="left">
                    <p>户外阳光摄入量</p>
                    <p>建议36W lux/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-green">本月平均值{{ report.lux_day }}lux</p>
                    <span class="b-green complete-num">完成{{ report.lux_day_percent }}%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="report.lux_day_percent" :color="report.lux_day_percent_color" class="progress-l-r m-t-progress p-l-2"/>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon8" alt="" class="icon">
                  <div class="left">
                    <p>运动步数</p>
                    <p>建议12000步/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-green">本月平均值{{ report.step_count }}步</p>
                    <span class="b-green complete-num">完成{{ report.step_count_percent }}%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="report.step_count_percent" :color="report.step_count_percent_color" class="progress-l-r m-t-progress p-l-2"/>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="el-card box-card is-always-shadow">
            <div class="el-card__header title">
              <span class="option-title">危险因子</span>
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
                    <p class="c-red">本月平均值{{ report.nearwork_burden_day }}D</p>
                    <span class="b-red complete-num">风险增加{{ report.nearwork_burden_day_percent }}%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="report.nearwork_burden_day_percent" :color="report.nearwork_burden_day_percent_color" class="progress-l-r m-t-progress p-l-2"/>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon2" alt="" class="icon">
                  <div class="left">
                    <p>不良用眼姿势</p>
                    <p>建议45次/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-red">本月平均值{{ report.bad_posture_times }}次</p>
                    <span class="b-red complete-num">风险增加{{ report.bad_posture_times_percent }}%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="report.bad_posture_times_percent" :color="report.bad_posture_times_percent_color" class="progress-l-r m-t-progress p-l-2"/>
              </div>
              <div class="item">
                <div class="header-item clearfix">
                  <img :src="icon4" alt="" class="icon">
                  <div class="left">
                    <p>近距用眼时间</p>
                    <p>建议240分钟/天</p>
                  </div>
                  <div class="right text-right">
                    <p class="c-red">本月平均值{{ report.nearwork_day }}分钟</p>
                    <span class="b-red complete-num">风险增加{{ report.nearwork_day_percent }}%</span>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="report.nearwork_day_percent" :color="report.nearwork_day_percent_color" class="progress-l-r m-t-progress p-l-2"/>
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
      <el-row class="m-t">
        <el-col :span="24">
          <div class="el-card box-card is-always-shadow">
            <div class="el-card__header title center">
              <span class="title-text b-yellow">本月健康行为习惯 {{ report.grade | gradeFilter }} ，未来近视风险较高</span>
            </div>
            <div class="el-card__body p-2">
              <p class="tit">指导建议：</p>
              <p class="info">1、请您告诉孩子每天把握课间休息时间，不要坐在教室，到户外沐浴阳光或远眺10分钟，可使眼睛得到有效放松，这是目前临床公认的预防近视发生最经济有效的措施；</p>
              <p class="info">2、对于每年近视增长较快者，除了改善读写姿势外，建议家长督促孩子非学习目的每次使用电子产品不超过15分钟，每天累计不超过1小时，完成任务可适当的奖励孩子，这是国家发布的最新近视防控教育指南。</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { fetchMonthlyByPhone } from '@/api/open/reports'
import { FormatYM } from '@/utils/index'
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
  filters: {
    genderFilter(status) {
      const statusMap = {
        male: '男',
        female: '女',
        unknown: '--'
      }
      return statusMap[status]
    },
    gradeFilter(status) {
      const gradeMap = {
        a: '优', b: '良', c: '中', d: '差', e: '数据不完整', f: '无'
      }
      return gradeMap[status]
    }
  },
  data() {
    return {
      message: '这个',
      selectSection: {
        date: new Date()
      },
      icon1,
      icon2,
      icon3,
      icon4,
      icon7,
      icon8,
      grateData: {
        time_array: [
          '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
        ],
        health_index_array: [
          // '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
          // '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
          // '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
      },
      search: {
        phone: undefined,
        name: undefined,
        date: FormatYM(new Date())
      },
      child: {
        name: '-',
        age: '-',
        gender: 'unknown'
      },
      report: {
        health_index: 0,
        wear_time: 0,
        effective_days: 0,
        grade: 'e',
        out_time: 0,
        out_time_percent: 0,
        out_time_percent_color: '',
        lux_day: 0,
        lux_day_percent: 0,
        lux_day_percent_color: '',
        step_count: 0,
        step_count_percent: 0,
        step_count_percent_color: '',
        nearwork_burden_day: 0,
        nearwork_burden_day_percent: 0,
        nearwork_burden_day_percent_color: '',
        bad_posture_times: 0,
        bad_posture_times_percent: 0,
        bad_posture_times_percent_color: '',
        nearwork_day: 0,
        nearwork_day_percent: 0,
        nearwork_day_percent_color: '',
        time_array: [
          '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
        ]
      },
      has_child: false
    }
  },
  created() {
    this.search.name = this.$route.query.name
    this.search.phone = this.$route.query.phone
    this.search.date = this.$route.query.date
    this.getData()
  },
  methods: {
    getData() {
      fetchMonthlyByPhone(this.search).then(res => {
        // console.log('res => ', res.data)
        this.has_child = res.data.has_child
        if (!this.has_child) {
          return
        }
        this.child = res.data.child
        this.report = res.data.report
        this.grateData.time_array = res.data.report.time_array
        this.grateData.health_index_array = res.data.report.health_index_array
        var out_time_percent = res.data.report.out_time_percent
        var lux_day_percent = res.data.report.lux_day_percent
        var step_count_percent = res.data.report.step_count_percent
        var nearwork_burden_day_percent = res.data.report.nearwork_burden_day_percent
        var bad_posture_times_percent = res.data.report.bad_posture_times_percent
        var nearwork_day_percent = res.data.report.nearwork_day_percent
        if (out_time_percent <= 25) {
          this.report.out_time_percent_color = '#c82557'
        } else if (out_time_percent > 25 && out_time_percent <= 50) {
          this.report.out_time_percent_color = '#f5a623'
        } else if (out_time_percent > 50 && out_time_percent <= 75) {
          this.report.out_time_percent_color = '#54ce50'
        } else if (out_time_percent > 75) {
          this.report.out_time_percent_color = '#27adff'
        }
        if (lux_day_percent <= 25) {
          this.report.lux_day_percent_color = '#c82557'
        } else if (lux_day_percent > 25 && lux_day_percent <= 50) {
          this.report.lux_day_percent_color = '#f5a623'
        } else if (lux_day_percent > 50 && lux_day_percent <= 75) {
          this.report.lux_day_percent_color = '#54ce50'
        } else if (lux_day_percent > 75) {
          this.report.lux_day_percent_color = '#27adff'
        }
        if (step_count_percent <= 25) {
          this.report.step_count_percent_color = '#c82557'
        } else if (step_count_percent > 25 && step_count_percent <= 50) {
          this.report.step_count_percent_color = '#f5a623'
        } else if (step_count_percent > 50 && step_count_percent <= 75) {
          this.report.step_count_percent_color = '#54ce50'
        } else if (step_count_percent > 75) {
          this.report.step_count_percent_color = '#27adff'
        }
        if (nearwork_burden_day_percent <= 25) {
          this.report.nearwork_burden_day_percent_color = '#27adff'
        } else if (nearwork_burden_day_percent > 25 && nearwork_burden_day_percent <= 50) {
          this.report.nearwork_burden_day_percent_color = '#54ce50'
        } else if (nearwork_burden_day_percent > 50 && nearwork_burden_day_percent <= 75) {
          this.report.nearwork_burden_day_percent_color = '#f5a623'
        } else if (nearwork_burden_day_percent > 75) {
          this.report.nearwork_burden_day_percent_color = '#c82557'
        }
        if (bad_posture_times_percent <= 25) {
          this.report.bad_posture_times_percent_color = '#27adff'
        } else if (bad_posture_times_percent > 25 && bad_posture_times_percent <= 50) {
          this.report.bad_posture_times_percent_color = '#54ce50'
        } else if (bad_posture_times_percent > 50 && bad_posture_times_percent <= 75) {
          this.report.bad_posture_times_percent_color = '#f5a623'
        } else if (bad_posture_times_percent > 75) {
          this.report.bad_posture_times_percent_color = '#c82557'
        }
        if (nearwork_day_percent <= 25) {
          this.report.nearwork_day_percent_color = '#27adff'
        } else if (nearwork_day_percent > 25 && nearwork_day_percent <= 50) {
          this.report.nearwork_day_percent_color = '#54ce50'
        } else if (nearwork_day_percent > 50 && nearwork_day_percent <= 75) {
          this.report.nearwork_day_percent_color = '#f5a623'
        } else if (nearwork_day_percent > 75) {
          this.report.nearwork_day_percent_color = '#c82557'
        }
      })
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
    font-weight: 300;
    color: black;
  }
  .box{
    display: -webkit-flex; /* Safari */
    display: flex;
    align-self: center;
    justify-content: center;
    margin: 20px;
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
    padding: 16px 0;
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
    font-weight: 300;
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
    margin: 12px 0;
  }
  .tit{
    font-size: 20px;
    padding-bottom: 8px;
    font-weight: 300;
  }
  .info{
    line-height: 24px;
    font-weight: 300;
  }
  .p-2{
    padding: 12px;
  }
  .p-nt-2{
    padding: 0 20px 0 20px;
  }
  .header-title{
    height: 48px;
    line-height: 70px;
    text-align: center;
    font-size: 28px;
    /*color: #fff;*/
    font-weight: 200;
    /*letter-spacing: 10px;*/
  }
  .subtitle{
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 18px;
  }
  .h-subtitle{
    font-size: 18px;
    font-weight: 300;
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
    font-weight: 300;
  }
  .child-info span:last-child{
    margin-right: 0;
  }
</style>
