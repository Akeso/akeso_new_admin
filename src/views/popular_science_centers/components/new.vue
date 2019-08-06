<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增文章" width="70%">
    <el-form ref="ruleForm" :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="name" label="标题">
        <el-input v-model="temp.title" autocomplete="off" clearable style="width: 50%;" placeholder="标题"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="简介描述" prop="gender">
        <el-input v-model="temp.description" clearable style="width: 50%;" placeholder="简介描述" />
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="类别">
        <el-select v-model="temp.category" placeholder="类别">
          <el-option v-for="item in article_types" :label="item.name" :value="item.id" :key="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="文章内容">
        <el-input v-model="temp.article_content" style="width: 50%;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createItem } from '@/api/popular_science_centers'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      article_types: [],
      temp: {
        title: undefined,
        description: undefined,
        category: undefined,
        article_content: undefined
      }
    }
  },
  created() {
    // console.log('aaa => ', this.$store.state.article_types)
  },
  methods: {
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      createItem(this.temp).then(res => {
        this.$message({
          message: '创建成功',
          type: 'success'
        })
        this.dialogFormVisible = false
      })
    },
    show() {
      this.article_types = this.$store.state.articleTypes.article_types
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        title: undefined,
        description: undefined,
        category: undefined,
        article_content: undefined
      }
    }
  }
}
</script>
