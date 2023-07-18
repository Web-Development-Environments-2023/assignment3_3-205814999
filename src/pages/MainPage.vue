<template>
  <div class="container">
    <b-container fluid>
      <!-- <h1 class="title">Main Page</h1> -->
      <b-row>
        <b-col>
          <RecipePreviewList title="Randomm Recipes" class="RandomRecipes center" />
        </b-col>
        <b-col v-if="$root.store.username">
          <RecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: $root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList>
        </b-col>
        <b-col v-else>
          <LoginPage></LoginPage>
        </b-col>
      </b-row>
    </b-container>

    <!-- <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link> -->

  </div>
</template>

<script>
// import { getRandomValues } from "crypto";
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "./LoginPage.vue"
export default {
  name: "MainPage",
  components: {
    RecipePreviewList,
    LoginPage
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
