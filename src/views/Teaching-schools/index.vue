<template>
  <div class="search-large-hero">
    <img class="search-large-hero__bg" src="/images/teach-schools-bar.jpg" />
    <div class="search-large-hero__content">
      <h1 class="text-center mt-4">المواد المراد تدريسها</h1>
      <p class="mt-2 text-center">
        يمكنك اختيار المواد التي يمكنك تدريسها لطلاب المدارس
      </p>
      <multiselect
        track-by="id"
        :close-on-select="false"
        :clear-on-select="true"
        :hideSelected="true"
        :multiple="true"
        class="search-large-hero__searchbox"
        label="name"
        placeholder="اختر المواد المراد تدريسها"
        :searchable="false"
        value="id"
        v-model="pickedMaterials"
        :options="materialsModel"
      ></multiselect>
      <button class="btn btn-primary search-large-hero__btn" @click="submit">
        تأكيد
      </button>
    </div>
    <!-- <div class="row">
        <div class="col-lg-4" v-for="school in schools" :key="school.id">
          <school-card :profile="school" />
        </div>
      </div> -->
  </div>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
import schoolCard from "@/components/school-card";
export default {
  components: {
    schoolCard,
  },
  data() {
    return {
      materialsModel: [
        {
          name: "--",
          id: null,
        },
      ],
      pickedMaterials: [],
      schools: [],
      fields: ["name", "actions"],
    };
  },
  async mounted() {
    this.materialsModel = await this.fetchMaterials();
  },
  methods: {
    submit() {
      this.$router.push({
        path: "/teaching-schools/results",
        query: {
          materialsIds: this.pickedMaterials.map((material) => material.id),
        },
      });
    },
    async fetchMaterials() {
      let { data } = await http().get("schools/material/select");
      return data.materials;
    },
  },
};
</script>

<style></style>
