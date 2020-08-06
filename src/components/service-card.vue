<template>
  <div class="card p-3 d-felx flex-column">
    <img class="card__icon mt-4 mb-3" :src="icon" />
    <h4 class="text-center mt-2 mb-3">
      {{ title }}
    </h4>
    <p class="card__paragraph">
      {{ paragraph }}
    </p>
    <router-link :to="link" class="btn btn-outline-primary mt-auto ">الذهاب </router-link>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "paragraph", "link"],
};
</script>

<style></style>
