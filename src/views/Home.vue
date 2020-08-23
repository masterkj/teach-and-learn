<template>
  <div>
    <site-services v-if="isSignedIn"  />
    <site-intro v-else />
  </div>
</template>

<script>
import siteIntro from "@/components/site-intro";
import siteServices from "@/components/site-services";
import {mapState} from 'vuex'

export default {
  name: "Home",
  components: {
    siteIntro,
    siteServices 
  },
  computed: {
    ...mapState({
      isSignedIn: state => state.Auth.isSignedIn
    })
  }
};
</script>
