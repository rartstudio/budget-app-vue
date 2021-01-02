<template>
  <div class="container mx-auto">
    <div class="w-4/12"> 
      <h2 class="text-left text-2xl mt-4 mb-8">Input Your Budget or Income</h2> 
      <FormInput />
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput";
export default {
  components: {
    FormInput
  }
};
</script>

<style scoped></style>
