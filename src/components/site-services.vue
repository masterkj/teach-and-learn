<template>
  <div class="mb-4 ">
    <h1 class="mt-4 text-center text-lg">خدماتنا</h1>
    <p class="text-center text-gray text-md">
      الخدمات التي توفرها لك منصة
      <b>علم و تعلم</b>
      التعليمية
    </p>
    <b-container class="w-75">
      <div class="row d-flex align-items-stretch">
        <div class="col-lg-4 col-sm-6" v-for="card in cards" :key="card.title">
          <service-card
            :title="card.title"
            :paragraph="card.paragraph"
            :icon="card.icon"
            :link="card.link"
          />
        </div>
   
      </div>
    </b-container>

    <!-- justify-content-center align-items-center -->
  </div>
</template>

<script>
import serviceCard from "./service-card";
export default {
  components: {
    serviceCard,
  },
  data() {
    return {
      cards: [
        {
          title: "اطلب استاذ",
          paragraph: `مع علم وتعلم، يمكنك البحث عن طلاب مميزين وقادرين على منحك الفائدة العلمية في المواد التي 
          تبحث عن من يعلمك اياها`,
          icon: '/icons/teacher-student.png',
          link: "/teaching-materials"
        },
         {
          title: "تدريس طلاب جامعات",
          paragraph: `ان كنت متمكن من بعض المواد الجامعية، وعندك رغبة في تدريسها لزملائك من السنين السابقة،
          ، يمكنك التسجيل كأستاذ هنا`,
          icon: '/icons/university.png',
          link: "/teaching-materials"
        },
         {
          title: "تدريس مدارس حكومية",
          paragraph: `ان كنت قادرا على اعطاء مادة معينة في مدرسة حكومية، 
           لطلاب مرحلة التعليم الأساسية والاعدادية، يمكنك الان التسجيل في المنصة كأستاذ لهذه المادة `,
          icon: '/icons/school.png',
          link: "/teaching-materials"

        },
      ],
    };
  },
};
</script>

<style></style>
