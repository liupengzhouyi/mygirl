<template>
  <div class="to-other-page">
    <router-link to="/play">
      <button>继续</button>
    </router-link>
    <br>
    <router-link to="/play1/msg">
      <button>继续1</button>
    </router-link>
    <br>
    <button @click="pp()">pp</button>
    <br>
    <button @click="ppp()">ppp</button>
    <br>
    <button @click="jump(msg)">jump(msg)</button>
    <br>
    <router-link :to="{name:play1, params:{id:8907}}">
      <button>
        valueString
      </button>
    </router-link>
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
        pp() {
          this.$route.push({path:'/play1', query:{id:1}});
        },
        ppp() {
          this.$route.push({path:'/play1', params:{id:1}});//类似post传参
        }
      }

    }
</script>

<style scoped>

</style>
