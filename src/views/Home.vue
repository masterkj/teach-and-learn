<template>
  <div>
    <site-services v-if="isLogedIn"  />
    <site-intro v-else />
  </div>
</template>

<script>
import siteIntro from "@/components/site-intro";
import siteServices from "@/components/site-services";

export default {
  name: "Home",
  components: {
    siteIntro,
    siteServices 
  },
  computed: {
    isLogedIn(){
      return false
    }
  }
};
</script>
