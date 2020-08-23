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
      <b-form class="mt-4 text-right">
        <p class="text-right mb-4 mt-4">
          ليس لديك حساب؟ <router-link to="/signup">تسجيل حساب</router-link>
        </p>

        <h1 class="mb-3 text-center">تسجيل الدخول</h1>
        <b-form-group label="رقم الهاتف">
          <b-form-input
            v-model="signInModel.phoneNumber"
            type="text"
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
        <b-button @click="submit" variant="primary">تسجيل الدخول</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
import SignInModel from "./SignInModel";
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      signInModel: new SignInModel(),
    };
  },
  methods: {
    ...mapActions("Auth", ["signIn"]),
    ...mapMutations("Profile", ["completeUpdate"]),
    async submit() {
      // this.signIn('ss')
      let { data } = await http().post("user/login", {
        phone_number: this.signInModel.phoneNumber,
        password: this.signInModel.password,
      });
      if (data.access_token != undefined) this.signIn(data.access_token);
      if (data.user != undefined) {
        this.completeUpdate(data.user);
      }
      if (data.user != undefined) {
        this.$router.push("/");
      }
    },
  },
};
</script>
