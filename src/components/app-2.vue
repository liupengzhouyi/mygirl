<template>
    <div class="app-2">
        <span v-bind:title="msg">
        鼠标悬停看内容
        </span>
    </div>
</template>

<script>
    export default {
        name: "app-2",
        data() {
          return {
            msg: "页面加载" + new Date().toLocaleString()
          }
        }
    }
</script>

<style scoped>



</style>
