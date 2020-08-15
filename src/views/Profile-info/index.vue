<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column mb-4"
  >
    <div class="w-75  justify-content-center">
      <h1 class="text-center text-lg mt-4 mb-4">ملفي الشخصي</h1>
      <div class="profile">
        <div class="d-flex justify-content-around align-items-center mb-2">
          <img class="profile__image" :src="profile.image" />
          <div class="profile__right-aligned mr-4">
            <p>{{ profile.name }}</p>
            <p><b>يدرس في</b> {{ profile.univirsity }}</p>
            <p>كلية {{ profile.collage }}</p>
          </div>
        </div>
        <div class="d-flex justify-content-around align-items-center mt-4">
          <router-link
            v-if="!isQuery"
            class="btn btn-primary"
            to="/profile-edit"
            >تعديل الملف الشخصي</router-link
          >
          <button v-else class="btn btn-primary" @click="enroll">تسجيل</button>
          <p class="profile__bottom"><b>التقييم:</b> {{ profile.rate }}</p>
          <p class="profile__bottom"><b> السنة: </b> {{ profile.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: "عمر خدام الجامع",
        univirsity: "جامعة دمشق",
        collage: "الهندسة المعلوماتية",
        year: 2,
        rate: 2,
      },
      isQuery: false,
    };
  },
  mounted() {
    this.isQuery = this.$route.query.userId != undefined;
  },
  methods: {
    enroll() {},
  },
};
</script>

<style></style>
