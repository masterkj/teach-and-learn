<template>
  <wrapper>
    <div class="form">
      <h4 class="mb-4 text-right">اطلب استاذ من خارج جامعتك</h4>

      <b-form-group label="اختر الجامعة ">
        <b-form-select
          v-model="univirsityId"
          placeholder="رجاء اختر جامعة"
          :options="univirsities"
          value-field="id"
          text-field="name"
        >
          <template v-slot:first>
            <b-form-select-option :value="null" disabled
              >-- رجاء اختر جامعة --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-form-group>
      <b-form-group :disabled="univirsityId == null" label="اختر الكلية ">
        <b-form-select
          v-model="collageId"
          placeholder="رجاء اختر الكلية"
          :options="collages"
          value-field="id"
          text-field="name"
        >
          <template v-slot:first>
            <b-form-select-option :value="null" disabled
              >-- رجاء اختر الكلية --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group :disabled="collageId == null" label="اختر الكلية ">
        <b-form-select
          v-model="subjectId"
          placeholder="رجاء اختر المادة"
          :options="subjects"
          value-field="id"
          text-field="name"
        >
          <template v-slot:first>
            <b-form-select-option :value="null" disabled
              >-- رجاء اختر المادة --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-form-group>

      <div class="text-right">
        <button class="btn btn-primary" @click="search">
          بحث
        </button>
      </div>
    </div>
  </wrapper>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";

export default {
  mounted() {
    this.fetchUnivirsites();
  },
  data() {
    return {
      univirsities: [],
      collages: [],
      subjects: [],
      univirsityId: null,
      collageId: null,
      subjectId: null,
      validationDialog: false
    };
  },
  methods: {
    search() {
      if (this.subjectId == null) {
        this.validationDialog = true
      } else {
        this.$router.push({
          path: "/university-services/show-teachers/results",
          query: {
            materialId: this.subjectId,
            materialName: this.subjects.find(
              (e) => (e.id = this.subjectId)
            ).name,
          },
        });
      }
    },
    async fetchUnivirsites() {
      let { data } = await http().get("data/alluniversities");
      this.univirsities = data.universities;
    },
    async fetchCollages(id) {
      this.collageId = null;
      this.subjectId = null;
      let { data } = await http().post("data/collegesInThisUniversity", {
        university_id: id,
      });
      this.collages = data;
    },
    async fetchSubjects(id) {
      this.subjectId = null;
      let { data } = await http().post("data/subjectsInThiscollege", {
        college_id: id,
      });
      this.subjects = data;
    },
  },
  watch: {
    univirsityId(newVar) {
      this.fetchCollages(newVar);
    },
    collageId(newVar) {
      this.fetchSubjects(newVar);
    },
  },
};
</script>

<style></style>
