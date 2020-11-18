<template>
  <div id="app">
  <div class="app-wrap">
    <Form @submitForm="onSubmitForm"></Form>
    <div class="wrap-balance">
      <BudgetList :list="budgetList" ></BudgetList>
      <TotalBalance :total="sumTotal"></TotalBalance>
    </div>
  </div>
  </div>
</template>

<script>

import BudgetList from './components/BudgetList';
import TotalBalance from './components/TotalBalance';
import Form from './components/Form';
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form
  },

  data() {
    return {
    }
  },

  computed: {
    sumTotal() {
     return this.budgetList.reduce((acc, item) =>
     acc + item.value, 0)},

    ...mapGetters('budget', ['budgetList'])

    
  },

  methods: {
    ...mapActions('budget', ["addNewItem"]),

    //data - данные пришедшие из Form.vue
    onSubmitForm(data) {
      const newObj = {
        ...data,
        id: Number(Math.random()) 
      };
      //Устанавливаем значения в объект.
      // this.budgetList - куда устанавливаем,
      // newObj.id - под каким ключём
      // newObj - что хотим установить
      // this.$set(this.budgetList, newObj.id, newObj);

      //Добавляем в экшоны полученый объект
      this.addNewItem(newObj);
    },

  },

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
  align-items: flex-start;
  max-width: 80vw;
  margin: 0 auto;
  padding: 10px;
  background: dodgerblue;
}
.wrap-balance {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
