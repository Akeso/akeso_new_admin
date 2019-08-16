<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="编辑标签" width="60%" @close="resetData">

    <el-row :gutter="20">
      <el-col :span="6">
        <h3>用户标签</h3>
        <!--<el-checkbox :indeterminate="isIndeterminateUser" v-model="checkAllUser" @change="handleCheckAllChange">全选</el-checkbox>-->
        <div style="margin: 15px 0;"/>
        <el-checkbox-group v-model="tag_ids" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="item in user_tags" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
      </el-col>
      <el-col :span="6">
        <h3>用户标签</h3>
        <div style="margin: 15px 0;"/>
        <el-checkbox-group v-model="tag_ids" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="item in clinical_tags" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>

    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchList } from '@/api/tags'
import { updateChildTags } from '@/api/children'
export default {
  data() {
    return {
      id: undefined,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      isIndeterminateUser: false,
      checkAllUser: false,
      user_tags: [],
      clinical_tags: [],
      tag_ids: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    handleCheckAllChange() {
    },
    handleCheckedCitiesChange() {
      console.log('aaaaaaaaaaaa => ', this.tag_ids)
    },
    handleClickCancel() {
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      updateChildTags({ id: this.id, tag_ids: this.tag_ids }).then(res => {
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.eventBus.$emit('updateChildInformation', res.data)
        this.dialogFormVisible = false
      })
    },
    show(val) {
      this.id = val.id
      this.tag_ids = val.tagIds
      this.dialogFormVisible = true
    },
    getData() {
      fetchList().then(res => {
        this.user_tags = res.data.user_tags
        this.clinical_tags = res.data.clinical_tags
      })
    },
    resetData() {
      this.temp = {
        id: undefined,
        title: undefined,
        description: undefined,
        category: undefined,
        article_content: undefined
      }
    }
  }
}
</script>
