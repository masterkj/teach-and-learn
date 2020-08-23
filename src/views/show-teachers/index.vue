<template>
  <div class="search-large-hero">
    <img
      class="search-large-hero__bg"
      src="/images/oreder-teacher-search.jpg"
    />
    <div class="search-large-hero__content">
      <h1 class="mb-4 text-center">اطلب استاذ</h1>
      <b-form-select
        v-model="pickedMaterial"
        placeholder="-- please select a year --"
        :options="materials"
        value-field="id"
        text-field="name"
        class="search-large-hero__searchbox"
      >
        <template v-slot:first>
          <b-form-select-option :value="null" disabled
            >-- رجاءا اختر مادة --</b-form-select-option
          >
        </template>
      </b-form-select>
      <button class="btn btn-primary search-large-hero__btn" @click="search">
        بحث
      </button>
    </div>
  </div>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";

export default {
  mounted() {
    this.fetchMaterials()
  },
  data() {
    return {
      materials: [
        {
          name: " السنة الأولى -- تحليل 2",
          id: 1,
        },
        {
          name: "السنة الثانية -- ص",
          id: 2,
        },
        {
          name: "السنة الثالثة -- سس",
          id: 3,
        },
        {
          name: "السنة الرابعة",
          id: 4,
        },
        {
          name: "السنة الخامسة",
          id: 5,
        },
      ],
      pickedMaterial: null,
    };
  },
  methods: {
    search() {
      this.$router.push({
        path: "/university-services/show-teachers/results",
        query: {
          materialId: this.pickedMaterial,
          materialName: this.materials.find((e) => (e.id = this.pickedMaterial))
            .name,
        },
      });
    },
    async fetchMaterials() {
      let {data} = await http().get('subject/select')
      this.materials = data.subjects
    }
  },
};
</script>

<style></style>
