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
        :searchable="true"
        value="id"
        v-model="materialsModel.pickedMaterials"
        :options="materialsModel.materials"
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
import MaterialsModel from "./MaterialsModel";
import schoolCard from "@/components/school-card";
import Material from "./MaterialModel";
export default {
  components: {
    schoolCard,
  },
  data() {
    return {
      materialsModel: new MaterialsModel([
        new Material(2, "s"),
        new Material(3, "5"),
      ]),
      schools: [],
      submitClicked: false,
      fields: ["name", "actions"],
    };
  },
  methods: {
    submit() {
      this.$router.push({
        path: '/teaching-schools/results',
        query: {
          materialIds: this.materialsModel.materials.map(e => e.id)
        }
      })
      this.submitClicked = true;
     
    },
  },
};
</script>

<style></style>
