<template>
  <b-modal ref="createModalRef" title="Create Recipe">
    <!-- Add your form elements here for recipe input fields -->
    <!-- Example: -->
    <label for="title">Title:</label>
    <input v-model="title" type="text" id="title">

    <!-- Add other input fields here -->

    <template #modal-footer="{ ok, cancel }">
      <b-button variant="primary" @click="createRecipe">Create Recipe</b-button>
      <b-button @click="cancel">Close</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      // Add other data properties here for recipe input fields
    };
  },
  methods: {
    createRecipe() {
      // Gather the recipe information and emit an event to the parent component (App.vue)
      const recipe = {
        title: this.title,
        // Gather other recipe information
      };
      this.$emit("create-recipe", recipe);

      // Close the modal after emitting the event
      this.$refs.createModalRef.hide();
    },
  },
};
</script>

<style>
/* Add your modal styles here */
</style>
