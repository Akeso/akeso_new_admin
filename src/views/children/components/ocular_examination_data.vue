<template>
  <div class="">
    <subjectiveTab />
    <objectiveTab />
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
// import Sortable from 'sortablejs'
// import { } from '@/utils/standard'
import objectiveTab from './ocular_objective'
import subjectiveTab from './ocular_subjective'
export default {
  components: {
    objectiveTab,
    subjectiveTab
  },
  props: {
    outTime: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      // sortable: null,
      oldList: [],
      newList: [],
      num1: 0
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
