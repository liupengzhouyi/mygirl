<template>
  <div class="app-params">
    <button @click="toPages">
      点击
    </button>

    <br>

    <router-link :to="{name:'app-get-params', params: {id: 23, name: 'liupeng'}}">
      <button>
        点击
      </button>
    </router-link>


  </div>
</template>

<script>
    export default {
        name: "app-params",
        methods: {
          toPages() {
            this.$router.push(
              {
                name: 'app-get-params',
                params: {
                  id: 23,
                  name: 'liupeng',
                }
              }
            )
          }
        }
    }
</script>

<style scoped>

</style>
