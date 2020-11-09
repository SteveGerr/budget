<template>
    <div class="listItem">
        <span>Sum:</span>
        <span class="budget-value">{{ item.value }}</span>
        <br>
        <hr>
        <span>Comment:</span>
        <br>
        <span class="budget-comment">{{ }}</span>
        <br>
        <hr>
        <el-button type="danger" size="mini" @click="delItem()">Delete</el-button>

    </div>

</template>

<script>
export default {
    name: "BudgetListItem",
    
  props: {
    item: {
      type: Object,
      default: () => ({}) //Для пропсов типа объект, обязательно в функции указываем, тип, т.е. объект
    }
  },

computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    }
}

}
</script>

<style>

</style>