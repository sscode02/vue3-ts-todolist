<template>
  <ul class="list-none" @click="changeTodoState">
    <li
      v-for="(item, index) in todoList"
      :data-index="index"
      :class="{ 'bg-pink-500': item.state }"
      :key="item.id"
      class="list-none cursor-pointer mb-2"
    >{{ item.value }}</li>
  </ul>
</template>  
<script setup lang="ts">
import { todoList, changeTodoState } from '../composables/useTodoList'
</script>