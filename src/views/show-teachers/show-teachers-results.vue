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
    getResults() {
      this.teachers = [
        {
          name: "teacher 1",
          image:
            "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",

          id: 1,
        },
        {
          name: "teacher 2",
          image:
            "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",

          id: 2,
        },
        {
          name: "teacher 3",
          image:
            "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",

          id: 3,
        },
      ];
    },
  },
};
</script>

<style></style>
