<template>
  <div class="card profile-card profile-card--lg-fixed-height">
    <img class="profile-card__image" :src="personalPhoto" />
    <h3 class="profile-card__name mt-2">{{ profile.name }}</h3>
    <p class="profile-card__detail">{{ profile.collage }}</p>
    <p class="mt-auto"><b class="">تقييم:</b> {{ profile.rate }}</p>

    <b-button
      size="sm"
      variant="primary"
      @click="showInfo(profile.id)"
      class="m-0 mx-n2"
    >
      عرض الملف الشخصي
    </b-button>
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
  computed: {
    personalPhoto() {
      if (this.profile.image != undefined || this.profile.image != "")
        return this.$fullUrl(this.profile.image);
      else return "/images/user-avatar.png";
    },
  },
};
</script>

<style></style>
