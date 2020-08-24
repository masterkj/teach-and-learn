<template>
  <b-overlay :show="loadingOverlay" rounded="sm">
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
                <b-form-select-option :value="''" disabled
                  >-- اختر جامعتك --</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-form-group>
          <b-form-group class="col-lg-6" label="الكلية">
            <b-form-select
              :options="collages"
              v-model="profile.collage"
              required
            >
              <template v-slot:first>
                <b-form-select-option :value="''" disabled
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
          <b-form-group v-if="enableVillage" class="col-lg-6" label="القرية">
            <b-form-select
              :options="villages"
              v-model="profile.village"
              required
              placeholder="اختر قريتك"
            >
              <template v-slot:first>
                <b-form-select-option :value="''" disabled
                  >-- اختر قريتك --</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-form-group>

          <b-form-group label=":الجنس">
            <b-form-radio-group
              v-model="profile.gender"
              name="radio-sub-component"
              required
            >
              <b-form-radio value="male">ذكر</b-form-radio>
              <b-form-radio value="female">أنثى</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>

        <div class="text-right">
          <button @click="submit" class="btn btn-primary h-50 text-right">
            <template v-if="submitting">
              <b-spinner small type="grow"></b-spinner>
              جاري الارسال...
            </template>
            <template v-else>
              تأكيد
            </template>
          </button>
        </div>
      </b-form>
      <b-modal id="modal-1" v-model="completedMoal" hide-footer>
        <template v-slot:modal-title>
          اتمام المعلومات الشخصية
        </template>
        لقد أتممت معلوماتك الشخصية بنجاح</b-modal
      >
    </div>
  </b-overlay>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
import { mapState } from "vuex";
export default {
  async mounted() {
    this.loadingOverlay = true;

    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      this.$router.push("/");
    });
    console.log(this.loadingOverlay);
    await this.fetchContentData();
    this.profile = await this.fetchMyProfile();

    this.loadingOverlay = false;
    console.log(this.loadingOverlay);
  },
  data() {
    return {
      profile: {},
      univiresties: [],
      collages: [],
      states: [],
      cities: [],
      areas: [],
      villages: [],
      fetchedProfile: {},
      contentData: null,
      submitting: false,
      completedMoal: false,
      loadingOverlay: false,
    };
  },
  computed: {
    ...mapState({
      personalProfile: (state) => state.Profile.profile,
    }),
    isValid() {
      return this.profile.firstName == "" ||
        this.profile.lastName == "" ||
        this.profile.university == "" ||
        this.profile.collage == "" ||
        this.profile.studyYear == "" ||
        this.profile.state == "" ||
        this.profile.city == "" ||
        this.profile.area == "" ||
        (this.profile.state == "ريف دمشق" && this.profile.village == "") ||
        this.profile.gender == ""
        ? false
        : true;
    },
    enableVillage() {
      return this.profile.state == "ريف دمشق" ? true : false;
    },
  },
  watch: {
    "profile.university": {
      handler(newVal) {
        if (newVal !== this.fetchedProfile.university) {
          this.profile.collage = "";
        }
        this.getCollagesUponUnivirsity(newVal);
      },
      immediate: false,
    },
    "profile.state": {
      handler(newVal) {
        if (newVal != this.fetchedProfile.state) {
          this.profile.city = "";
        }
        this.getCitiesUponState(newVal);
      },
      immediate: false,
    },
    "profile.city": {
      handler(newVal) {
        if (newVal != this.fetchedProfile.city) {
          this.profile.area = "";
        }
        this.getAreeasUponCity(newVal);
      },
      immediate: false,
    },
    "profile.area": {
      handler(newVal) {
        if (newVal != this.fetchedProfile.area) {
          this.profile.village = "";
        }
        this.getVillageUponArea(newVal);
      },
      immediate: false,
    },
  },
  methods: {
    submit() {
      if (this.isValid) this.submitting = true;
      http()
        .post("info/store", null, {
          params: {
            university: this.profile.university,
            college: this.profile.collage,
            fname: this.profile.firstName,
            lname: this.profile.lastName,
            gender: this.profile.gender,
            state: this.profile.state,
            area: this.profile.area,
            village: this.profile.village,
            city: this.profile.city,
            year: this.profile.studyYear,
            user_id: this.personalProfile.id,
          },
        })
        .then(() => {
          this.submitting = false;
          this.completedMoal = true;
        })
        .catch(() => {
          this.submitting = false;
          this.completedMoal = true;
        });
    },
    async fetchMyProfile() {
      let { data } = await http().get(
        `info/profile/${this.personalProfile.id}`
      );
      let profile = {};
      if (data.PI == null || data.PI == undefined) {
        data.PI = {
          fname: "",
          lname: "",
          university: "",
          college: "",
          year: "",
          state: "",
          city: "",
          area: "",
          village: "",
          gender: "",
        };
      }
      profile.firstName = data.PI.fname;
      profile.lastName = data.PI.lname;
      profile.university = data.PI.university;
      profile.collage = data.PI.college;
      profile.studyYear = data.PI.year;
      profile.state = data.PI.state;
      profile.city = data.PI.city;
      profile.area = data.PI.area;
      profile.village = data.PI.village;
      profile.gender = data.PI.gender;
      this.fetchedProfile = Object.assign({}, profile);
      return profile;
    },
    async fetchContentData() {
      let { data } = await http().get("info/create");
      this.contentData = data;
      this.univiresties = data.universities.map((e) => e.name);
      this.states = data.states.map((e) => e.name);
    },
    getCollagesUponUnivirsity(univirsityName) {
      if (this.contentData == null || univirsityName == "") return;
      let univirsityId = this.contentData.universities.find(
        (univirsity) => univirsity.name == univirsityName
      ).id;
      let collages = this.contentData.colleges.filter(
        (collage) => collage.university_id == univirsityId
      );
      this.collages = collages.map((collage) => collage.name);
    },
    getCitiesUponState(stateNmae) {
      if (this.contentData == null || stateNmae == "") return;
      let stateId = this.contentData.states.find(
        (state) => state.name == stateNmae
      ).id;
      console.log(stateId);
      let cities = this.contentData.cities.filter(
        (city) => city.state_id == stateId
      );

      this.cities = cities.map((city) => city.name);
    },
    getAreeasUponCity(cityName) {
      if (this.contentData == null || cityName == "") return;
      let cityId = this.contentData.cities.find((city) => city.name == cityName)
        .id;
      let areas = this.contentData.areas.filter(
        (area) => area.city_id == cityId
      );
      this.areas = areas.map((area) => area.name);
    },
    getVillageUponArea(areaName) {
      if (this.contentData == null || areaName == "") return;
      let areaId = this.contentData.areas.find((area) => area.name == areaName)
        .id;
      let villages = this.contentData.villages.filter(
        (village) => village.area_id == areaId
      );
      this.villages = villages.map((village) => village.name);
    },
  },
};
</script>

<style></style>
