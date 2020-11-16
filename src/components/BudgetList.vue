<template>
  <div class="budget-list-wrap">
    <el-card>
      <el-select 
        v-model="value" 
        placeholder="Select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
        </el-option>
      </el-select>
      <template v-if="!isEmpty">
        <BudgetListItem :item="item"  v-for="(item, prop) in filterList" :key="prop" @deleteItem="onDeleteItem"> </BudgetListItem>
      </template>
      <el-alert v-else
        :title="titleAlert"
        type="warning"
        :closable="false">
      </el-alert>
    </el-card>
  </div>
</template>

<script>

import BudgetListItem from "./BudgetListItem";

export default {
  name: "BudgetList",

  data: () =>  ({
    titleAlert: "Enter the data",
    value: "All", //for select. Попадает в v-model и перезаписывается выбранным элементом из options
                  //:value="item.value"
    //for select
    options: [
      {
        value: 'All',
        label: 'All'
      },
      {
        value: 'INCOME',
        label: 'INCOME'
      },
      {
        value: 'OUTCOME',
        label: 'OUTCOME'
      },
    ],
    sortedList: [],
  }),

  components: {
    BudgetListItem
  },

  props: {
    list: {
      type: Object,
      default: () => ({}) //Для пропсов типа объект, обязательно в функции указываем, тип, т.е. объект
    }
  },

  methods: {
    onDeleteItem(id) {
      //this.list - объект из которого надо удалить, id - айди элемента, который надо удалить
      this.$delete(this.list, id)
      console.log("Delete");
    },
  },

  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },

    filterList() {
      // Следим за массивом значений из list
      let arr = Object.values(this.list);
      // Ежели value из Data равно All
      if (this.value === "All") {
        // Возвращаем весь массив
        return arr;
      } else {
        //иначе фильтруем по текущему value и выводим
        return arr.filter(item => item.type === this.value)
      }
    },


  }
}
</script>

<style scoped>
  .budget-list-wrap {
    width: 100%;
    max-width: 500px;
    margin: auto;
    padding: 10px;
  }
  .listItem {
    margin: 10px;
    padding: 10px;
    box-shadow: 0 0 5px #707070;
  }
  .budget-value {
    display: flex;
    justify-content: center;
    margin: 10px;
    font-weight: 700;
  }
  .budget-comment {
    display: flex;
    justify-content: center;
    margin: 10px;
  }
  .el-card {
    border: none;
    background: transparent;
  }
  .el-card__body {
    background: transparent;
  }
</style>