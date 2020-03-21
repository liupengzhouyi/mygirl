<template>
  <div class="app-params">
    <button @click="toPages">
      点击
    </button>
  </div>
</template>

<script>
    export default {
        name: "app-params",
        methods: {
          toPages() {
            this.$router.push(
              {
                name: 'app-get-param',
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
