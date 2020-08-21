<template>
  <div :class="`wrapper `">
    <div :class="`wrapper-content wrapper-content--w${wraperWidth}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wraperWidth: {
      type: String,
      default: "md",
    },
  },
};
</script>

<style></style>
