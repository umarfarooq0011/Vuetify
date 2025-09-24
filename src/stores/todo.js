
// for add todo store state management
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  function addTodo(todo) {
    todos.value.push({
      id: Date.now(),
      text: todo,
      completed: false,
    })
  }

  function removeTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  // function edit todos
  function editTodo(id, newText) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.text = newText
    }
  }

  // complete todo functions
  function completeTodo(id) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  // REMOVE ALL TODOS
   function clearTodos() {
    todos.value = []
   }



  return { todos, addTodo, removeTodo, editTodo, completeTodo, clearTodos }
})
