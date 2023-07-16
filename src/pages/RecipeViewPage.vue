<template>
  <div class="container recipe-details">
    <div v-if="recipe">
      <h2 class="mb-4">{{ recipe.title }}</h2>
      <div class="row">
        <div class="col-md-6">
          <img :src="recipe.image" :alt="recipe.title" class="recipe-image img-fluid mb-4">
        </div>
        <div class="col-md-6">
          <p class="mb-2">Ready in: {{ recipe.readyInMinutes }} minutes</p>
          <p class="mb-2">Popularity: {{ recipe.popularity }}</p>
          <p class="mb-2">Vegan: {{ recipe.vegan ? 'Yes' : 'No' }}</p>
          <p class="mb-2">Vegetarian: {{ recipe.vegetarian ? 'Yes' : 'No' }}</p>
          <p class="mb-2">Gluten-Free: {{ recipe.glutenFree ? 'Yes' : 'No' }}</p>
        </div>
      </div>

      <h3 class="mt-4">Ingredients</h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
      </ul>

      <h3 class="mt-4">Instructions</h3>
      <ol class="list-group">
        <li class="list-group-item" v-for="step in recipe.instruction" :key="step" v-html="removeStepNumbering(step)"></li>
      </ol>

      <h3 class="mt-4">Servings</h3>
      <p>{{ recipe.servings }}</p>
    </div>
    <div v-else>
      <p>Loading recipe...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  mounted() {
    this.created();
  },
  methods: {
    async created() {
    try {
      let response;
      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain + `/recipes/${this.$route.params.recipeId}`,
        );
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
      this.recipe = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  removeStepNumbering(step) {
      // Remove the step numbering from the instruction
      return step.replace(/^\d+\.\s*/, '');
    }
  }
  
};
</script>

<style scoped>
.recipe-details {
  max-width: 800px;
  margin: 0 auto;
}

.recipe-image {
  max-width: 100%;
  height: auto;
}

@media (max-width: 767.98px) {
  .recipe-image {
    max-width: 100%;
    height: auto;
  }
}
</style>
