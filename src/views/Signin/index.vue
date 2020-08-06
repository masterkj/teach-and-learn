<template>
  <div class="d-flex justify-content-center align-items-center mb-4">
    <b-form class=" mt-4" @submit="onSubmit">
      <h1 class="mb-3 text-center text-lg">تسجيل الدخول</h1>
      <b-form-group label="البريد الالكتروني">
        <b-form-input
          v-model="signInModel.email"
          type="email"
          required
          placeholder="أدخل بريدك الالكتروني"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="كلمة السر">
        <b-form-input
          v-model="signInModel.password"
          type="password"
          required
          placeholder="أدخل كلمة السر"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-checkbox v-model="signInModel.rememberMe"
          >تذكرني</b-form-checkbox
        >
      </b-form-group>

      <b-button type="submit" variant="primary">تسجيل الدخول</b-button>
      <a href="#" class="mx-3">نسيت كلمة المرور؟</a>
    </b-form>
  </div>
</template>

<script>
import SignInModel from "./SignInModel";
export default {
  data() {
    return {
      signInModel: new SignInModel(),
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style></style>
