<template>
  <div class="max-w-500px m-auto">
    <a-input v-model:value="inputValue" @keyup.enter="addTodo" />
    <List></List>
  </div>
</template>

<script setup lang="ts">
import List from './components/list.vue'
import { inputValue, addTodo } from './composables/useInput'
</script>