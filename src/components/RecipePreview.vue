<template>
  <div class="recipe-preview">
    <div
      class="recipe-image"
      :style="{ backgroundImage: `url(${recipe.image})` }"
      @mouseover="showImageTooltip = true"
      @mouseout="showImageTooltip = false"
      @click="addWatched"
    >
      <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" class="image-link"></router-link>
      <div class="overlay">
        <span class="tooltip" v-if="showImageTooltip">Click image to show recipe</span>
      </div>
      <div class="actions">
        <span
          class="icon-background"
          v-if="isWatched"
        ></span>
        <button
        class="watched-icon" v-if="isWatched"
        @mouseover="showWatchedTooltip = true"
        @mouseout="showWatchedTooltip = false"
        @mouseover.stop
        >
          <i :class="watchedIconClass"></i>
          <span class="tooltip" v-if="showWatchedTooltip">Has been watched</span>
        </button>
        <button
          class="favorite-icon"
          :class="{ active: isFavorited }"
          :disabled="isFavorited"
          @click.stop="toggleFavorite"
          @mouseover="showFavoriteTooltip = true"
          @mouseout="showFavoriteTooltip = false"
          @mouseover.stop
        >
          <i class="fas fa-heart"></i>
          <span class="tooltip" v-if="showFavoriteTooltip  && !isFavorited">Favorite</span>
        </button>
      </div>
    </div>
    <div class="recipe-details">
      <h3 class="recipe-title">{{ recipe.title }}</h3>
      <p class="recipe-time">Time: {{ recipe.readyInMinutes }} minutes</p>
      <div class="recipe-icons">
        <div class="recipe-icon">
          <i class="fas fa-fire"></i>
          <span class="icon-label">{{ recipe.popularity }}</span>
        </div>
        <div class="recipe-icon">
          <i class="fas fa-carrot"></i>
          <span class="icon-label" :class="{ active: recipe.vegan }">Vegan</span>
        </div>
        <div class="recipe-icon">
          <i class="fas fa-leaf"></i>
          <span class="icon-label" :class="{ active: recipe.vegetarian }">Vegetarian</span>
        </div>
        <div class="recipe-icon">
          <i class="fas fa-leaf"></i>
          <span class="icon-label" :class="{ active: recipe.glutenFree }">Gluten Free</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFavoriteTooltip: false,
      showImageTooltip: false,
      showWatchedTooltip: false,
      favoriteRecipes: [],
      isFavorited: false, // Intermediate data property
    };
  },
  mounted() {
    console.log("in mounted recipeid="+this.recipe.id);
    this.fetchPersonalRecipes(); // Fetch the favorite recipes on component creation
  },
  computed: {
    isWatched() {
      const clickedRecipes = JSON.parse(localStorage.getItem('clickedRecipes')) || [];
      return clickedRecipes.includes(this.recipe.id);
    },
    watchedIconClass() {
      return this.isWatched ? 'fas fa-eye' : 'far fa-eye';
    },
  },
  methods: {
    async fetchPersonalRecipes() {
      try {
        const res = await this.axios.get(this.$root.store.server_domain+"/users/favorites");
        this.favoriteRecipes = res.data;
        this.updateIsFavoritedValue(); // Call a method to update the intermediate data property
      } catch (error) {
        console.log("error in fetchPersonalRecipes="+error);
      }
    },
    updateIsFavoritedValue() {
      console.log("in updateIsFavorited before:"+this.isFavorited);
      this.isFavorited = this.favoriteRecipes.some((favorite) => favorite.id === this.recipe.id);
      console.log("in updateIsFavorited, updated to="+this.isFavorited);
    },
    async addWatched() {
      try {
        const response = await this.axios.post(this.$root.store.server_domain+"/users/last_seen", {
          recipeId: this.recipe.id
        });
        console.log(response.data); // Optional: Log the server's response
      } catch (error) {
        console.log(error);
      }
      // Local storage update (Optional)
      const clickedRecipes = JSON.parse(localStorage.getItem('clickedRecipes')) || [];
      if (!clickedRecipes.includes(this.recipe.id)) {
        clickedRecipes.push(this.recipe.id);
        localStorage.setItem('clickedRecipes', JSON.stringify(clickedRecipes));
      }
    },
    async toggleFavorite() {
      console.log("in toggleFavorite,isFavorited="+this.isFavorited);
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + '/users/favorites',
          { recipeId: this.recipe.id }
        );
        this.isFavorited = true;
      } catch (error) {
        console.error('Failed to mark recipe as favorite:', error);
      }
    },
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style scoped>
.recipe-preview {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
}

.recipe-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  transition: opacity 0.3s;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.recipe-preview:hover .overlay {
  opacity: 1;
}

.recipe-preview:hover .recipe-image {
  opacity: 0.8;
}

.tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  opacity: 0.8;
  white-space: nowrap;
}

.actions {
  position: relative;
  display: inline-block;
}

.watched-icon,
.favorite-icon {
  position: relative;
  z-index: 1;
  transition: transform 0.3s;
  border-radius: 50%; /* Added */
}

.favorite-icon.active {
  color: red;
}

.favorite-icon:hover {
  transform: scale(1.3);
  color: red;
}


.icon-background {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%; /* Updated */
  opacity: 0.5;
  z-index: -1;
}

.recipe-details {
  margin-top: 10px;
}

.recipe-title {
  margin: 0;
  font-size: 18px;
}

.recipe-time {
  font-size: 14px;
}

.recipe-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.recipe-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
}

.recipe-icon i {
  font-size: 18px;
}

.icon-label {
  font-size: 12px;
}

.icon-label.active {
  color: #42b983;
}

.image-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
