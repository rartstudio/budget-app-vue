<template>
  <div class="flex flex-col items-start mb-4">
    <label :for="idInput" data-testid="labelInput" class="text-sm">{{label}}</label>
    <input
      data-testid="baseInput"
      :type="typeInput"
      :placeholder="placeholder"
      :id="idInput"
      @input="updateValue"
      :value="value"
      class="px-4 py-2 mt-1 text-sm border w-64 border-gray-200 focus:outline-none focus:ring-2 ring-blue-300 trasition-all duration-200"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label : {
      type: String,
      default: ''
    },
    typeInput: {
      type: String
    },
    placeholder: {
      type: String
    },
    idInput: {
      type: String
    },
    value: {
      type: [String, Number]
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped></style>
