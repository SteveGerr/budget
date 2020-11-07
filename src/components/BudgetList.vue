<template>
  <div class="budget-list-wrap">
    <el-card :header="title">
      <template v-if="!isEmpty">
        <div class="listItem" v-for="(item, prop) in list" :key="prop">
          <span>Sum:</span>
          <span class="budget-value">{{ item.value }}</span>
          <br>
          <hr>
          <span>Comment:</span>
          <br>
          <span class="budget-comment">{{ item.comment }}</span>
          <br>
          <hr>
          <el-button type="danger" size="mini" @click="delItem(item.id)">Delete</el-button>
        </div>
      </template>
      <el-alert v-else
        title="warning alert"
        type="warning"
        :closable="false">
      </el-alert>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BudgetList",

  data: () =>  ({
    title: ""
  }),

  props: {
    list: {
      type: Object,
      default: () => ({}) //Для пропсов типа объект, обязательно в функции указываем, тип, т.е. объект
    }
  },

  methods: {
    // Передаём id элемента, который нужно удалить
    delItem(id) {
      this.$emit("deleteItem", id);
    }
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
    background: white;
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