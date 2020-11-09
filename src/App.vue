<template>
  <div id="app">
  <div class="app-wrap">
    <Form @submitForm="onSubmitForm"></Form>
    <div class="wrap-balance">
      <BudgetList :list="list" ></BudgetList>
      <TotalBalance :total="sumTotal"></TotalBalance>
    </div>
  </div>
  </div>
</template>

<script>

import BudgetList from './components/BudgetList';
import TotalBalance from './components/TotalBalance';
import Form from './components/Form';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form
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
    onSubmitForm(data) {
      // Генерируем id
      const newObj = {
        ...data,
        id: String(Math.random()) //генерируем случайное число и преобразуем его в строку
      };
      //Устанавливаем значения в объект.
      // this.list - куда устанавливаем,
      // newObj.id - под каким ключём
      // newObj - что хотим установить
      this.$set(this.list, newObj.id, newObj);
    }
  }

}


</script>

<style>
#app {
  width: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: dodgerblue;
}
.wrap-balance {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
