<template>
  <b-navbar  sticky toggleable="sm" class="py-1" type="dark" variant="dark">
    <b-navbar-brand class="py-0 pl-2 w-200px" to="/">
      <img class="logo " src="/images/logo.png" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav
        v-if="signedIn"
        class=" w-100 d-flex justify-content-center"
      >
        <b-nav-item class="mx-2 text-center" to="/teaching-schools"
          >قسم المدارس</b-nav-item
        >
        <b-nav-item class="mx-2 text-center" to="/university-services"
          >قسم الجامعات</b-nav-item
        >
        <b-nav-item class="mx-2 text-center" to="/teaching-and-learn"
          >علم و تعلم</b-nav-item
        >
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <template v-if="!signedIn">
          <b-nav-item to="/signin" class="mx-2 ">تسجيل الدخول</b-nav-item>
          <b-nav-item to="/signup" class="mx-2">تسجيل حساب</b-nav-item>
        </template>
        <template v-else>
          <b-nav-item-dropdown class="text-right pr-2 w-200px" right>
            <template class="py-0" v-slot:button-content>
              {{pesonalProfile.full_name}} <img class="profile-pic--sm ml-2" :src="$fullUrl(pesonalProfile.user_image)" />
            </template>
            <b-dropdown-item to="/profile-info">ملفي الشخصي</b-dropdown-item>
            <b-dropdown-item to="/student-notification"
              >الاشعارات</b-dropdown-item
            >

            <b-dropdown-item @click="signOut">تسجيل الخروج</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      profilePic:
        "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg",
    };
  },
  computed: mapState({
    signedIn: state => state.Auth.isSignedIn,
    pesonalProfile: state => state.Profile.profile
  }),
  methods: {
    ...mapActions('Auth', [
    'signOut',
  ]),
  },
};
</script>

<style>
.dropdown-toggle {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
