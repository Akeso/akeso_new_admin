<template>
  <div>
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>儿童基本信息</span>
        </div>
        <el-row type="flex" class="row-bg">
          <el-col :span="4">
            <div>
              <!--<img :src="child.avatar" class="pan-thumb">-->
              <el-avatar :size="140" :src="child.avatar" fit="fill" shape="circle">
                <img v-if="child.gender == 'male'" :src="avatarBoy" >
                <img v-else :src="avatarGirl" >
              </el-avatar>
            </div>
            <div class="btn-user">
              <el-button type="primary" @click="handleClickEditChild">编辑用户信息</el-button>
            </div>
            <div class="btn-user">
              <el-button type="primary" @click="handleClickEditTags">编辑标签</el-button>
            </div>
            <div class="btn-user">
              <el-button type="success" @click="handleClickChannel">健康咨询</el-button>
            </div>
            <!--<div class="btn-user">-->
            <!--<el-button type="success" @click="handleClickBilling">销售开单</el-button>-->
            <!--</div>-->
          </el-col>
          <el-col :span="18">
            <el-row>
              <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
                <tr>
                  <td style="width: 20%;">姓名</td>
                  <td style="width: 15%">{{ child.name }}</td>
                  <td style="width: 15%">性别</td>
                  <td style="width: 15%">{{ child.gender | genderFilter }}</td>
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
                <tr>
                  <td>近家族史</td>
                  <td colspan="2">{{ child.motherEye }} - {{ child.fatherEye }}</td>
                  <td>联系电话</td>
                  <td colspan="2">{{ child.phone }}</td>
                </tr>
                <tr>
                  <td>眼病史</td>
                  <td colspan="5">{{ child.eyeIllnessHistory || '-' }}</td>
                </tr>
                <tr>
                  <td>居住地</td>
                  <td colspan="2">{{ child.locationString || '-' }}</td>
                  <td>学校</td>
                  <td colspan="2">{{ child.school || '-' }}</td>
                </tr>
                <tr>
                  <td>用户标签</td>
                  <td colspan="5">
                    <span v-if="child.userTags.length === 0"> - </span>
                    <el-tag v-for="item in child.userTags" :key="item">{{ item }}</el-tag>
                  </td>
                </tr>
                <tr>
                  <td>临床标签</td>
                  <td colspan="5">
                    <span v-if="child.clinicalTags.length === 0"> - </span>
                    <el-tag v-for="item in child.clinicalTags" :key="item">{{ item }}</el-tag>
                  </td>
                </tr>
                <tr>
                  <td>绑定设备</td>
                  <td colspan="2">{{ child.device || '-' }}</td>
                  <td>绑定机构</td>
                  <td colspan="2">
                    {{ child.doctor || '-' }}
                    <el-button v-if="$store.getters.baseType && child.doctor" type="primary" size="mini" round @click="handleClickUnbindDoctor">解绑</el-button>
                  </td>
                </tr>
                <tr>
                  <td>用户资料完成度</td>
                  <td colspan="5">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="child.integrity" status="success" style="margin-top: 10px;"/>
                  </td>
                </tr>
              </table>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <Contact ref="contact" :child-id="childId"/>
    <Channel ref="channel"/>
    <EditChild ref="edit_child" />
    <EditTags ref="edit_tags" />
  </div>
</template>

<script>
import { fetchChild, unbindDoctor } from '@/api/children'
import Contact from './contact'
import Channel from '../../components/channel'
import EditChild from '../../components/edit_child'
import EditTags from './editTags'
import avatarBoy from '@/assets/images/child_boy.png'
import avatarGirl from '@/assets/images/child_girl.png'
export default {
  components: { Contact, Channel, EditChild, EditTags },
  filters: {
    genderFilter(status) {
      const statusMap = {
        male: '男',
        female: '女'
      }
      return statusMap[status]
    }
  },
  props: {
    childId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      avatarBoy,
      avatarGirl,
      loadSuccess: false,
      // avatarUrl: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg',
      emptyText: '',
      child: {
        avatar: '',
        name: '.',
        gender: '.',
        age: '.',
        height: '.',
        weight: '.',
        userTags: [],
        clinicalTags: []
      }
    }
  },
  created() {
    this.loadSuccess = false
    this.getInformation()
    this.eventBus.$on('updateChildInformation', (data) => {
      this.child = data
    })
  },
  methods: {
    handleClickEditTags() {
      this.$refs.edit_tags.show(this.child)
    },
    handleClickEditChild() {
      this.$refs.edit_child.handleShow(this.child)
    },
    handleClickChannel() {
      if (this.childId) {
        this.$refs.channel.handleShow(this.childId)
      }
    },
    handleClickBilling() {
      this.$router.push({ path: '/preview/billing/' + this.childId })
    },
    handleClickUnbindDoctor() {
      if (this.childId) {
        this.$confirm('确定要解绑该用户绑定的医生吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          unbindDoctor({ id: this.childId }).then(res => {
            this.$message({
              message: '解绑成功',
              type: 'success'
            })
            this.getInformation()
          })
        }).catch(() => {
        })
      }
    },
    getInformation() {
      fetchChild({ id: this.childId }).then(response => {
        this.loadSuccess = true
        this.child = response.data
        this.eventBus.$emit('updateChild', this.child)
      })
    }
  }
}
</script>

<style scoped>
  .pan-thumb {
    /*width: 90%;*/
    /*height: 100%;*/
    /*transform-origin: 95% 40%;*/
    /*transition: all 0.3s ease-in-out;*/
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
  .el-tag {
    margin-right: 5px;
  }
</style>
