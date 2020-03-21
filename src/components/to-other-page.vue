<template>
  <div class="to-other-page">
    <router-link to="/play">
      <button>继续</button>
    </router-link>
    <br>
    <router-link to="/play1">
      <button>继续1</button>
    </router-link>
    <br>
    <button @click="jump(msg)">jump(msg)</button>
    <br>
  </div>
</template>

<script>

    export default {
        name: "to-other-page",
      data() {
          return {
            msg: 12,
            status:110,
            status2:120,
            status3:119
          }
      },

      methods: {
        jump(id){
          //this.$router.push("/cart")
          //传递的参数用{{ $route.query.goodsId }}获取
          this.$router.push({path:'/play1/${id}',})
          //this.$router.go(-2)
          //后退两步
        },
      }

    }
</script>

<style scoped>

</style>
