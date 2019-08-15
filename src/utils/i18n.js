// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)
  const translatedTitle = this.$t('route.' + title) // $t :this method from vue-i18n, inject in @/lang/index.js

  if (hasKey) {
    return translatedTitle
  }
  return title
}

export default{
  install(Vue, options) {
    Vue.prototype.generateShow = function(name) {
      const hasKey = this.$te(name)
      const translatedTitle = this.$t(name) // $t :this method from vue-i18n, inject in @/lang/index.js

      if (hasKey) {
        return translatedTitle
      }
      return name
    }
  }
}
