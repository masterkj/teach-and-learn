<template>
  <div class="search-large-hero">
    <img
      class="search-large-hero__bg"
      src="/images/teach-materials-bar.jpg"
    />
    <div class="search-large-hero__content">
      <h1 class="text-center mt-4">المواد المراد تدريسها</h1>
      <p class="mt-2">
        يمكنك اختيار المواد التي تتقنها في كليتك لتدرسها لغيرك من الطلاب
      </p>
      <multiselect
        track-by="id"
        :close-on-select="false"
        :clear-on-select="true"
        :hideSelected="true"
        :multiple="true"
        label="name"
        class="search-large-hero__searchbox"
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
  </div>
</template>

<script>
import MaterialsModel from "./MaterialsModel";
import Material from "./MaterialModel";
export default {
  data() {
    return {
      materialsModel: new MaterialsModel([
        new Material(2, "s"),
        new Material(3, "5"),
      ]),
    };
  },
  methods: {
    submit() {
      this.$router.push('/university-services/teaching-materials/complete-teacher-info')
    },
  },
};
</script>

<style></style>
