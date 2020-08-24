<template>
  <div class="card profile-card profile-card--fixed-height">
    <h3 class="profile-card__name mt-2">{{ school.name }}</h3>
    <p class="profile-card__detail mt-n1">{{ school.materialName }}</p>

    <div class="w-75 ml-auto mr-auto mt-2">
      <table class="profile__details-table--sm" style="width:100%">
        <tr>
          <td class="profile__property-name ">عدد الساعات</td>
          <td>{{ school.hours }}</td>
        </tr>
        <tr>
          <td class="profile__property-name">المنطقة</td>
          <td>{{ school.city }}، {{ school.area }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["school"],
  methods: {
    enroll(id) {},
  },
};
</script>

<style></style>
