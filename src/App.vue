<template>
  <div id="app">
  <div class="app-wrap">
    <BudgetList :list="list" @deleteItem="onDeleteItem"></BudgetList>
    <TotalBalance :total="sumTotal"></TotalBalance>
  </div>
  </div>
</template>

<script>

import BudgetList from './components/BudgetList';
import TotalBalance from './components/TotalBalance';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance
  },

  data() {
    return {
      list: {
        1: {
          type: 'INCOME',
          value: 100,
          comment: "Some comm",
          id: 1
        },
        2: {
          type: 'OUTCOME',
          value: -50,
          comment: "Some comm 2",
          id: 2
        }

      }
    }
  },

  computed: {
    sumTotal() {
     return Object.values(this.list).reduce((acc, item) =>
     acc + item.value, 0)}
  },

  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id)
    }
  }

}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: dodgerblue;
}
</style>
