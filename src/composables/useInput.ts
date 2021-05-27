import { ref } from 'vue'
import { unshiftToto } from './useTodoList'

export const inputValue = ref("")

export function addTodo() {
  if (inputValue.value === "") return;

  unshiftToto(inputValue.value)
  inputValue.value = ''
}