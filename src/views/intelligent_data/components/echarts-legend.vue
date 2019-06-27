<template>
  <div class="list">
    <ul class="echarts-list">
      <li><span class="b-blue" />优</li>
      <li><span class="b-green" />良</li>
      <li><span class="b-yellow" />中</li>
      <li><span class="b-red" />差</li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped>
  .list{
    overflow: hidden;
  }
  .echarts-list{
    padding-bottom: 0;
    margin-bottom: 0;
    float: right;
  }
  .echarts-list li{
    margin-left:20px;
    float: left;
    list-style: none;
    font-size: 14px;
  }
  .echarts-list span{
    display: inline-block;
    width:30px;
    height: 16px;
    border-radius: 3px;
    vertical-align: middle;
    margin-right: 10px;
  }
</style>
