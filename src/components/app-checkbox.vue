<template>
  <div class="app-checkbox">
    <input type="checkbox" id="1" value="1" v-model="names">
    <label for="1">1</label>
    <input type="checkbox" id="2" value="2" v-model="names">
    <label for="2">2</label>
    <input type="checkbox" id="3" value="3" v-model="names">
    <label for="3">3</label>
    <input type="checkbox" id="4" value="4" v-model="names">
    <label for="4">4</label>
    <input type="checkbox" id="5" value="5" v-model="names">
    <label for="5">5</label>
    <input type="checkbox" id="6" value="6" v-model="names">
    <label for="6">6</label>
    <br>
    <span> names {{ names }}</span>
  </div>
</template>

<script>
    export default {
        name: "app-checkbox",
        data() {
          return {
            names: []
          }
        }
    }
</script>

<style scoped>

</style>
