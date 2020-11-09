<template>
    <div class="listItem">
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

<script>
export default {
    name: "BudgetListItem",
    

}
</script>

<style>

</style>