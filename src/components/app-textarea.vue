<template>
    <div class="app-textarea">
      <h1> 文本域 </h1>
      <hr>
      <textarea v-model="msg" placeholder="input..."></textarea>
      <br>
      <p>
        {{ msg }}
      </p>
    </div>
</template>

<script>
    export default {
        name: "app-textarea",
        data() {
            return {
              msg: ""
            }
        }
    }
</script>

<style scoped>

</style>
