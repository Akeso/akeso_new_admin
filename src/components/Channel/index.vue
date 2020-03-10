<template>
  <!--<el-dropdown trigger="click" class="international" @command="handleSetLanguage">-->
  <div class="international">
    <router-link to="/channels/channels">
      <svg-icon class-name="international-icon" icon-class="message"/>
      <el-badge v-if="dot_show" is-dot class="item"/>
    </router-link>
  </div>
  <!--</el-dropdown>-->
</template>

<script>
import { fetchCount } from '@/api/channels'
export default {
  data() {
    return {
      count: 0,
      channel: {}
    }
  },
  computed: {
    dot_show() {
      return this.count > 0
    },
    language() {
      return this.$store.getters.language
    }
  },
  created() {
    fetchCount().then(res => {
      this.count = res.data.count
      console.log('count => ', this.count)
    })
    // if (this.$store.getters.baseType === 'admin') {
    //   fetchCount().then(res => {
    //     this.count = res.data.count
    //     console.log('count => ', this.count)
    //   })
    // }
    this.channel = this.$cable.subscriptions.create('AdminLogsChannel', {
      connected() {
        console.log('client connected to server!')
      },
      disconnected() {
        console.log('client disconnected from server!')
      },
      received(data) {
        this.count = data.count
      }
    })
  },
  mounted() {
    // this.initCable()
  },
  methods: {
    handleClick() {
      console.log('message')
    },
    initCable: function() {
      this.$cable.subscriptions.create({
        channel: 'AdminLogsChannel'
      }, {
        received(data) {
          this.count = data.count
        }
      })
    }
  }
}
</script>

<style scoped>
  .international-icon {
    font-size: 20px;
    cursor: pointer;
    vertical-align: -5px!important;
  }
</style>

