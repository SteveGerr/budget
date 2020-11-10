<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="top">
      <ElFormItem label="Type" prop="type">
       <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
        <ElOption label="Income" value="INCOME"></ElOption>
        <ElOption label="Outcome" value="OUTCOME"></ElOption>

       </ElSelect>
      </ElFormItem>

      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment"></ElInput>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"></ElInput>
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      formData: {
        type: "INCOME",
        comment: '',
        value: 0,
      },
      rules: {
        type: [{
          required: true,
          message: "Please select type",
          trigger: "blur"

        }],
        comment: [{
          required: true,
          message: "Please type comment",
          trigger: "blur"

        }],
        value: [
          {
            required: true,
            message: "Please type comment",
            trigger: "blur"
          },
          {
            type: "number",
            message: "Value must be a number",
            trigger: "change"
          }
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      //validate - elements-ui
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          if (this.formData.type === "OUTCOME" && this.formData.value < 0) {
            // Через пользовательское событие submitForm передаём объект формы formData наружу из компонента
            this.$emit("submitForm", {...this.formData});
            // Сбрасываем поля(element-ui - https://element.eleme.io/#/en-US/component/form#form-item-methods)
            this.$refs.addItemForm.resetFields();
          } else if (this.formData.type === "OUTCOME" && this.formData.value > 0) {
            this.formData.value = " ";
            console.log("No negative");
            console.log(this.formData.value);
          } else {
            // Через пользовательское событие submitForm передаём объект формы formData наружу из компонента
            this.$emit("submitForm", {...this.formData});
            // Сбрасываем поля(element-ui - https://element.eleme.io/#/en-US/component/form#form-item-methods)
            this.$refs.addItemForm.resetFields();

          }

        }
      })
    }
  }
}
</script>

<style scoped>
  .form-card {
    width: 100%;
    margin: 10px;
  }
  .type-select {
    width: 100%;
  }
</style>