<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
    <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
    {{ !$root.store.username }}
    <RecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div> -->
  </div>
</template>

<script>
// import { getRandomValues } from "crypto";
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  name: "MainPage",
  components: {
    RecipePreviewList,
  },
  // mounted(){
  //   this.getRandomValues();
  // },

  // methods: {
  //   async getRandomValues() {
  //     //"https://api.spoonacular.com/recipes/random"
  //     console.log("ll")
  //     try {
  //       console.log("hellooooooooooooo")
  //       const response = await this.axios.get("http://localhost:3000/recipes/random")
  //       console.log(response)
  //       const recipes = response.data;
  //       this.recipes = [];
  //       this.recipes.push(...recipes)
  //       console.log(this.recipes);
  //     } catch (error) {
  //       console.log(error);
  //     }
     
  //   },
  // },
  
};
</script>



<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
