<template>
    <div class="app-on">
        <p>{{ msg }}</p>
        <button v-on:click="reverseMessage">do it</button>
    </div>
</template>

<script>
    export default {
        name: "app-on",
        data() {
            return {
                msg: 'Hello World!'
            }
        },
        methods: {
            reverseMessage: function () {
                this.msg = this.msg.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped>

</style>
