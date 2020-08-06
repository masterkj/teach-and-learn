<template>
  <div class="d-flex justify-content-center align-items-center flex-column mb-4">
      <div class="w-50">
      <h1 class="text-center text-lg mt-4">المواد المراد تدريسها</h1>
      <p class="text-md mt-2">يمكنك اختيار المواد التي تتقنها في كليتك لتدرسها لغيرك من الطلاب </p>
      <multiselect :is-multi="true" :all-values="materialsModel.materials" option-title-name="name" :value="materialsModel.pickedMaterials"/>
      </div>
  </div>
</template>

<script>
import MaterialsModel from './MaterialsModel'
import Material from './Material'
export default {
    data() {
        return{
            materialsModel: new MaterialsModel([new Material(2,"s"), new Material(3,"5")])
        }
    }
}
</script>

<style>

</style>