<template>
    <div class="play">
      {{ msg }}
      {{ ss }}
      <h1>接收参数的路由</h1>
      <h1> params.id：{{ $route.params.id }}</h1>
      <h1>query.status:{{ $route.query.queryId }}</h1>
    </div>
</template>

<script>
    export default {
        name: "paly",
        data() {
            return {
              msg: 'Hello Vue!',
              ss: this.$route.params.id,
            }
        }
    }
</script>

<style scoped>

</style>
