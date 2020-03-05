import Vue from 'vue'
import moment from 'moment' // 导入文件

Vue.filter('genderFilter', (value) => {
  const statusMap = {
    male: '男',
    female: '女',
    unknown: '未知'
  }
  return statusMap[value]
})

Vue.filter('ageFilter', (value) => {
  let age = 0
  if (value) {
    const text = moment(value, 'YYYY-MM-DD').fromNow()
    age = parseInt(text, 10)
    if (isNaN(age)) {
      age = 0
    }
    return age
  }
  return age
})

Vue.filter('schoolLevelFilter', (value) => {
  const levelMap = {
    nursery: '幼儿园',
    primary: '小学',
    junior: '初中',
    senior: '高中',
    univer: '大学'
  }
  return levelMap[value]
})

