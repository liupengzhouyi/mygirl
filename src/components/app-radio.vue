<template>
    <div class="app-radio">
      <input type="radio" id="one" value="one" v-model="msg">
      <label for="one">one</label>
      <br>
      <input type="radio" id="tow" value="tow" v-model="msg">
      <label for="tow">tow</label>
      <br>
      <span>msg: {{ msg }}</span>
    </div>
</template>

<script>
    export default {
        name: "app-radio",
        data() {
          return {
            msg: []
          }
        }
    }
</script>

<style scoped>

</style>
