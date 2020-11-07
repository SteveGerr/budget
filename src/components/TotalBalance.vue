

<template>
  <div class="total-value">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
}
</script>

<style scoped>
  .total-value {
    display: flex;
    justify-content: center;
    width: 100%;
    text-transform: uppercase;
    padding: 20px;
    font-size: 26px;
    text-align: center;
    color: floralwhite;
  }

</style>