<template>
  <div class="d-flex justify-content-center align-items-center mb-4">
    <b-form width="600" class="form-group mt-4 w-50" @submit="onSubmit">
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
        <b-form-group class="col-lg-6" label="الكلية">
          <b-form-select
            :options="universities"
            v-model="profile.universityid"
            required
            placeholder="اختر كليتك"
          ></b-form-select>
        </b-form-group>
        <b-form-group class="col-lg-6" label="السنة الدراسية">
          <b-form-input
            v-model="profile.studyYear"
            type="number"
            required
            placeholder="ادخل سنتك الدراسية"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-lg-6" label="الاختصاص">
          <b-form-select
            :options="sections"
            v-model="profile.sectionId"
            required
            placeholder="اختر اختصاصك"
          ></b-form-select>
        </b-form-group>
        <b-form-group class="col-lg-6" label="مكان الاقامة">
          <b-form-input
            v-model="profile.address"
            type="text"
            required
            placeholder="ادخل مكان الاقامة"
          ></b-form-input>
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
        <button type="submit" class="btn btn-primary h-50 text-right">
          تأكيد
        </button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Profile from "./PorfileModel";
export default {
  data() {
    return {
      profile: new Profile(),
      universities: [],
      sections: [],
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style></style>
