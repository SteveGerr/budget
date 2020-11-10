<template>
  <div class="listItem" :class="{'redBg': item.type === 'OUTCOME', 'greenBg': item.type === 'INCOME'}">
    <i :class="{'el-icon-arrow-down': item.type === 'OUTCOME', 'el-icon-arrow-up': item.type === 'INCOME'}"></i>
    <span>Sum: </span>
    <span class="budget-value" :class="{'red': item.type === 'OUTCOME', 'green': item.type === 'INCOME'}">{{ item.value }}</span>
    <br />
    <hr />
    <span>Comment: </span>
    <br />
    <span class="budget-comment">{{ item.value }}</span>
    <br />
    <hr />
    <el-button type="danger" size="mini" @click="delItem(item.id)"
      >Delete</el-button
    >
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",

  props: {
    item: {
      type: Object,
      default: () => ({}), //Для пропсов типа объект, обязательно в функции указываем, тип, т.е. объект
    },
  },

  data() {
    return {

    };
  },

  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },

  methods: {
    // Передаём id элемента, который нужно удалить
    delItem(id) {  
      let res = confirm("ARe you sure?");
      alert(res);
      if (res === false) {
        return;        
      }
      this.$emit("deleteItem", id); 
    },
  },
};
</script>

<style scoped>
  .listItem {
    position: relative;
  }
  .el-icon-arrow-up {
    margin-right: 30px;
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 22px;
    font-weight: 700;
    color: seagreen;
  }
  .el-icon-arrow-down {
    margin-right: 30px;
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 22px;
    font-weight: 700;
    color: rgb(150, 20, 20);
  }
  .red {
    font-weight: 700;
    color: rgb(150, 20, 20);
  }
  .redBg {
    background: #ffafaf;
  }
  .green {
    font-weight: 700;
    color: seagreen;
  }
  .greenBg {
    background: #1fcf26a6;
  }
</style>