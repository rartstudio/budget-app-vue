<template>
  <div
    data-testid="cardItem"
    class="flex items-start mb-2"
    :class="[
      'border-l-4 py-4',
      value.type === 'Income' ? 'border-green-500' : 'border-red-500'
    ]"
  >
    <span data-testid="itemDate" class="w-2/12 pl-4 text-left">{{
      format(new Date(value.date), "dd-MM-yyyy")
    }}</span>
    <span data-testid="itemAmount" class="w-3/12 text-right pr-12"
      >${{ convert(value.amount) }}</span
    >
    <span data-testid="itemDetails" class="w-5/12 text-left">{{
      value.details
    }}</span>
    <span data-testid="itemButton" class="w-2/12 text-left"
      ><BaseButton :class="['focus:outline-none',value.type === 'Income' ? 'bg-green-500 focus:ring focus:ring-green-200' : 'bg-red-500 focus:ring focus:ring-red-200', 'px-4 py-2 text-white rounded-sm']" title="Delete" @click="emitId(value.id, value.type)"
    /></span>
  </div>
</template>

<script>
import { format } from "date-fns";
import { helpers } from "../mixins/currencyConverter";
import BaseButton from "@/components/BaseButton";
export default {
  data() {
    return {
      format
    };
  },
  mixins: [helpers],
  components: {
    BaseButton
  },
  props: {
    value: {
      type: Object
    }
  },
  methods: {
    convert(data) {
      let amount = data.toString();
      return this.currencyConverter(amount);
    },
    emitId(id,type) {
      const data = {
        id,
        type
      }
      this.$emit('idValue', data);
      // console.log(data)
    }
  }
};
</script>

<style scoped></style>
