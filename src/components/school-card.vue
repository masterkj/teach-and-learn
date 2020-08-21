<template>
  <div class="card profile-card profile-card--fixed-height">
    <h4 class="profile-card__name mt-2">{{ school.name }}</h4>
    <p class="profile-card__detail">{{ school.description }}</p>

    <b-button size="sm" variant="primary" class="m-0 mx-n2 mt-auto" @click="enroll(school.id)">
      enroll
    </b-button>

    <!-- <div class="profile-card__social">
      <font-awesome-icon icon="facebook-f" />
      <font-awesome-icon icon="twitter" />
      <font-awesome-icon icon="google-plus-g" />
      <font-awesome-icon icon="linkedin-in" />
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["school"],
  methods: {
    enroll(id) {},
  },
};
</script>

<style></style>
