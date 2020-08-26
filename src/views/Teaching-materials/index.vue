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
        v-model="pickedMaterials"
        :options="materialsModel"
      ></multiselect>
      <button class="btn btn-primary search-large-hero__btn" @click="submit">
        تأكيد
      </button>
    </div>
  </div>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
export default {
  mounted() {
    this.getMaterials();
  },
  data() {
    return {
      materialsModel: [],
      pickedMaterials: []
    };
  },
  methods: {
    async submit() {
      if (this.materialsModel.length == 0) alert("اختر مواد");
      else {
        http()
          .post("subject/select", {
            subject: this.pickedMaterials.map(
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
      
      this.materialsModel = data.subjects;
    },
  },
};
</script>

<style></style>
