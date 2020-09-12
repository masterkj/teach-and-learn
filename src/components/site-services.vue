<template>
  <div class="mb-4 ">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-md-4 m-0 p-0"
          v-for="section in sections"
          :key="section.title"
        >
          <layout-item
            :bgImg="section.bg"
            :title="section.title"
            :paragraph="section.paragraph"
            :link="section.link"
            :color="section.color"
            :soon="section.soon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import serviceCard from "./service-card";
import layoutItem from "@/components/layout-item";
export default {
  components: {
    serviceCard,
    layoutItem,
  },
  data() {
    return {
      sections: [
        {
          bg: "/images/layout-school-section.jpg",
          title: " قسم المدارس",
          paragraph: `عندك يوم أو يومين فراغ ببرنامجك ، شو رأيك تدرس بوحدة من المدارس اللي حواليك بالمواد اللي بتختارها ؟`,
          link: "/teaching-schools",
          color: "primary",
          soon: false,
        },
        {
          bg: "/images/layout-univirsity-section.jpg",
          title: " قسم الجامعات",
          paragraph: `التشبيك ما بين طلاب الجامعات لمساعدة بعضهم البعض في موادهم الجامعية`,
          link: "/university-services",
          color: "light",
          soon: false,
        },
        {
          bg: "/images/layout-collaboration-section.jpg",
          title: "علم و تعلم",
          paragraph: `عم تدور على حدا يعلمك شي  (one to one)؟ وبنفس الوقت قادر تعلم شي هو بحاجتو
          هون رح تلاقي طلبك .
          `,
          link: "/show-teachers",
          color: "secondary",
          soon: true,
        },
      ],
    };
  },
};
</script>

<style></style>
