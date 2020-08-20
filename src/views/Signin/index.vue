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
        <p class="text-right mb-4 mt-4">
          ليس لديك حساب؟ <router-link to="/signup">تسجيل حساب</router-link>
        </p>

        <h1 class="mb-3 text-center">تسجيل الدخول</h1>
        <b-form-group label="رقم الهاتف">
          <b-form-input
            v-model="signInModel.phoneNumber"
            type="email"
            required
            placeholder="أدخل رقم هاتفك"
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

        <a href="#" class="mx-3">نسيت كلمة المرور؟</a>
        <b-button type="submit" variant="primary">تسجيل الدخول</b-button>
      </b-form>
    </div>
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
