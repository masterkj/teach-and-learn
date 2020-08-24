<template>
  <wrapper wraper-width="soft">
    <p class="text-right mt-4">
      المدارس التي بحاجة لدعم
    </p>
    <p class="text-right"><router-link to="/">العودة </router-link></p>
    <div class="row my-4">
      <div class="col-lg-4 col-sm-2" v-for="school in schools" :key="school.id">
        <schoolCard :school="school" />
      </div>
    </div>
  </wrapper>
</template>

<script>
import schoolCard from "@/components/school-card";
import http from "@/repo/teachAndLearnHttp";
export default {
  components: {
    schoolCard,
  },
  data() {
    return {
      schools: [],
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    async getResults() {
      let { data } = await http().post("schools/material/select", {
        material: this.$route.query.materialsIds,
      });
      this.schools = data.shortages;

      // this.schools = [
      //   {
      //     school_name: "Filepa Mckenzie",
      //     material_name: "Mellie Retchie",
      //     grade_name: "Mrs. zetta Bernier",
      //     houres: 5,
      //     city: "midan",
      //     area: "a",
      //   },
      //   {
      //     school_name: "Filepa Mckenzie",
      //     material_name: "Mellie Retchie",
      //     grade_name: "Mrs. zetta Bernier",
      //     houres: 5,
      //     city: "midan",
      //     area: "a",
      //   },
      //   {
      //     school_name: "Filepa Mckenzie",
      //     material_name: "Mellie Retchie",
      //     grade_name: "Mrs. zetta Bernier",
      //     houres: 5,
      //     city: "midan",
      //     area: "a",
      //   },
      // ];
      this.schools = this.transformToViewModel(this.schools);
    },
    transformToViewModel(schoolsDataSrc) {
      return schoolsDataSrc.map((school) => ({
        name: school.school_name,
        materialName: school.material_name,
        geadeName: school.grade_name,
        hours: school.houres,
        city: school.city,
        area: school.area,
      }));
    },
  },
};
</script>

<style></style>
