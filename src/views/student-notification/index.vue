<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column mb-4"
  >
    <div class="w-50  justify-content-center">
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
            <b-form-select v-model="row.rateNumber" class="mb-3 w-50">
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
              @click="rate(row.item.id)"
              class="mr-2 ml-3"
            >
              قيم
            </b-button>
          </div>
        </template>
      </b-table>
      <h2 v-else class="text-gray text-center mt-2">لا يوجد اشعارات</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["text", "rate"],
      notifications: [
        {
          text: "هل  يمكنك تقييم الاستاذ omar-kh ?",
          id: 1,
        },
        {
          text: "هل  يمكنك تقييم الاستاذ mohammed ?",
          id: 2,
        },
      ],
      rateNumber: null,
    };
  },
  methods: {
    rate(id){
      
    }
  }
};
</script>

<style></style>
