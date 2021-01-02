<template>
  <div class="flex items-start flex-col mb-4">
    <label data-testid="labelSelect" class="text-sm">{{ label }}</label>
    <select
      :value="value"
      data-testid="baseSelect"
      v-on="$listeners"
      v-bind="$attrs"
      class="px-4 py-3 w-64 focus:outline-none focus:ring-2 ring-blue-300 text-sm border border-gray-200"
      @change="updateValue"
    >
      <option
        data-testid="baseOptions"
        v-for="(option, index) in options"
        :value="option"
        :key="index"
        :selected="option === value"
        class="px-4 py-2 text-sm"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String
    },
    value: {
      type: [String, Number]
    }
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scoped></style>
