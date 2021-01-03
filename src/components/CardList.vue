<template>
  <div data-testid="cardList" class="mt-4">
    <h2 :class="[title === 'Incomes' ? 'text-green-500' : 'text-red-500','text-2xl']">{{ title }}</h2>
    <div class="mt-8 flex flex-col justify-start overflow-auto h-48">
      <CardItem v-for="value in values" :key="value.id" :value="value" />
    </div>
    <div class="mt-8">
      <h5 :class="[title === 'Incomes' ? 'text-green-500' : 'text-red-500','text-xl text-left']">
        Total {{ title }} : ${{ convert(sumOfValues) }}
      </h5>
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
import { helpers } from "../mixins/currencyConverter";
export default {
  props: {
    values: {
      type: Array
    },
    title: {
      type: String
    }
  },
  mixins: [helpers],
  components: {
    CardItem
  },
  computed: {
    sumOfValues() {
      let initialValue = 0;
      let sum = this.values.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, initialValue);
      return sum;
    }
  },
  methods: {
    convert(data) {
      let amount = data.toString();
      return this.currencyConverter(amount);
    }
  }
};
</script>

<style scoped></style>
