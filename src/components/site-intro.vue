<template>
   <div class="large-hero">
    <parallax >
      <img
        src="/images/background4.jpg"
        class="large-hero__image"
        alt="university photo"
      />
    </parallax>
    <div class="large-hero__text text-center">
      <h1 class="text-lg mb-3">علم و تعلم</h1>
      <p class="text-md">
        هدفنا هو رفع السوية العلمية في المدارس الحكومية بتزويدها بالأساتذة
        الأكفاء لتغطية النقص الحاصل في الكادر التدريسي ومساعدة طلاب الجامعات في
        موادهم الجامعية من قبل زملائهم في السنوات الأعلى بمقابل مادي بسيط وتفعيل
        نظام التعليم بالتبادل
      </p>
      <router-link to="/signin" class="btn btn-secondary btn-md m-4 ">تسجيل الدخول</router-link>
      <router-link to="/signup" class="btn btn-primary btn-md  m-4">تسجيل حساب</router-link>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>