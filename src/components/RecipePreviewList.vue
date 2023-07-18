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
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get("http://localhost:3000/recipes/random")
        console.log("################## im here")
        console.log(response)
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes)
        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
      // try {
      //   const response = await this.axios.get(
      //     this.$root.store.server_domain + "/recipes/random",
      //     // "https://test-for-3-2.herokuapp.com/recipes/random"
      //   );

      //   // console.log(response);
      //   const recipes = response.data.recipes;
      //   this.recipes = [];
      //   this.recipes.push(...recipes);
      //   // console.log(this.recipes);
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }
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
