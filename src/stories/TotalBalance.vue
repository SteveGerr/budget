

<template>
  <div class="total-value">Balance: <span class="total-num" :class="{numNull: total === 0, isNegative: total < 0}"> {{ total }}</span></div>
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
    color: white;
  }
  .total-num {
    margin: 0 5px;
    color: rgb(9, 97, 1);

  }
  .total-num.numNull {
    color: aliceblue;
  }
  .total-num.isNegative {
    color: red;
  }



</style>