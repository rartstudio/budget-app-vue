<template>
  <form @submit.prevent="formSubmit" data-testid="formBudget">
    <BaseInput
      typeInput="date"
      idInput="time"
      label="Date"
      v-model="budget.date"
    />
    <BaseSelect :options="options" label="Type" v-model="budget.type" />
    <BaseInput
      label="Details"
      typeInput="text"
      placeholder="Add your details"
      idInput="details"
      v-model="budget.details"
    />
    <BaseInput
      label="Amount"
      typeInput="number"
      placeholder="Add Amount"
      idInput="amount"
      v-model="budget.amount"
    />
    <template v-if="budget.type === 'Income'">
        <BaseButton title="Save" btnClass="bg-green-300 px-4 py-2 font-semibold focus:outline-none" />
    </template>
    <template v-else-if="budget.type === null">
      <BaseButton title="Save" btnClass="bg-blue-300 px-4 py-2 font-semibold focus:outline-none" />
    </template>
    <template v-else>
        <BaseButton title="Save" btnClass="bg-red-300 px-4 py-2 font-semibold focus:outline-none" />
    </template>
  </form>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BaseSelect from "@/components/BaseSelect";
export default {
  data() {
    return {
      options: ["Income", "Expense"],
      budget: {
        type: null,
        details: null,
        date: null,
        amount: null
      }
    };
  },
  components: {
    BaseButton,
    BaseInput,
    BaseSelect
  },
  methods: {
    formSubmit() {
      this.budget.amount = parseInt(this.budget.amount);
      this.$emit('formData', this.budget)
      this.budget = {
        type: null,
        details: null,
        date: null,
        amount: null
      }
    }
  }
};
</script>

<style scoped></style>
