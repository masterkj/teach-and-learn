<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column mb-4"
  >
    <div class="w-50  justify-content-center">
      <h1 class="text-center text-lg mt-4">المواد المراد تدريسها</h1>
      <p class="text-md mt-2">
        يمكنك اختيار المواد التي تتقنها في كليتك لتدرسها لغيرك من الطلاب
      </p>
      <multiselect
        track-by="id"
        :close-on-select="false"
        :clear-on-select="true"
        :hideSelected="true"
        :multiple="true"
        label="name"
        placeholder="اختر المواد المراد تدريسها"
        :searchable="true"
        value="id"
        v-model="materialsModel.pickedMaterials"
        :options="materialsModel.materials"
      ></multiselect>
      <button class="btn btn-primary mt-3" @click="submit">تأكيد </button>
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
    submit(){

    }
  },
  watch: {
      "materialsModel.pickedMaterials"(neww, old){
          console.log(old)
      }
  }
};
</script>

<style></style>
