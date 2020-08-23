<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column mb-4"
  >
    <div class="w-50  justify-content-center">
      <h2 class="text-center mt-4">اكمل معلوماتك الشخصية كأستاذ</h2>
      <b-form>
        <b-form-group label="الصورة الشخصية">
          <b-form-file
            v-model="personalPhoto"
            :state="Boolean(personalPhoto)"
            placeholder="اختر ملف او افلته هنا"
            drop-placeholder="أفلت الملف هنا"
          ></b-form-file>
        </b-form-group>

        <b-form-group label="البطاقة الجامعية">
          <b-form-file
            v-model="collegePhoto"
            :state="Boolean(collegePhoto)"
            placeholder="اختر ملف او افلته هنا"
            drop-placeholder="أفلت الملف هنا"
          ></b-form-file>
        </b-form-group>
        <div class="text-right">
          <b-button @click="submit" variant="primary">تأكيد</b-button>
        </div>
      </b-form>
      <b-modal id="modal-1" v-model="dialog" hide-footer>
        <template v-slot:modal-title>
          طلب تدريس مواد الجامعة
        </template>
        طلبك تم بنجاح، سيتم عرضك مع الأساتذة المقترحين</b-modal
      >
    </div>
  </div>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
export default {
  data() {
    return {
      personalPhoto: null,
      collegePhoto: null,
      dialog: false,
    };
  },
  mounted() {
    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      this.$router.push("/");
    });
  },
  methods: {
    submit() {

      //FIXME
      let fd = new FormData();
      fd.append("personalPhoto", this.personalPhoto);
      fd.append("collegePhoto", this.collegePhoto);

      http()
        .post("info/complete", fd)
        .then(() => {
          this.dialog = true;
        })
        .catch(() => {
          this.dialog = true;
        });
    },
  },
};
</script>

<style></style>
