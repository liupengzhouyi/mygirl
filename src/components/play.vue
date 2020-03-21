<template>
    <div class="play">
      {{ msg }}
      {{ ss }}
    </div>
</template>

<script>
    export default {
        name: "paly",
        data() {
            return {
              msg: 'Hello Vue!',
              ss: this.$route.params.id,
            }
        },
    }
</script>

<style scoped>

</style>
