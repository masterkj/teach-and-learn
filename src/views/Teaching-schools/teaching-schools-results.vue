<template>
  <b-overlay :show="loadingOverlay" rounded="sm">
    <wrapper wraper-width="soft">
      <p class="text-right mt-4">
        المدارس التي بحاجة لدعم
      </p>
      <p class="text-right"><router-link to="/">العودة </router-link></p>
      <v-row>
        <v-col
          v-for="school in schools"
          :key="school.id"
          cols="12"
          md="4"
          sm="6"
        >
          <schoolCard :school="school" />
        </v-col>
      </v-row>
    </wrapper>
  </b-overlay>
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
      loadingOverlay: false
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    async getResults() {
      this.loadingOverlay = true
      let { data } = await http().post("schools/material/select", {
        material: this.$route.query.materialsIds,
      });
      this.loadingOverlay = false
      
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
