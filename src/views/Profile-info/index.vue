<template>
  <wrapper wraperWidth="lg">
    <div class="profile pt-4">
      <div class="row">
        <div class="col-sm-4">
          <img class="profile__image" :src="profile.image" />
          <div class="row">
            <div class="col-6">
              <p class="text-center">
                <span class="profile__property-name">التقييم</span>
                <br />
                <b class="mt-1">{{ profile.rate }}</b>
              </p>
            </div>

            <div class="col-6">
              <router-link
                v-if="!isQuery"
                class="btn  btn-primary btn-sm"
                to="/profile-edit"
              >
                <font-awesome-icon  icon="user-edit" />

                تعديل</router-link
              >
              <button v-else class="btn btn-secondary" @click="enroll">
                تسجيل
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>

        <div class="col-md-6 col-sm-7">
          <h2 class="profile__name">{{ profile.name }}</h2>

          <table class="profile__details-table" style="width:100%">
            <tr>
              <td class="profile__property-name ">الجامعة</td>
              <td>{{ profile.collage }}</td>
            </tr>
            <tr>
              <td class="profile__property-name">كلية</td>
              <td>{{ profile.univirsity }}</td>
            </tr>
            <tr>
              <td class="profile__property-name">السنة</td>
              <td>الثانية</td>
            </tr>
            <tr>
              <td class="profile__property-name">مكان الاقامة</td>
              <td>الثانية</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-md-1 col-sm-0 "></div>
    </div>
  </wrapper>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        image:
          "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",
        name: "عمر خدام الجامع",
        univirsity: "جامعة دمشق",
        collage: "الهندسة المعلوماتية",
        address: "دمشق، الميدان",

        year: 2,
        rate: 2,
      },
      isQuery: true,
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
