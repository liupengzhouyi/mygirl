<template>
    <div class="link-value">
      <input type="radio" v-model="valueA" value="a">
      <br>
      <input type="checkbox" v-model="valueB" value="b">
      <br>
      <select v-model="valueC">
        <option value="c">Value-C</option>
      </select>
      <p>
        value-A: {{ valueA }}
      </p>
      <br>
      <p>
        value-B: {{ valueB }}
      </p>
      <br>
      <p>
        value-C: {{ valueC }}
      </p>
    </div>
</template>

<script>
    export default {
        name: "link-value",
        data() {
          return {
            valueA: '',
            valueB: '',
            valueC: '',
          }
        }
    }
</script>

<style scoped>

</style>
