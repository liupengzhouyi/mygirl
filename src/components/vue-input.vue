<template>
    <div class="vue-input">
        <h1>{{ message }}</h1>
        <input v-model="message">
    </div>
</template>

<script>
    export default {
        name: "vue-input",
        data() {
            return {
                message: "hello World!"
            }
        }
    }
</script>

<style scoped>

</style>
