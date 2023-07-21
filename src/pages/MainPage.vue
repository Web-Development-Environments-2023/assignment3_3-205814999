<template>
  <div class="container">
    <b-container fluid>
      <!-- <h1 class="title">Main Page</h1> -->
      <b-row>
        <b-col>
          <RecipePreviewList
            title="Random Recipes"
            :recipes="randomRecipes"
            class="RandomRecipes center"
          />
        </b-col>
        <b-col v-if="$root.store.username">
          <RecipePreviewList
            v-if="lastWatchedRecipes.length > 0"
            title="Last Watched Recipes"
            :recipes="lastWatchedRecipes"
            :class="{
              RandomRecipes: true,
              blur: $root.store.username,
              center: true
            }"
          />
          <div v-else>
            <!-- Show a message when there are no last watched recipes -->
            <p>No last watched recipes available.</p>
          </div>
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
  data() {
    return {
      randomRecipes: [],
      lastWatchedRecipes: [],
    };
  },
  async mounted() {
    this.updateRecipes();
  },

  methods: {
    async updateRecipes() {
      try {
        const randomResponse = await this.axios.get("http://localhost:3000/recipes/random");
        const randomRecipes = randomResponse.data;

        this.randomRecipes = randomRecipes;

        if (this.$root.store.username) {
          // If the user is logged in, fetch last watched recipes
          const watchedResponse = await this.axios.get("http://localhost:3000/user/last_seen");
          const watchedRecipes = watchedResponse.data;
          this.lastWatchedRecipes = watchedRecipes;
        }
      } catch (error) {
        console.log(error);
      }
    },

  },
  
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
