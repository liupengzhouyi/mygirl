<template>
  <div class="app-father">
    <button>{{ name }}</button>
  </div>
</template>

<script>
    export default {
        name: "app-father",
        props: ["name"],
        data() {
            return {
              name: 'father'
            }
        }
    }
</script>

<style scoped>

</style>
