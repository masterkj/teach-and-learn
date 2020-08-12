<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column mb-4"
  >
    <div class="w-50  justify-content-center">
      <h1 class="text-center mt-4">اكمل معلوماتك الشخصية كأستاذ</h1>
      <b-form @submit="onSubmit" >
        <b-form-group label="الصورة الشخصية">
          <b-form-file
            v-model="info.pic"
            :state="Boolean(info.pic)"
            placeholder="اختر ملف او افلته هنا"
            drop-placeholder="أفلت الملف هنا"
          ></b-form-file>
        </b-form-group>

        <b-form-group label="البطاقة الجامعية">
          <b-form-file
            v-model="info.collageCard"
            :state="Boolean(info.collageCard)"
            placeholder="اختر ملف او افلته هنا"
            drop-placeholder="أفلت الملف هنا"
          ></b-form-file>
        </b-form-group>
        <b-button type="submit" variant="primary">تأكيد</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
    };
  },
  methods: {
      onSubmit(){

      }
  }
};
</script>

<style></style>
