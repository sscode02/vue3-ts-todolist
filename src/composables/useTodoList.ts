import { ref, watchEffect } from "vue";

interface IList {
  value: string;
  id: number;
  state: boolean;
}

export const todoList = ref<IList[]>([]);
const cache = localStorage.getItem("todolist");
if (cache) {
  todoList.value = JSON.parse(cache);
}

watchEffect(() => {
  localStorage.setItem("todolist", JSON.stringify(todoList.value));
});

export const unshiftToto = (value: string) => {
  todoList.value.unshift({
    id: new Date().getTime(),
    value: value,
    state: false,
  });
}

export const changeTodoState = (e: MouseEvent) => {
  const target = e.target as HTMLElement

  if (target.tagName === "LI") {
    const index = Number(target.dataset.index!)
    todoList!.value[index].state = !todoList!.value[index].state
  }
};