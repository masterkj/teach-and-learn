<template>
  <div class="card profile-card">
    <img class="profile-card__image" v-if="profile.image != undefined" :src="profile.image" />
    <h2 class="profile-card__name mt-2">{{ profile.name }}</h2>
    <!-- <h4 class="profile-card__detail">{{ profile.year }}</h4> -->
    <p class="profile-card__detail mt-n2">سنة رابعة</p>

    <!-- <p class="profile-card__detail">طالب {{ profile.collage }}</p> -->
    <p class="profile-card__detail"> هندسة معلوماتية
      <br>
      <b>تقييم:</b> 30
    </p>

    <!-- <p class="profile-card__detail"><b>تقييم:</b> {{ profile.rate }}</p> -->

    <b-button size="sm" variant="primary" @click="showInfo(profile.id)" class="m-0 mx-n2">
      show info
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
  props: ["profile"],
  methods: {
    showInfo(id) {
      this.$router.push({ path: "/profile-info", query: { userId: id } });
    },
  },
};
</script>

<style></style>
