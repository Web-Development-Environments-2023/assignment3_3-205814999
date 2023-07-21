<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link :to="{ name: 'main' }" class="navbar-brand logo">Main Page</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'search' }" class="nav-link">Search</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
            </li>
            <li v-if="!$root.store.username" class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
            </li>
            <li v-if="!$root.store.username" class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
            </li>
            <li v-else class="nav-item dropdown">
              <b-dropdown id="navbarDropdown" text="Personal" toggle-class="nav-link">
              <router-link :to="{ name: 'favorites' }" class="dropdown-item">My Favorites</router-link>
              <b-dropdown-divider></b-dropdown-divider>
              <router-link :to="{ name: 'myrecipes' }" class="dropdown-item">My Recipes</router-link>
              <b-dropdown-divider></b-dropdown-divider>
              <router-link :to="{ name: 'family' }" class="dropdown-item">My Family Recipes</router-link>
            </b-dropdown>
            </li>
            <li v-if="$root.store.username" class="nav-item">
              <b-button v-b-modal.modal-prevent-closing>Create Recipe</b-button>
            </li>
            <li v-if="$root.store.username" class="nav-item">
              <span class="navbar-text">
                {{ $root.store.username }}
              </span>
              <button class="btn btn-primary ml-2" @click="logout">Logout</button>
            </li>
          </ul>
        </div>
        <RecipeModal></RecipeModal>
      </div>
    </nav>

    <div class="container py-4">
      <router-view />
    </div>
  </div>
  
</template>

<script>
import RecipeModal from "./components/RecipeModal.vue"
export default {
  name: "App",
  components: {
    RecipeModal,
  },
  data() {
    return {
    };
  },
  methods: {
    logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#navbarDropdown {
  background: transparent;
  color: #cf0e0e;
  font-weight: bold;
  padding: 0;
}

.logo {
  font-weight: bold;
  color: #42b983;
  font-size: 24px;
  padding: 0;
}

.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-weight: bold;
  color: #42b983;
}

.navbar-nav .nav-link {
  font-weight: bold;
  color: #2c3e50;
}

.nav-link:hover,
.nav-link:focus {
  color: #42b983;
}

.navbar-text {
  font-weight: bold;
  color: #2c3e50;
}

.btn-primary {
  background-color: #42b983;
  border-color: #42b983;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #2a946a;
  border-color: #2a946a;
}

.container {
  background-color: #f8f9fa;
  border-radius: 4px;
}

.dropdown-toggle {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

.dropdown-toggle:hover {
  text-decoration: underline;
}

#navbarDropDrown{
  
}
</style>
