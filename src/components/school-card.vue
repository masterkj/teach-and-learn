<template>
  <div class="card profile-card">
    <img
      class="profile-card__image"
      v-if="profile.image != undefined"
      :src="profile.image"
    />
    <h3 class="profile-card__detail mt-2">{{ profile.name }}</h3>
    <p class="profile-card__detail ">{{ profile.description }}</p>

    <b-button size="sm" @click="enroll(profile.id)" class=" mx-3 mb-2">
      enroll
    </b-button>

    <div class="profile-card__social">
      <font-awesome-icon icon="facebook-f" />
      <font-awesome-icon icon="twitter" />
      <font-awesome-icon icon="google-plus-g" />
      <font-awesome-icon icon="linkedin-in" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile"],
  methods: {
    enroll(id) {},
  },
};
</script>

<style></style>
