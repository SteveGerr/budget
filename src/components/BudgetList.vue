<template>
  <div class="budget-list-wrap">
    <el-card>
      <template v-if="!isEmpty">
        <BudgetListItem :item="item"  v-for="(item, prop) in list" :key="prop" @deleteItem="onDeleteItem"> </BudgetListItem>
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
    titleAlert: "Enter the data"
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
    },

  },

  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    }
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