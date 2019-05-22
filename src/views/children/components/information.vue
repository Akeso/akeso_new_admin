<template>
  <el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>儿童基本信息</span>
      </div>
      <el-row type="flex" class="row-bg">
        <el-col :span="4">
          <div>
            <img :src="avatarUrl" class="pan-thumb">
          </div>
          <div class="btn-user">
            <el-button type="success">编辑用户信息</el-button>
          </div>
          <div class="btn-user">
            <el-button type="success">联系用户</el-button>
          </div>
          <!--<div class="btn-user">-->
          <!--<el-button type="success">编辑标签</el-button>-->
          <!--</div>-->
        </el-col>
        <el-col :span="18">
          <el-row>
            <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
              <tr>
                <td style="width: 20%;">姓名</td>
                <td style="width: 15%">{{ child.name }}</td>
                <td style="width: 15%">性别</td>
                <td style="width: 15%">{{ child.gender }}</td>
                <td style="width: 20%">年龄</td>
                <td>{{ child.age }}</td>
              </tr>
              <tr>
                <td>身高(cm)</td>
                <td>{{ child.height }}</td>
                <td>体重(kg)</td>
                <td>{{ child.weight }}</td>
                <td>体重指数BMI</td>
                <td>{{ child.bmi || 0 }}</td>
              </tr>
              <tr v-if="showMore">
                <td>近家族史</td>
                <td colspan="2">{{ child.motherEye }} - {{ child.fatherEye }}</td>
                <td>联系电话</td>
                <td colspan="2">{{ child.phone }}</td>
              </tr>
              <tr v-if="showMore">
                <td>眼病史</td>
                <td colspan="5">{{ child.eyeIllnessHistory || '-' }}</td>
              </tr>
              <tr v-if="showMore">
                <td>居住地</td>
                <td colspan="2">{{ child.locationString || '-' }}</td>
                <td>学校</td>
                <td colspan="2">{{ child.school || '-' }}</td>
              </tr>
              <tr v-if="showMore">
                <td>用户标签</td>
                <td colspan="5">
                  <span v-if="child.userTags.length === 0"> - </span>
                  <el-tag v-for="item in child.userTags" :key="item">{{ item }}</el-tag>
                </td>
              </tr>
              <tr v-if="showMore">
                <td>绑定设备</td>
                <td colspan="2">{{ child.device || '-' }}</td>
                <td>绑定医生</td>
                <td colspan="2">
                  {{ child.doctor || '-' }}
                  <el-button type="primary" size="mini" round>解绑</el-button>
                </td>
              </tr>
              <tr v-if="showMore">
                <td>用户资料完成度</td>
                <td colspan="5">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="child.integrity" status="success" style="margin-top: 10px;"/>
                </td>
              </tr>
            </table>
            <el-row type="flex" justify="space-around" style="margin-top: 5px;">
              <span style="cursor: pointer;" @click="clickToShow">
                <i :class="showMore ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"/>
                {{ showMore ? '隐藏' : '显示更多' }}
              </span>
            </el-row>
          </el-row>
          <!--
          <el-row :gutter="6">
            <el-col :span="4"><div class="grid-content bg-purple box-center">姓名</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple box-center">{{ child.name }}</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">性别</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">{{ child.gender }}</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">年龄</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">{{ child.age }}</div></el-col>
          </el-row>
          <el-row :gutter="6">
            <el-col :span="4"><div class="grid-content bg-purple box-center">身高(cm)</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple box-center">{{ child.height }}</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">体重(kg)</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">{{ child.weight }}</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">体重指数BMI</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">{{ child.bmi || 0 }}</div></el-col>
          </el-row>
          <el-row :gutter="6">
            <el-col :span="6"><div class="grid-content bg-purple box-center">近家族史</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple box-center">{{ child.mother_eye }} - {{ child.father_eye }}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">联系电话</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{ child.phone }}</div></el-col>
          </el-row>
          <el-row :gutter="6">
            <el-col :span="6"><div class="grid-content bg-purple box-center">眼病史</div></el-col>
            <el-col :span="18"><div class="grid-content bg-purple box-center">{{ child.eye_illness_history || '-' }}</div></el-col>
          </el-row>
          <el-row :gutter="6">
            <el-col :span="6"><div class="grid-content bg-purple box-center">居住地</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple box-center">{{ child.location_string || '-' }}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">学校</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{ child.school || '-' }}</div></el-col>
          </el-row>
          <el-row :gutter="6">
            <el-col :span="6"><div class="grid-content bg-purple box-center">用户标签</div></el-col>
            <el-col :span="18"><div class="grid-content bg-purple box-center">{{ child.user_tags || '-' }}</div></el-col>
          </el-row>
          <el-row :gutter="6">
            <el-col :span="6"><div class="grid-content bg-purple box-center">绑定设备</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple box-center">{{ child.device || '-' }}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">绑定医生</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{ child.doctor || '-' }}</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6"><div class="grid-content bg-purple">用户资料完成度</div></el-col>
            <el-col :span="18">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="child.integrity" status="success" style="margin-top: 10px;"/>
            </el-col>
          </el-row>
          -->
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script>
import { fetchChild } from '@/api/children'
export default {
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showMore: false,
      avatarUrl: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg',
      emptyText: '',
      child: {
        name: '.',
        gender: '.',
        age: '.',
        height: '.',
        weight: '.'
      }
    }
  },
  created() {
    this.getInformation()
  },
  methods: {
    getInformation() {
      fetchChild({ id: this.userId }).then(response => {
        this.child = response.data
      })
    },
    clickToShow() {
      this.showMore = !this.showMore
    }
  }
}
</script>

<style scoped>
  .pan-thumb {
    width: 90%;
    height: 100%;
    /*background-size: 100%;*/
    /*border-radius: 50%;*/
    /*overflow: hidden;*/
    /*position: absolute;*/
    transform-origin: 95% 40%;
    transition: all 0.3s ease-in-out;
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
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    line-height: 35px;
  }
  .btn-user {
    margin: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .table-cls {
    width: 100%;
    border: 1px solid #409EFF;
  }
</style>
