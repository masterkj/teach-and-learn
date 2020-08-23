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
import http from "@/repo/teachAndLearnHttp";
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
      fields: ["name", "actions"],
    };
  },
  async mounted() {
    this.materialsModel = await this.fetchMaterials();
  },
  methods: {
    submit() {
      http()
        .post("schools/material/select", {
          material: this.materialsModel.materials.map((e) => e.id),
        })
        .then(() => {
          this.$router.push({
            path: "/teaching-schools/results",
            query: {
              materialIds: this.materialsModel.materials.map((e) => e.id),
            },
          });
        });
    },
    async fetchMaterials() {
      let { data } = await http().get("schools/material/select");
      let materials = data.materials.map(
        (material) => new Material(material.id, material.name)
      );
      return new MaterialsModel(materials);
    },
  },
};
</script>

<style></style>
