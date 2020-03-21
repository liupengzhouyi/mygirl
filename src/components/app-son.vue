<template>
  <div class="app-son">
    <AppFather :name="name"></AppFather>
    <br>
    <AppFather name="name"></AppFather>
  </div>
</template>

<script>
    import AppFather from "./app-father";
    export default {
        name: "app-son",
        data() {
          return {
            name: '123'
          }
        },
        components: {AppFather},
    }
</script>

<style scoped>

</style>
