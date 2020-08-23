<template>
  <wrapper wraper-width="soft">
    <p class="text-right mt-4">
      المدارس التي بحاجة لدعم
    </p>
    <p class="text-right"><router-link to="/" >العودة </router-link></p>
    <div class="row my-4">
      <div class="col-lg-4 col-sm-2" v-for="school in schools" :key="school.id">
        <schoolCard :school="school" />
      </div>
    </div>
  </wrapper>
</template>

<script>
import schoolCard from "@/components/school-card";
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
    getResults() {
      this.schools = [
        // {
        //   name: "عبد الرحمن الكواكبي",
        //   description: "مدرسة اعدادية للبنين",
        //   id: 1,
        // },
        // { name: "عمر أبو ريشة", description: "مدرسة اعدادية للبنين", id: 2 },
        //         { name: "عمر أبو ريشة", description: "مدرسة اعدادية للبنين", id: 2 },
        // { name: "عمر أبو ريشة", description: "مدرسة اعدادية للبنين", id: 2 },
        // { name: "عمر أبو ريشة", description: "مدرسة اعدادية للبنين", id: 2 },

      ];
    },
  },
};
</script>

<style></style>
