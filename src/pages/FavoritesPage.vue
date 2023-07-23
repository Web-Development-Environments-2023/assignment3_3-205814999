<template>
    <div class="container">
      <b-container fluid>
        <!-- <h1 class="title">Main Page</h1> -->
        <b-row>
          <b-col v-if="$root.store.username">
            <RecipePreviewList
              v-if="personalRecipes.length > 0"
              title="Favorite Recipes"
              :recipes="personalRecipes"
            />
            <div v-else>
              <!-- Show a message when there are no last watched recipes -->
              <p>No Favorite recipes available.</p>
            </div>
          </b-col>
  
        </b-row>
      </b-container>
  
      <!-- <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link> -->
  
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
    data() {
      return {
        personalRecipes: [],
      };
    },
    async mounted() {
      this.updateRecipes();
    },
  
    methods: {
      async updateRecipes() {
        try {
          if (this.$root.store.username) {
            const res = await this.axios.get(this.$root.store.server_domain+"/users/favorites"); 
            this.personalRecipes = res.data;
          }
        } catch (error) {
          console.log(error);
        }
      },
  
    },
    
  };
  </script>
  
  
  
  <style lang="scss" scoped>
  </style>
  