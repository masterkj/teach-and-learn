<template>
  <wrapper wraper-width="soft">
    <p class="text-right mt-4">
      الأساتذة المقترحين من أجل مادة {{ $route.query.materialName }}
    </p>
    <p class="text-right">
      العودة الى
      <router-link to="/university-services/show-teachers"
        >صفحة البحث
      </router-link>
    </p>
    <p class="text-right">
      أو<router-link to="/university-services/show-univirsities-teachers">
        ابحث
      </router-link>
      عن أساتذة خارج جامعتك صفحة البحث
    </p>
    <div class="row my-4">
      <div
        class="col-lg-4 col-sm-2"
        v-for="teacher in teachers"
        :key="teacher.id"
      >
        <teacherCard :profile="teacher" />
      </div>
    </div>
  </wrapper>
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
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    async getResults() {
      let { data } = await http().post(`teacher/request`, null, {
        params: {
          subject: this.$route.query.materialId,
        },
      });
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
