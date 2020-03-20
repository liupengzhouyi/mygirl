<template>
    <div class="app-select">
      <select v-model="msg">
        <option disabled value="select">select</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
      </select>

      <br>

      <span> select : {{ msg }}</span>
    </div>
</template>

<script>
    export default {
        name: "app-select",
        data() {
          return {
            msg: ""
          }
        }
    }
</script>

<style scoped>

</style>
