<template>
    <div class="app-for">
        <ol>
            <li v-for="date in list">
                {{ date.text }}
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "app-for",
        data() {
          return {
              list: [
                {text: 'java'},
                {text: 'C++'},
                {text: 'Python'}
              ]
          }
        }
    }
</script>

<style scoped>

</style>
