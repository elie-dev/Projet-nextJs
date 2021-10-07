<template>
  <h1>User {{ slug }}</h1>
</template>
<script>
export default {
  data: () => ({
    slug: '',
  }),
  mounted() {
    console.log(this.$route.params['slug'])
    this.slug = this.$route.params['slug']
  },
}
</script>
