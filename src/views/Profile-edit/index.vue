<template>
  <div class="d-flex justify-content-center align-items-center mb-4">
    <b-form width="600" class="form-group mt-4 w-50">
      <h1 class="mt-4 text-center">المعلومات الشخصية</h1>
      <div class="row flex-row-reverse">
        <b-form-group class="col-lg-6" label="الاسم الأول">
          <b-form-input
            v-model="profile.firstName"
            type="text"
            required
            placeholder="أدخل الاسم الأول"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-lg-6" label="الاسم الأخير">
          <b-form-input
            v-model="profile.lastName"
            type="text"
            required
            placeholder="أدخل الاسم الأخير"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-lg-6" label="الجامعة">
          <b-form-select
            :options="univiresties"
            v-model="profile.university"
            required
          >
            <template v-slot:first>
              <b-form-select-option :value="null" disabled
                >-- اختر جامعتك --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group class="col-lg-6" label="الكلية">
          <b-form-select :options="collages" v-model="profile.collage" required>
            <template v-slot:first>
              <b-form-select-option :value="null" disabled
                >-- اختر كليتك --</b-form-select-option
              >
            </template></b-form-select
          >
        </b-form-group>

        <b-form-group class="col-lg-6" label="السنة الدراسية">
          <b-form-select
            :options="['1', '2', '3', '4', '5', '6']"
            v-model="profile.studyYear"
            required
          >
            <template v-slot:first>
              <b-form-select-option :value="null" disabled
                >-- اختر سنتك الدراسية --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group class="col-lg-6" label="المحافظة">
          <b-form-select :options="states" v-model="profile.state" required>
            <template v-slot:first>
              <b-form-select-option :value="''" disabled
                >-- اختر محافظتك --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group class="col-lg-6" label="المدينة">
          <b-form-select
            :options="cities"
            v-model="profile.city"
            required
            placeholder="اختر مدينتك"
          >
            <template v-slot:first>
              <b-form-select-option :value="''" disabled
                >-- اختر مدينتك --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group class="col-lg-6" label="المنطقة">
          <b-form-select
            :options="areas"
            v-model="profile.area"
            required
            placeholder="اختر منطقتك"
          >
            <template v-slot:first>
              <b-form-select-option :value="''" disabled
                >-- اختر منطقتك --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group label=":الجنس">
          <b-form-radio-group
            v-model="profile.gender"
            name="radio-sub-component"
          >
            <b-form-radio value="M">ذكر</b-form-radio>
            <b-form-radio value="F">أنثى</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>

      <div class="text-right">
        <button @click="submit" class="btn btn-primary h-50 text-right">
          تأكيد
        </button>
      </div>
    </b-form>
  </div>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
import { mapState } from "vuex";
export default {
  async mounted() {
    await this.fetchContentData();
    this.profile = await this.fetchMyProfile();
  },
  data() {
    return {
      profile: {},
      univiresties: [],
      collages: [],
      states: [],
      cities: [],
      areas: [],
      contentData: null,
    };
  },
  computed: {
    ...mapState({
      personalProfile: (state) => state.Profile.profile,
    }),
  },
  watch: {
    "profile.university": {
      handler(newVal) {
        this.getCollagesUponUnivirsity(newVal);
      },
      immediate: false,
    },
    "profile.state": {
      handler(newVal) {
        this.getCitiesUponSate(newVal);
      },
      immediate: false,
    },
  },
  methods: {
    submit() {},
    async fetchMyProfile() {
      let { data } = await http().get(
        `info/profile/${this.personalProfile.id}`
      );
      let profile = {};
      profile.firstName = data.PI.fname;
      profile.lastName = data.PI.lname;
      profile.university = data.PI.university;
      profile.collage = data.PI.college;
      profile.studyYear = data.PI.year;
      profile.state = data.PI.state;
      profile.city = data.PI.city;
      profile.area = data.PI.area;
      profile.village = data.PI.village;

      return profile;
    },
    async fetchContentData() {
      let { data } = await http().get("info/create");
      this.contentData = data;
      this.univiresties = data.universities.map((e) => e.name);
      this.states = data.states.map((e) => e.name);
    },
    getCollagesUponUnivirsity(univirsityName) {
      if (this.contentData == null) return;
      let univirsityId = this.contentData.universities.find(
        (univirsity) => univirsity.name == univirsityName
      ).id;
      let collages = this.contentData.colleges.filter(
        (collage) => collage.university_id == univirsityId
      );
      this.collages = collages.map((collage) => collage.name);
    },
    getCitiesUponSate(stateNmae) {
      // if (this.contentData == null) return;
      // let univirsityId = this.contentData.universities.find(
      //   (univirsity) => univirsity.name == univirsityName
      // ).id;
      // let collages = this.contentData.colleges.filter(
      //   (collage) => collage.university_id == univirsityId
      // );
      // this.collages = collages.map((collage) => collage.name);
    },
  },
};
</script>

<style></style>
