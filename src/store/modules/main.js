export default {
    namespaced: true,
    state: {
      todoList: [],
    },
    mutations: {
      // 添加
      addTodo(state, payload) {
        state.todoList.unshift(payload)
       },
      // 修改每个list前面的单选
      changeTodo(state, index) { 
        state.todoList[index].done = !state.todoList[index].done
      },
      // 删除单个list列表，获得index截取
      removeTodo(state, index) {
        state.todoList.splice(index, 1)
      },
      // 清空已完成
      clearDone(state) {
        state.todoList = state.todoList.filter(item => !item.done)
       },
      // 全选影响单选按钮，将每个全选按钮的状态和全选的状态一样
      changeAll(state, isdone) {
        state.todoList.filter(item => item.done = isdone)
      },
    },
    actions: {}
  }