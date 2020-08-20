<template>
  <div class="d-flex flex-row ">
    <div class="filling">
      <router-link to="/">
        <img class="logo logo--md filling__image " src="/images/logo.png" />
      </router-link>
      <h4 class="filling__text">
        استكشف منصة علم وتعلم الهادفة لمشاركة التعليم
      </h4>
    </div>
    <div
      class="form-with-filling-width d-flex justify-content-center align-items-center"
    >
      <b-form class="mt-4 text-right" @submit="onSubmit">
        <h1 class="mb-3 text-center">تأكيد الرقم</h1>
        <p>أدخل الرمز المرسل الى جهازك المحمول من فضلك</p>
        <b-form-group label="رمز التأكيد">
          <b-form-input
            v-model="verifyCode"
            type="text"
            required
            placeholder="ادخل الرمز"
          ></b-form-input>
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
      verifyCode: ''
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
