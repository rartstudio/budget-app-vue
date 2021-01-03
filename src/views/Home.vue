<template>
  <div class="container mx-auto flex flex-col">
    <div class="w-full">
      <h2 class="text-center text-2xl mt-4 mb-8">
        Input Your Budget or Income
      </h2>
      <FormInput
        @formData="addData($event)"
        class="flex items-center flex-row justify-between"
      />
    </div>
    <div class="w-full flex flex-col">
      <div class="flex">
        <div class="w-1/2 ml-2">
          <CardList
            :values="incomes"
            title="Incomes"
            @deleteData="deletingData($event)"
          />
        </div>
        <div class="w-1/2 ml-2">
          <CardList
            :values="expenses"
            title="Expenses"
            @deleteData="deletingData($event)"
          />
        </div>
      </div>
      <div class="mt-16 mx-auto">
        <h1 class="text-3xl ">Total Budget : {{ totalBudget }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput";
import CardList from "@/components/CardList";
import { helpers } from "../mixins/currencyConverter";
import { v4 as uuidv4 } from "uuid";
export default {
  mixins: [helpers],
  data() {
    return {
      incomes: [],
      expenses: []
    };
  },
  components: {
    FormInput,
    CardList
  },
  computed: {
    totalBudget() {
      let initialValue = 0;
      let income = this.incomes.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, initialValue);
      let expense = this.expenses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, initialValue);
      let total = income - expense;

      if (total < 0) {
        let convert = total.toString().split("-")[1];
        return `-$${this.currencyConverter(convert)}`;
      }
      let convert = total.toString();
      return `$${this.currencyConverter(convert)}`;
    }
  },
  methods: {
    addData(data) {
      data.id = uuidv4();
      if (data.type === "Income") return this.incomes.push(data);
      if (data.type === "Expense") return this.expenses.push(data);
    },
    deletingData(data) {
      console.log(data);
      if (data.type === "Expense") {
        let newExpense = this.expenses.filter(el => el.id !== data.id);
        return (this.expenses = newExpense);
      }
      if (data.type === "Income") {
        let newIncome = this.incomes.filter(el => el.id !== data.id);
        return (this.incomes = newIncome);
      }
    }
  }
};
</script>

<style scoped></style>
