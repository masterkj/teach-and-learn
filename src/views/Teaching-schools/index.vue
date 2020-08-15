<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column mb-4"
  >
    <div class="w-50  justify-content-center">
      <h1 class="text-center text-lg mt-4">المواد المراد تدريسها</h1>
      <p class="text-md mt-2 text-center">
        يمكنك اختيار المواد التي يمكنك تدريسها لطلاب المدارس لتقوم بتقديم الدعم
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
      <button class="btn btn-primary mt-3" @click="submit">تأكيد</button>
      <div class="row">
        <div class="col-lg-4" v-for="school in schools" :key="school.id">
          <school-card :profile="school" />
        </div>
      </div>
      <!-- <b-table
        class="mt-3"
        :fields="fields"
        striped
        hover
        :items="schools"
        v-if="submitClicked"
      >
        <template v-slot:cell(actions)="row">
          <b-button size="sm" @click="enroll(row.item.id)" class="mr-2">
            enroll
          </b-button>
        </template>
      </b-table> -->
    </div>
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
      this.submitClicked = true;
      this.schools = [
        {
          name: "عبد الرحمن الكواكبي",
          description: "مدرسة اعدادية للبنين",
          id: 1,
        },
        { name: "عمر أبو ريشة", description: "مدرسة اعدادية للبنين", id: 2 },
      ];
    },
  },
  watch: {
    "materialsModel.pickedMaterials"(neww, old) {
      console.log(old);
    },
  },
};
</script>

<style></style>
