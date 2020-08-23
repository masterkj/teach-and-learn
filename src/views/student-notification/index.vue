<template>
  <wrapper wraperWidth="lg">
    <b-table
      class="mt-3"
      :fields="fields"
      striped
      hover
      :items="notifications"
      v-if="notifications.length != 0"
    >
      <template v-slot:cell(rate)="row">
        <div width="row">
          <b-form-select v-model="row.rateNumber" class="w-50">
            <b-form-select-option :value="null" disabled
              >Please select a number</b-form-select-option
            >
            <b-form-select-option :value="1">1</b-form-select-option>
            <b-form-select-option :value="2">2</b-form-select-option>
            <b-form-select-option :value="3">3</b-form-select-option>
            <b-form-select-option :value="4">4</b-form-select-option>
            <b-form-select-option :value="5">5</b-form-select-option>
          </b-form-select>
          <b-button
            size="sm"
            variant="success"
            @click="rate(row.item.teacherId, row.rateNumber)"
            class="mr-2 ml-3"
          >
            قيم
          </b-button>
        </div>
      </template>
    </b-table>
    <h2 v-else class="text-gray text-center mt-2">{{ res }}</h2>
    <b-modal v-model="dialog" hide-footer>شكرا لك على التقييم</b-modal>
  </wrapper>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
export default {
  async mounted() {
    this.notifications = await this.getNotification();
    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      this.removeNotification(this.ratedTeacherId);
    });
  },
  data() {
    return {
      fields: ["text", "rate"],
      notifications: [],
      res: "",
      ratedTeacherId: null,
      dialog: false,
    };
  },
  methods: {
    rate(teacherId, rate) {
      this.ratedTeacherId = teacherId;
      let fd = new FormData();
      fd.append("rate", rate);
      fd.append("teacher_id", teacherId);
      http()
        .post("info/notifications", fd)
        .then(() => {
          this.dialog = true;
        });
    },
    async getNotification() {
      let { data } = await http().get("info/notifications");
      let notifications = data.notifications;
      if (notifications.length == 0) this.res = "لا يوجد اشعارات";
      return this.transformNotificationsModel(notifications);
    },
    transformNotificationsModel(notifications) {
      let notifiationText = " هل  يمكنك تقييم الاستاذ  ";
      return notifications.map((notification) => ({
        text: notifiationText + notification.data.teacher_full_name,
        teacherId: notification.data.teacher_id,
      }));
    },
    removeNotification(teacherId) {
      this.notifications = this.notifications.filter(
        (notification) => notification.teacherId != teacherId
      );
    },
  },
};
</script>
