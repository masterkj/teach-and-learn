<template>
  <div class="d-flex justify-content-center align-items-center mb-4">
    <b-form @submit="onSubmit" class="w-50 mt-4 text-right">
      <h1 class="text-center text-lg">تسجيل الحساب</h1>
      <div class="row">
        <b-form-group class="col-lg-6" label="البريد الالكتروني">
          <b-form-input
            v-model="signUpModel.email"
            type="email"
            required
            placeholder="أدخل بريدك الالكتروني"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-lg-6" label="رقم الهاتف">
          <b-form-input
            v-model="signUpModel.phoneNumber"
            type="text"
            required
            placeholder="أدخل رفم هاتفك"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-lg-6" label="تأكيد كلمة المرور">
          <b-form-input
            v-model="signUpModel.passwordConfirmation"
            type="password"
            required
            placeholder="أكد كلمة المرور"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-lg-6" label="كلمة المرور">
          <b-form-input
            v-model="signUpModel.password"
            type="password"
            required
            placeholder="أدخل كلمة المرور"
          ></b-form-input>
        </b-form-group>
      </div>
      <b-button type="submit" variant="primary">تأكيد</b-button>
    </b-form>
  </div>
</template>

<script>
import SignUpModel from "./SignUpModel";
export default {
  data() {
    return {
      signUpModel: new SignUpModel(),
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style></style>
