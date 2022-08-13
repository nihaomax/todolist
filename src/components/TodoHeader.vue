<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="checkAll" @change="checkDone">
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="msg"
      @keyup.enter="btn"
    />
  </header>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex';

export default {
  data() {
    return {
      msg: this.$store.state.header.todoThing,
      
    }
  },
  methods: {
      ...mapMutations("header", ["changeThing"]),
      ...mapMutations("main",["addTodo",'changeAll','setId']),
 
    btn() { 
      // 添加list列表
      // 先判断如果是空的就return
      if (!this.msg.trim()) {
        this.msg=''
        return alert('不能为空')
      }
      this.changeThing(this.msg)
      this.addTodo({
        name: this.msg,
        done: false,
      })
      this.msg = ""
    
    },
    // 全选
    checkDone() {
      // 获得全选按钮的状态调用changeAll
      const all = this.checkAll
      // console.log(!all);
     this.changeAll(!all)
    }
  },
  computed: {
    ...mapGetters(["checkAll"])
  }
}
</script>