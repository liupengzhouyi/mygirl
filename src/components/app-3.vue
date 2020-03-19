<template>
    <div class="app-3">
        <p v-if="seen">
          Can you get me!
        </p>
    </div>
</template>

<script>
    export default {
        name: "app-3",
        data() {
            return {
              seen: true
            }
        }
    }
</script>

<style scoped>

</style>
