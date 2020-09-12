<template>
  <b-overlay :show="loadingOverlay" rounded="sm">
    <wrapper wraper-width="soft">
      <p class="text-right mt-4">
         الأساتذة المقترحين من قبل منصة علم و تعلم، <router-link to="/university-services/show-teachers"
          >العودة
        </router-link> 
      </p>
      <p class="text-right">
        أو<router-link to="/university-services/show-univirsities-teachers">
          ابحث
        عن أساتذة خارج جامعتك 
        </router-link>

      </p>
      <v-row class="my-4">
        <v-col
          :key="teacher.id"
          v-for="teacher in teachers"
          cols="12"
          md="4"
          sm="6"
        >
          <teacherCard :profile="teacher" />
        </v-col>
      </v-row>
    </wrapper>
  </b-overlay>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
import teacherCard from "@/components/profile-card";
export default {
  components: {
    teacherCard,
  },
  data() {
    return {
      teachers: [],
      loadingOverlay: false,
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    async getResults() {
      this.loadingOverlay = true;
      let { data } = await http().post(`teacher/request`, null, {
        params: {
          subject: this.$route.query.materialId,
        },
      });
      this.loadingOverlay = false;

      this.teachers = data.TeachersNames;
      this.teachers = this.teachers.map((teacher) => ({
        image: teacher.user_image,
        id: teacher.user_id,
        name: teacher.full_name,
        rate: teacher.rate,
        collage: teacher.college,
      }));

      // this.teachers = [
      //   {
      //     name: "teacher 1",
      //     image:
      //       "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",

      //     id: 1,
      //   },
      //   {
      //     name: "teacher 2",
      //     image:
      //       "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",

      //     id: 2,
      //   },
      //   {
      //     name: "teacher 3",
      //     image:
      //       "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",

      //     id: 3,
      //   },
      // ];
    },
  },
};
</script>

<style></style>
