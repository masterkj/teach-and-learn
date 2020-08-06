<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <img class="logo" src="/images/logo.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="الخدمات" left>
            <b-dropdown-item class="text-right" href="#">اطلب استاذ</b-dropdown-item>
            <b-dropdown-item class="text-right" href="#">تدريس طلاب جامعات</b-dropdown-item>
            <b-dropdown-item class="text-right" href="#">تدريس مدارس حكومية</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="اللغة" left>
            <b-dropdown-item class="text-right" href="#">عربية</b-dropdown-item>
            <b-dropdown-item class="text-right" href="#">انجليزي</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/signin" right>تسجيل الدخول</b-nav-item>
          <b-nav-item to="/signup" right>تسجيل حساب</b-nav-item>

          <!-- <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
