<template>
  <div class="tab-thead">
    <!-- Note that row-key is necessary to get a correct row order. -->
    <el-table :data="riskChildren" row-key="id" border fit highlight-current-row style="width: 100%">

      <el-table-column prop="name" align="center" label="姓名" width="100px">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="是否近视">
        <template slot-scope="scope">
          <span>{{ scope.row.visionState === 1 ? '否' : '是' }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="" align="center" label="手机号">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>

      <el-table-column width="" align="center" label="户外时间">
        <template slot-scope="scope">
          <span>{{ scope.row.outTime }} 分钟/天</span>
        </template>
      </el-table-column>

      <el-table-column width="" align="center" label="近距离用眼时间">
        <template slot-scope="scope">
          <!--<svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="icon-star"/>-->
          <span>{{ scope.row.nearworkDay }} 分钟/天</span>
        </template>
      </el-table-column>

    </el-table>
    <!-- $t is vue-i18n global function to translate lang (lang in @/lang)  -->
    <!--<div class="show-d">{{ $t('table.dragTips1') }} : &nbsp; {{ oldList }}</div>-->
    <!--<div class="show-d">{{ $t('table.dragTips2') }} : {{ newList }}</div>-->

  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
// import Sortable from 'sortablejs'

export default {
  name: 'DragTable',
  props: {
    riskChildren: {
      type: Array,
      default() {
        return {

        }
      }
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
</style>

<style scoped>
.icon-star{
  margin-right:2px;
}
.drag-handler{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d{
  margin-top: 15px;
}
.tab-thead{
  margin-top:24px;
  margin-bottom: 36px;
}
.tab-thead >>> .el-table thead{
  color: #fff;
}
.tab-thead >>> .el-table thead tr,.tab-thead >>> .el-table thead th{
  background: #27adff;
}
</style>
