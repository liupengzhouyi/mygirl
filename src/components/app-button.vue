<template>
    <div class="app-button">
      <button v-on:click="count=count+1">
       Count.: {{ count }}
      </button>
      <br>
    </div>

</template>

<script>
    export default {
        name: "app-button",
        data() {
            return {
                count: 0
            }
        },
    }
</script>

<style scoped>

</style>
