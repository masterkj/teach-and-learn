<template>
  <div class="search-large-hero">
    <img class="search-large-hero__bg" src="/images/teach-materials-bar.jpg" />
    <div class="search-large-hero__content">
      <h1 class="text-center mt-4">المواد المراد تدريسها</h1>
      <p class="mt-2">
        يمكنك اختيار المواد التي تتقنها في كليتك لتدرسها لغيرك من الطلاب
      </p>
      <multiselect
        track-by="id"
        :searchable="false"
        :close-on-select="true"
        :hideSelected="true"
        :multiple="true"
        label="name"
        class="search-large-hero__searchbox"
        tag-placeholder="اختر المواد المراد تدريسها"
        value="id"
        v-model="materialsModel.pickedMaterials"
        :options="materialsModel.materials"
      ></multiselect>
      <button class="btn btn-primary search-large-hero__btn" @click="submit">
        تأكيد
      </button>
    </div>
  </div>
</template>

<script>
import MaterialsModel from "./MaterialsModel";
import Material from "./MaterialModel";
import http from "@/repo/teachAndLearnHttp";
export default {
  mounted() {
    this.getMaterials();
  },
  data() {
    return {
      materialsModel: new MaterialsModel([new Material(1, "--")]),
    };
  },
  methods: {
    async submit() {
      if (this.materialsModel.materials.length == 0) alert("اختر مواد");
      else {
        http()
          .post("subject/select", {
            subject: this.materialsModel.materials.map(
              (material) => material.id
            ),
          })
          .then(() => {
            this.$router.push(
              "/university-services/teaching-materials/complete-teacher-info"
            );
          });
      }
    },
    async getMaterials() {
      let { data } = await http().get("subject/select");
      let materials = [];
      data.subjects.forEach((subject) =>
        materials.push(new Material(subject.id, subject.name))
      );
      this.materialsModel = new MaterialsModel(materials);
    },
  },
};
</script>

<style></style>
