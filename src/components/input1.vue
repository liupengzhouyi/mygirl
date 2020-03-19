<template>
    <div class="input1">
      <input v-model="msg" placeholder="input...">
      <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "input1",
        data() {
            return {
                msg: ""
            }
        }
    }
</script>

<style scoped>

</style>
