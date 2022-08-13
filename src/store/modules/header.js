export default {
    namespaced: true,
    state: {
      todoThing:""
    },
    mutations: {
      changeThing(state, newTodo) {
        state.todoThing = newTodo
       }
    },
    actions: {}
  }