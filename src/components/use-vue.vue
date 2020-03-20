<template>
    <div class="use-vue">
      <AppButton></AppButton>
      <br>
      <AppButton></AppButton>
      <br>
      <AppButton></AppButton>
      <br>
      <AppButton></AppButton>
      <br>
      <AppButton></AppButton>
      <br>
      <AppButton></AppButton>
      <br>
    </div>
</template>

<script>
    import AppButton from "./app-button";
    export default {
        name: "use-vue",
      components: {AppButton},
      data() {
          return {
            msg: ''
          }
        }
    }
</script>

<style scoped>

</style>
