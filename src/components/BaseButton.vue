<template>
  <button data-testid="btn" v-on="$listeners" :class="btnClass" v-bind="$attrs">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  inheritAttrs: false, //<!-- turns off default inheriting behavior with v-bind=$attrs-->
  props: {
    title: {
      type: String
    },
    btnClass: {
      type: String
    }
  }
};
</script>

<style scoped></style>
