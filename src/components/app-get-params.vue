<template>
    <div class="app-get-params">
      <span>{{ msg }} - {{ id }} - {{ myname }}</span>
    </div>
</template>

<script>
    export default {
        name: "app-get-params",
        data() {
          return {
            msg: '传过来的参数：',
            id: this.$route.params.id,
            myname: this.$route.params.name,
          }
        },
    }
</script>

<style scoped>

</style>
