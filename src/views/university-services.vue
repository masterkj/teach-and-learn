<template>
  <div class="mb-4 ">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-md-6 m-0 p-0"
          v-for="section in sections"
          :key="section.title"
        >
          <layout-item
            :bgImg="section.bg"
            :title="section.title"
            :paragraph="section.paragraph"
            :link="section.link"
            :color="section.color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layoutItem from "@/components/layout-item";
export default {
  components: {
    layoutItem,
  },
  data() {
    return {
      sections: [
        { 
          bg: "/images/layout-teach-section.jpg",
          title: "علم غيرك",
          paragraph: `ان كنت متمكن من بعض المواد الجامعية، وعندك رغبة في تدريسها لزملائك من السنين السابقة،
          ، يمكنك التسجيل كأستاذ هنا`,
          link: "university-services/teaching-materials",
          color: 'light'
        },
        {
          bg: "/images/layout-learn-section.jpg",
          title: "ما عم تترفع معك ؟ اتركها علينا",
          paragraph: ``,
          link: "university-services/show-teachers",
          color: 'secondary'
        },
      ],
    };
  },
};
</script>

<style></style>
