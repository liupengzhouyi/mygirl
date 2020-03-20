<template>
    <div class="app-select-for">
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span> selected: {{ selected }}</span>
    </div>

</template>

<script>
    export default {
        name: "app-select-for",
        data() {
          return {
            selected: 'null',
            options: [
              {text: '1111', value: 'A'},
              {text: '1112', value: 'B'},
              {text: '1113', value: 'C'},
              {text: '1114', value: 'D'}
            ]
          }
        }
    }
</script>

<style scoped>

</style>
