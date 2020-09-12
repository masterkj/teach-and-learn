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
      <b-form class="w-50 mt-4 text-right">
        <p class="text-right mb-4 mt-4">
          عضو مسبقا؟ <router-link to="/signin">تسجيل الدخول</router-link>
        </p>

        <h1 class="text-center pt-4">تسجيل الحساب</h1>
        <div class="row">
          <b-form-group class="col-lg-12" label="رقم الهاتف">
            <b-form-input
              v-model="signUpModel.phoneNumber"
              type="text"
              required
              placeholder="أدخل رفم هاتفك"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="col-lg-12" label="تأكيد كلمة المرور">
            <b-form-input
              v-model="signUpModel.passwordConfirmation"
              type="password"
              required
              placeholder="أكد كلمة المرور"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="col-lg-12" label="كلمة المرور">
            <b-form-input
              v-model="signUpModel.password"
              type="password"
              required
              placeholder="أدخل كلمة المرور"
            ></b-form-input>
          </b-form-group>
        </div>
        <b-button @click="submit" variant="primary">
          <template v-if="submitting">
            <b-spinner small type="grow"></b-spinner>
            جاري الارسال...
          </template>
          <template v-else>
            تسجيل حساب
          </template>
        </b-button>
      </b-form>
      <b-modal id="modal-1" v-model="errorDialog" hide-footer>
        <template v-slot:modal-title>
          خطأ
        </template>
        حدث خطأ ما، يرجى اعادة المحاولة</b-modal
      >
    </div>
  </div>
</template>

<script>
import SignUpModel from "./SignUpModel";
import http from "@/repo/teachAndLearnHttp";
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      signUpModel: new SignUpModel(),
      errorDialog: false,
      submitting: false,
    };
  },
  methods: {
    ...mapActions("Auth", ["signIn"]),
    ...mapMutations("Profile", ["completeUpdate"]),
    async submit() {
      let fd = new FormData();
      fd.append("phone_number", this.signUpModel.phoneNumber);
      fd.append("password", this.signUpModel.password);
      if (this.signUpModel.password != this.signUpModel.passwordConfirmation)
        window.alert("كلمة المرور غير متشابهة");
      else {
        this.submitting = true;
        http()
          .post("user/register", fd)
          .then((res) => {
            this.submitting = false;

            if (res.data.accessToken != undefined)
              this.signIn(res.data.accessToken);
            else {
              this.errorDialog = true;
            }
            if (res.data.user != undefined) {
              this.completeUpdate(res.data.user);
            }
            if (res.data.user != undefined) {
              this.$router.push("/profile-edit");
            }
          })
          .catch(() => {
            this.submitting = false;
            this.errorDialog = true;
          });
      }
    },
  },
};
</script>

<style></style>
