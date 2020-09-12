<template>
  <div
    class="search-large-hero"
    style="background-image: url('/images/teach-schools-bar.jpg')"
  >
    <div class="search-large-hero__content">
      <h1 class="text-center mt-4">المواد المراد تدريسها</h1>
      <p class="mt-2 text-center">
        يمكنك اختيار المواد التي يمكنك تدريسها لطلاب المدارس
      </p>
      <v-select
        :items="materialsModel"
        label="اختر المواد المراد تدريسها"
        :menu-props="{ bottom: true, offsetY: true }"
        class="search-large-hero__searchbox"
        v-model="pickedMaterials"
        attach
        item-text="name"
        item-value="id"
        chips
        flat
        multiple
        solo
      >
        <template #selection="{ item }">
          <v-chip close @click:close="removeShip(item.id)">{{
            item.name
          }}</v-chip>
        </template>
      </v-select>
      <button class="btn btn-primary search-large-hero__btn" @click="submit">
        تأكيد
      </button>
    </div>
  </div>
</template>

<script>
import http from "@/repo/teachAndLearnHttp";
import schoolCard from "@/components/school-card";
export default {
  components: {
    schoolCard,
  },
  data() {
    return {
      materialsModel: [
        {
          name: "--",
          id: null,
        },
      ],
      pickedMaterials: [],
      schools: [],
      fields: ["name", "actions"],
    };
  },
  async mounted() {
    this.materialsModel = await this.fetchMaterials();
  },
  methods: {
    submit() {
      this.$router.push({
        path: "/teaching-schools/results",
        query: {
          materialsIds: this.pickedMaterials,
        },
      });
    },
    async fetchMaterials() {
      let { data } = await http().get("schools/material/select");
      return data.materials;
    },
    removeShip(id) {
      this.pickedMaterials = this.pickedMaterials.filter((e) => e != id);
    },
  },
};
</script>

<style></style>
