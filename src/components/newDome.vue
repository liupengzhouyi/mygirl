<template>
    <div class="newDome">
      <ol>
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></todo-item>
      </ol>
    </div>
</template>

<script>
    export default {
        name: "newDome",
        data() {
            return {
                groceryList: [
                  {id: 0, text: '000'},
                  {id: 1, text: '111'},
                  {id: 2, text: '222'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
