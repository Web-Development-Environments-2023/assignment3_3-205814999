<template>
  <div>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div>
      <div v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    recipes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.card-group-container {
  display: flex;
  flex-wrap: wrap;
}

.card-wrapper {
  flex-basis: calc(33.33% - 20px); /* Adjust the flex-basis and margin as needed */
  margin: 10px; /* Adjust the margin as needed */
}
</style>
