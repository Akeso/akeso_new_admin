<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="" width="80%" top="30px">
    <el-row>
      <el-col :span="24">
        <div type="flex" justify="space-around" style="padding: 20px;">
          <div :style="{ backgroundColor: levelColor, width: '100%' }">
            <p style="font-size: 18px; padding: 6px;text-align: center;color: white;">{{ temp.level_name }}</p>
            <!--<p :style="{ fontSize: '18px', textAlign: 'center', color: 'white' }">{{ temp.level_name }}</p>-->
          </div>
          <div>
            <p class="header-title">{{ temp.name }}近视筛查报告</p>
          </div>
          <table border="0" cellspacing="0" cellpadding="4" class="table-a">
            <tr>
              <td class="table-td">姓名</td>
              <td class="table-td">{{ temp.name }}</td>
              <td class="table-td">性别</td>
              <td class="table-td">{{ temp.sex | genderFilter }}</td>
              <td class="table-td">年龄</td>
              <td class="table-td">{{ temp.birthday | ageFilter }}</td>
              <td class="table-td content-center"> - </td>
            </tr>
          </table>
          <table border="0" cellspacing="0" cellpadding="4" class="table-a" style="margin-top: 20px;">
            <tr>
              <td class="table-td content-center" colspan="3">视力检查结果</td>
              <td class="table-td content-center" colspan="4">自动电脑验光结果</td>
            </tr>
            <tr>
              <td class="table-td">眼别</td>
              <td class="table-td content-center">裸眼视力</td>
              <td class="table-td content-center">戴镜视力</td>
              <td class="table-td content-center">球镜</td>
              <td class="table-td content-center">柱镜(散光)</td>
              <td class="table-td content-center">轴位(散光方向)</td>
              <td class="table-td content-center">等效球镜度SE</td>
            </tr>
            <tr>
              <td class="table-td">右眼</td>
              <td class="table-td content-center">{{ temp.ucva_od }}</td>
              <td class="table-td content-center">{{ temp.wear_eyesight_od }}</td>
              <td class="table-td content-center">{{ temp.sph_od }}</td>
              <td class="table-td content-center">{{ temp.cyl_od }}</td>
              <td class="table-td content-center">{{ temp.axial_od }}</td>
              <td class="table-td content-center">{{ temp.se_od || '/' }}</td>
            </tr>
            <tr>
              <td class="table-td">左眼</td>
              <td class="table-td content-center">{{ temp.ucva_os }}</td>
              <td class="table-td content-center">{{ temp.wear_eyesight_os }}</td>
              <td class="table-td content-center">{{ temp.sph_os }}</td>
              <td class="table-td content-center">{{ temp.cyl_os }}</td>
              <td class="table-td content-center">{{ temp.axial_os }}</td>
              <td class="table-td content-center">{{ temp.se_os || '/' }}</td>
            </tr>
            <tr>
              <td class="table-td">戴镜方式</td>
              <td class="table-td content-center">{{ temp.wear_state | wearStateFilter }}</td>
              <td class="table-td content-center">是否近视</td>
              <td class="table-td content-center">{{ temp.shortsightedness_state | shortStateFilter }}</td>
              <td class="table-td content-center">/</td>
              <td class="table-td content-center">/</td>
              <td class="table-td content-center">/</td>
            </tr>
            <tr>
              <td class="table-td content-center" colspan="7">
                <p style="font-size: 16px;">日常用眼行为风险结果</p>
              </td>
            </tr>
            <tr>
              <td class="table-td" colspan="2">户外活动及阳光射入达标情况</td>
              <td class="table-td content-center" colspan="2">是否达标</td>
              <td class="table-td content-center" colspan="2">否</td>
              <td class="table-td content-center">/</td>
            </tr>
            <tr>
              <td class="table-td" colspan="2">体育运动情况达标情况</td>
              <td class="table-td content-center" colspan="2">是否达标</td>
              <td class="table-td content-center" colspan="2">否</td>
              <td class="table-td content-center">/</td>
            </tr>
            <tr>
              <td class="table-td" colspan="2">近距离用眼负担超标情况</td>
              <td class="table-td content-center" colspan="2">是否超标</td>
              <td class="table-td content-center" colspan="2">否</td>
              <td class="table-td content-center">/</td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
    <div style="margin: 20px;">
      <h4>温馨提示：</h4>
      <!--      <p style="color: red;">刘浩明的家长：您好，您的孩子裸眼视力正常，但有发展为近视的可能，需进一步完善检查、及时防止近视发生。</p>-->
      <ul>
        <li>1. 戴镜视力指配戴自己现有的眼镜看到的视力水平，裸眼视力为不戴眼镜的视力水平。</li>
        <li>2. “电脑验光”中，“球镜”为近视或远视度数，负值“-”为近视，正值“+”为远视；柱镜为散光度数，轴位为散光的方向，有散光度数才有散光轴位，等效球镜度SE为球镜+1/2柱镜得出的值，为眼睛整体的度数。例如-1.50为近视150度。</li>
        <li>3. 本次电脑验光为非睫状肌麻痹下验光进行筛查，结果不具有诊断意义。</li>
        <li>4. 您也可以扫码预约专业青少年近视防控机构，作进一步全面检查（包括眼病排查、屈光检查、视功能检查、专家分析），眼科专家分析屈光状态及今后的近视发展，制定个性化的近视防控方案。</li>
      </ul>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">确  定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  filters: {
    wearStateFilter(status) {
      const statusMap = {
        no_wear: '无',
        kuangjia: '框架眼镜',
        jiaomo: '角膜塑形镜',
        ruanxing: '软性隐形眼镜',
        rgp: 'RGP'
      }
      return statusMap[status]
    },
    shortStateFilter(status) {
      const statusMap = {
        shortsightedness_no: '否',
        shortsightedness_yes: '是'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        parent_name: undefined,
        phone: undefined,
        child_name: undefined,
        gender: undefined,
        birthday: undefined,
        ucva_od: undefined,
        ucva_os: undefined,
        wear_eyesight_od: undefined,
        wear_eyesight_os: undefined,
        sph_od: undefined,
        cyl_od: undefined,
        axial_od: undefined,
        sph_os: undefined,
        cyl_os: undefined,
        axial_os: undefined
      },
      loading: false
    }
  },
  computed: {
    levelColor: function() {
      if (this.temp.level === 1) { return '#FF0000' }
      if (this.temp.level === 2) { return '#FFFF00' }
      if (this.temp.level === 3) { return '#61ff69' }
      return 'white'
    }
  },
  created() {
  },
  methods: {
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    show(val) {
      this.dialogFormVisible = true
      this.temp = val
    },
    resetData() {
      this.temp = {
        parent_name: undefined,
        phone: undefined,
        child_name: undefined,
        gender: undefined,
        birthday: undefined,
        ucva_od: undefined,
        ucva_os: undefined,
        wear_eyesight_od: undefined,
        wear_eyesight_os: undefined
      }
    }
  }
}
</script>

<style scoped>
  .header-title {
    text-align: center;
    font-size: 24px;
    justify-content: center;
    font-weight: bold;
  }
  .table-a {
    /*border:1px solid #F00;*/
    /*padding: 20px;*/
    width: 100%;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .table-td{
    width: 12.5%;
    font-size: 14px;
    padding: 5px;
    border-left:1px solid gray;
    border-top:1px solid gray;
  }
  .content-center {
    text-align: center;
  }
</style>
