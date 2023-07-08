<template>
  <div class="container">
    <h1 class="title">Search Page</h1><br>
    <input type="text" placeholder="Search" v-model="searchbody">
    <button v-on:click="search"> search </button>
    <b-row>
      <b-col v-for=" r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import RecipePreview from "@/components/RecipePreview";
   // Import the RecipePreview component
  export default{
    name: "search",
    components: {
    RecipePreview
  },
    data(){
      return{
        searchbody: "",
        recipes:[]
      }
    },
    methods:{
      async search(){
        try {
    const response = await this.axios.post(
      "http://localhost:3000/recipes/search",
      {
        search: this.searchbody,
        limit: 5,
        cuisine : "",
        diet : "",
        intolerance : ""
      }
    );
    
    if (response && response.data) {
      const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes)
    } else {
      // Invalid response or missing data property
      throw new Error("Invalid response from the server");
    }
  } catch (err) {
    console.log(err);
    this.form.submitError = err.message || "Registration failed";
  }
      }
    }
  }
</script>

<style>
</style>


