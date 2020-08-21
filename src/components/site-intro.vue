<template>
  <div class="large-hero">
    <img
      src="/images/background4.jpg"
      class="large-hero__image"
      alt="university photo"
    />
    <div class="large-hero__text text-center">
      <h1 class=" mb-3">علم و تعلم</h1>
      <p class="text-md">
        هدفنا هو رفع السوية العلمية في المدارس الحكومية بتزويدها بالأساتذة
        الأكفاء لتغطية النقص الحاصل في الكادر التدريسي ومساعدة طلاب الجامعات في
        موادهم الجامعية من قبل زملائهم في السنوات الأعلى بمقابل مادي بسيط وتفعيل
        نظام التعليم بالتبادل
      </p>
      <router-link to="/signin" class="btn btn-secondary btn-md mt-1 mx-2 "
        >تسجيل الدخول</router-link
      >
      <router-link to="/signup" class="btn btn-primary btn-md  mt-1 mx-2"
        >تسجيل حساب</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
