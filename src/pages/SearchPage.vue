<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <br>
    <input type="text" placeholder="Search" v-model="searchbody">
    <button @click="search">Search</button>

    <div class="filters">
      <label for="maxResults">Max Results:</label>
      <select id="maxResults" v-model="maxResults">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>

      <label for="cuisine">Cuisine:</label>
      <select id="cuisine" v-model="cuisine">
        <option value="">No Filter</option>
        <option v-for="option in cuisineOptions" :value="option" :key="option">{{ option }}</option>
      </select>

      <label for="diet">Diet:</label>
      <select id="diet" v-model="diet">
        <option value="">No Filter</option>
        <option v-for="option in dietOptions" :value="option" :key="option">{{ option }}</option>
      </select>

      <label for="intolerance">Intolerance:</label>
      <select id="intolerance" v-model="intolerance">
        <option value="">No Filter</option>
        <option v-for="option in intoleranceOptions" :value="option" :key="option">{{ option }}</option>
      </select>
    </div>

    <div class="sorting">
      <label for="sorting">Sort By:</label>
      <select id="sorting" v-model="sortingOption" @change="sortRecipes">
        <option value="popularity">Popularity</option>
        <option value="makeTime">Make Time</option>
      </select>
    </div>

    <div v-if="loading" class="spinner">
      <i class="fas fa-spinner fa-spin"></i>
    </div>

    <b-row v-if="recipes.length > 0">
      <b-col v-for="r in sortedRecipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>

    <p v-else-if="searched && recipes.length === 0">No search results found.</p>

    <p v-else-if="lastSearch">Last search: {{ lastSearch }}</p>
  </div>
</template>

<script>
import RecipePreview from "@/components/RecipePreview";

export default {
  name: "Search",
  components: {
    RecipePreview,
  },
  data() {
    return {
      searchbody: "",
      maxResults: 5,
      cuisine: "",
      diet: "",
      intolerance: "",
      sortingOption: "popularity",
      searched: false,
      lastSearch: null,
      cuisineOptions: [
        "African",
        "Asian",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese"
      ],
      dietOptions: [
        "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"],
      intoleranceOptions: [
        "Dairy",
        "Egg",
        "Gluten",
        "Grain",
        "Peanut",
        "Seafood",
        "Sesame",
        "Shellfish",
        "Soy",
        "Sulfite",
        "Tree Nut",
        "Wheat"
      ],
      recipes: [],
      loading: false, // Loading state
    };
  },
  created() {
    this.loadLastSearch();
  },
  methods: {
    async search() {
      try {
        this.loading = true; // Set loading state to true
        const response = await this.axios.post("http://localhost:3000/recipes/search", {
          search: this.searchbody,
          limit: this.maxResults,
          cuisine: this.cuisine,
          diet: this.diet,
          intolerance: this.intolerance,
        });

        if (response && response.data) {
          this.recipes = response.data;
          this.searched = true;
          this.saveLastSearch();
        } else {
          throw new Error("Invalid response from the server");
        }
      } catch (err) {
        console.log(err);
        // Handle the error or display an appropriate message
      }finally {
        this.loading = false; // Set loading state to false when search is completed
      }
    },
    loadLastSearch() {
      // Load the last search from localStorage
      const lastSearch = localStorage.getItem("lastSearch");
      if (lastSearch) {
        this.lastSearch = lastSearch;
      }
    },
    saveLastSearch() {
      // Save the last search to localStorage
      this.lastSearch = this.searchbody;
      localStorage.setItem("lastSearch", this.searchbody);
    },
    sortRecipes() {
      if (this.sortingOption === "popularity") {
        this.recipes.sort((a, b) => b.popularity - a.popularity);
      } else if (this.sortingOption === "makeTime") {
        this.recipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
      }
    },
  },
  computed: {
    sortedRecipes() {
      return this.recipes;
    },
  },
};
</script>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.fa-spinner {
  animation: fa-spin 2s infinite linear;
  font-size: 80px;
}

@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.title {
  margin: 20px 0;
  font-size: 30px;
  text-align: center;
}

.filters {
  margin: 20px 0;
}

.filters label {
  margin-right: 10px;
}

.filters select {
  margin-right: 20px;
}

.sorting {
  margin: 20px 0;
}

.sorting label {
  margin-right: 10px;
}

.sorting select {
  margin-right: 20px;
}

.recipePreview {
  margin-top: 20px;
}
</style>
