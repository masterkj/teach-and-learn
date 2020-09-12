<template>
  <div
    class="search-large-hero"
    style="background-image: url('/images/teach-materials-bar.jpg')"
  >
    <div class="search-large-hero__content">
      <h1 class="text-center mt-0">المواد المراد تدريسها</h1>
      <p class="mt-2">
        يمكنك اختيار المواد التي تتقنها في كليتك لتدرسها لغيرك من الطلاب
      </p>
      <v-select
        :items="materialsModel"
        label="اختر المواد المراد تدريسها"
        class="search-large-hero__searchbox"
        :menu-props="{ bottom: true, offsetY: true }"
        v-model="pickedMaterials"
        attach
        item-text="name"
        item-value="id"
        chips
        flat
        multiple
        solo
      >
        <template #selection="{ item }">
          <v-chip close @click:close="removeShip(item.id)">{{
            item.name
          }}</v-chip>
        </template>
      </v-select>
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
      pickedMaterials: [],
    };
  },
  methods: {
    async submit() {
      if (this.pickedMaterials.length == 0) alert("اختر مواد");
      else {
        http()
          .post("subject/select", {
            subject: this.pickedMaterials,
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
      data.subjects = data.subjects.sort((a, b) => a.year - b.year);
      data.subjects = this.addHeaders(data.subjects);
      this.materialsModel = data.subjects;
    },
    addHeaders(subjects) {
      let prevSubjectYear = -1;
      let headerTitle = "";
      for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].year != undefined) {
          if (subjects[i].year != prevSubjectYear) {
            prevSubjectYear = subjects[i].year;
            headerTitle = this.getYearName(subjects[i].year);
            subjects.splice(i, 0, { header: headerTitle });
          }
        }
      }
      return subjects;
    },
    getYearName(i) {
      if (i == "1") return "السنة الأولى";
      if (i == "2") return "السنة الثانية";
      if (i == "3") return "السنة الثالثة";
      if (i == "4") return "السنة الرابعة";
      if (i == "5") return "السنة الخامسة";
      if (i == "6") return "السنة السادسة";
    },
    removeShip(id) {
      this.pickedMaterials = this.pickedMaterials.filter((e) => e != id);
    },
  },
};
</script>
