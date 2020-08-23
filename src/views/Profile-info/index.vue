<template>
  <wrapper wraperWidth="lg">
    <div class="profile pt-4">
      <div class="row">
        <div class="col-sm-4">
          <img class="profile__image" :src="$fullUrl(profile.image)" />
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
                <font-awesome-icon icon="user-edit" />

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
              <td>{{ profile.univirsity }}</td>
            </tr>
            <tr>
              <td class="profile__property-name">كلية</td>
              <td>{{ profile.collage }}</td>
            </tr>
            <tr>
              <td class="profile__property-name">السنة</td>
              <td>{{ profile.year | year }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-md-1 col-sm-0 "></div>
    </div>
    <b-modal v-model="modalShow" hide-footer
      >سوف نرسل رقم الاستاذ الى هاتفك الخاص</b-modal
    >
  </wrapper>
</template>

<script>
import { mapState } from "vuex";
import http from "@/repo/teachAndLearnHttp";
export default {
  data() {
    return {
      profile: {},
      modalShow: false,
      isQuery: true,
      // image:
      //   "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",
      // name: "عمر خدام الجامع",
      // univirsity: "جامعة دمشق",
      // collage: "الهندسة المعلوماتية",
      // address: "دمشق، الميدان",
      // year: 2,
      // rate: 2,
    };
  },
  async mounted() {
    this.isQuery = this.$route.query.userId != undefined;

    if (this.isQuery)
      this.profile = await this.fetchUserProfile(this.$route.query.userId);
    else this.profile = await this.fetchPersonalProfile();

    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      this.$router.push("/");
    });
  },
  computed: {
    ...mapState({
      personalProfile: (state) => state.Profile.profile,
    }),
  },
  filters: {
    year(yearNum) {
      if (yearNum == 1) return "الأولى";
      if (yearNum == 2) return "الثانية";
      if (yearNum == 3) return "الثالثة";
      if (yearNum == 4) return "الرابعة";
      if (yearNum == 5) return "الخامسة";
      if (yearNum == 6) return "السادسة";
    },
  },
  methods: {
    enroll() {
      http()
        .get("info/enroll", {
          teacher_id: this.profile.id,
          teacher_full_name: this.profile.name,
          id: this.personalProfile.id,
        })
        .then(() => {
          this.modalShow = true;
        });
    },
    async fetchUserProfile(id) {
      if (id === this.personalProfile.id) {
        this.forwordToMyProfile();
        return;
      }

      let { data } = await http().get(`info/profile/${id}`);
      let profile = this.transformToProfileModel(data);
      return profile;
    },
    async fetchPersonalProfile() {
      let { data } = await http().get(
        `info/profile/${this.personalProfile.id}`
      );
      let profile = this.transformToProfileModel(data);
      return profile;
    },
    transformToProfileModel(data) {
      let profile = {};
      profile.id = data.PI.id;
      profile.image = data.PI.user_image;
      profile.univirsity = data.PI.university;
      profile.name = data.PI.full_name;
      profile.collage = data.PI.college;
      profile.year = data.PI.year;
      if (data.rating != undefined) profile.rate = parseInt(data.rating);
      else profile.rate = null;
      return profile;
    },
    async forwordToMyProfile() {
      this.isQuery = false;
      this.$router.push("/profile-info");
      this.profile = await this.fetchPersonalProfile();
    },
  },
};
</script>

<style></style>
