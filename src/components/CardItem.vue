<template>
  <div
    data-testid="cardItem"
    class="flex items-start mb-2"
    :class="[
      'border-l-4 py-4',
      value.type === 'Income' ? 'border-green-500' : 'border-red-500'
    ]"
  >
    <span data-testid="itemDate" class="w-4/12 pl-4 text-left">{{
      format(new Date(value.date), "dd-MM-yyyy")
    }}</span>
    <span data-testid="itemAmount" class="w-4/12 text-right pr-12"
      >${{ convert(value.amount) }}</span
    >
    <span data-testid="itemDetails" class="w-4/12 text-left">{{
      value.details
    }}</span>
  </div>
</template>

<script>
import { format } from "date-fns";
import { helpers } from "../mixins/currencyConverter";
export default {
  data() {
    return {
      format
    };
  },
  mixins: [helpers],
  props: {
    value: {
      type: Object
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
