<template>
  <div :class="`layout-item text-${colorShould}`">
    <img class="layout-item__bg" :src="bgImg" />
    <div class="layout-item__content p-1 d-flex flex-column">
      <h3 class="layout-item__title">{{ title }}</h3>
      <p class="layout-item__paragraph">{{ paragraph }}</p>
      <router-link type="button" :class="`btn btn-outline-${colorShould} ${soon == true ? 'disabled' : ''} mt-auto`" :to="link"
        >{{soon == true ? 'soon': 'Explore'}}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["bgImg", "title", "paragraph", "link", "color", "soon"],
  computed: {
    colorShould() {
      return this.color == "light" ? "dark" : "light";
    },
  },
};
</script>

<style></style>
