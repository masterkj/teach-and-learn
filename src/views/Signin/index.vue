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
        <b-button @click="submit" variant="primary">

          <template v-if="submitting">
              <b-spinner small type="grow"></b-spinner>
              جاري الارسال...
            </template>
            <template v-else>
              تسجيل الدخول
            </template>
        </b-button>
      </b-form>
      <b-modal id="modal-1" v-model="errorDialog" hide-footer>
        <template v-slot:modal-title>
          خطأ
        </template>
        اسم المستخدم او كلمة المرور غير صحيحة</b-modal
      >
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
      errorDialog: false,
      submitting: false
    };
  },
  methods: {
    ...mapActions("Auth", ["signIn"]),
    ...mapMutations("Profile", ["completeUpdate"]),
    submit() {
      // this.signIn('ss')
      this.submitting = true
      http()
        .post("user/login", {
          phone_number: this.signInModel.phoneNumber,
          password: this.signInModel.password,
        })
        .then((res) => {
      this.submitting = false

          if (res.data.access_token != undefined)
            this.signIn(res.data.access_token);
          else {
            this.errorDialog = true;
          }
          if (res.data.user != undefined) {
            this.completeUpdate(res.data.user);
          }

          if (res.data.user != undefined) {
            this.$router.push("/");
          }
        })
        .catch((err) => {
      this.submitting = false
          this.errorDialog = true;
        });
    },
  },
};
</script>
