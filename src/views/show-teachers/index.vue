<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column mb-4"
  >
    <div class="w-50  justify-content-center">
      <h1 class="text-center text-lg mt-4">اطلب استاذ</h1>
      <b-form-select
        v-model="pickedYear"
        placeholder="-- please select a year --"
        :options="materials"
        value-field="id"
        text-field="name"
        class="mt-3"
      >
        <template v-slot:first>
          <b-form-select-option :value="null" disabled
            >-- Please select a year --</b-form-select-option
          >
        </template>
      </b-form-select>
      <button class="btn btn-primary mt-3" @click="search">search</button>
      <b-table
      class="mt-3"
        :fields="fields"
        striped
        hover
        :items="teachers"
        v-if="teachers.length != 0"
      >
        <template v-slot:cell(actions)="row">
          <b-button size="sm" @click="enroll(row.item.id)" class="mr-2">
            enroll
          </b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["name", "actions"],
      materials: [
        {
          name: " السنة الأولى -- تحليل 2",
          id: 1,
        },
        {
          name: "السنة الثانية -- ص",
          id: 2,
        },
        {
          name: "السنة الثالثة -- سس",
          id: 3,
        },
        {
          name: "السنة الرابعة",
          id: 4,
        },
        {
          name: "السنة الخامسة",
          id: 5,
        },
      ],
      pickedYear: null,
      teachers: [],
    };
  },
  methods: {
    search() {
      this.teachers = [
        {
          name: "teacher 1",
          id: 1,
        },
        {
          name: "teacher 2",
          id: 2,
        },
        {
          name: "teacher 3",
          id: 3,
        },
      ];
    },
    enroll(id) {
        console.log(id)
    }
  },
};
</script>

<style></style>
