<template>
  <div class="listItem">
    <span>Sum: </span>
    <span class="budget-value">{{ item.value }}</span>
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
      dialogVisible: false,
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

<style>
</style>