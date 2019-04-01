<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>消息盒子</span>
      </div>

      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="2">
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <!--<i class="el-icon-setting"></i>-->
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
