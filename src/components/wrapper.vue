<template>
  <div
    :class="
      `d-flex justify-content-${justify} ${
        fullWidth ? 'w-100' : ''
      } align-items-center flex-wrap flex-${direction} ${centerYClass} wrapper-content--w${wraperWidth}`
    "
  >
    <!-- <div :class="``"> -->
    <slot></slot>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    wraperWidth: {
      type: String,
      default: "md",
    },
    centerY: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "column ",
    },
    justify: {
      type: String,
      default: "center",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    centerYClass() {
      if (this.centerY) return "wrapper-center-y";
      else return "";
    },
  },
};
</script>

<style></style>
