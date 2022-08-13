import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

import main from "./modules/main"
import header from "./modules/header";
import footer from "./modules/footer";

import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  // 开启模块化
  modules: {
    main,
    header,
    footer
  },
  getters: {
    list(state) {
      // 如果点击的是未完成1，就筛选出done为false的列表
      if (state.footer.condition === 1) {
        return state.main.todoList.filter(item => !item.done)
      }
      // 如果点击的是完成，就筛选出done为true的列表
      if (state.footer.condition === 2) {
        return state.main.todoList.filter(item => item.done)
      }
      // 如果是全部那就直接返回 todolist 列表
      return state.main.todoList
    },
    // 剩余数量
    sum(state,getter) {
       return getter.list.length
    },
    // 单选影响全选
    checkAll(state, getter) { 
      return getter.list.every(item => item.done === true)
    }
  },
  plugins: [createPersistedState({
    key: "myToDoList",
    paths: ["main"],
    reducer(state) { // 可以指定缓存 具体到摸一个字段
        return {
          // 只储存state中的token
          main: {
            todoList: state.main.todoList,
          }
        };
      },
  })]
})