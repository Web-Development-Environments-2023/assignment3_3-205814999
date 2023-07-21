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
            
            <!-- Personal dropdown menu -->
            <li v-else class="nav-item dropdown">
              <b-dropdown id="navbarDropdown" text="Personal" button-class="personal-dropdown-button">
                <router-link :to="{ name: 'favorites' }" class="dropdown-item">My Favorites</router-link>
                <b-dropdown-divider></b-dropdown-divider>
                <router-link :to="{ name: 'myrecipes' }" class="dropdown-item">My Recipes</router-link>
                <b-dropdown-divider></b-dropdown-divider>
                <router-link :to="{ name: 'family' }" class="dropdown-item">My Family Recipes</router-link>
                <b-dropdown-divider></b-dropdown-divider>
                <b-button v-b-modal.modal-prevent-closing class="create-recipe-button">Create Recipe</b-button>
              </b-dropdown>
            </li>

            <!-- Divider -->
           <b-nav-item v-if="$root.store.username" class="navbar-divider"></b-nav-item>

            <!-- User info and logout -->
            <li v-if="$root.store.username" class="nav-item user-info">
              <span class="navbar-text">Logged in as:{{ $root.store.username }}</span>
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
/* Global styles */
@import "@/scss/form-style.scss";

/* Divider styles */
/* Custom styles for the divider */
.navbar-divider {
  border-left: 1px solid #ddd;
  margin: 0;
  height: 100%;
}

/* Navbar styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
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

/* Personal dropdown button styles */
.personal-dropdown-button {
  font-weight: bold;
  color: #007bff;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
}

/* Style the dropdown arrow icon */
.personal-dropdown-button::after {
  content: "\f078";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-left: 5px;
}

/* Change the color of the dropdown arrow icon when the button is hovered */
.personal-dropdown-button:hover::after,
.personal-dropdown-button:focus::after {
  color: #0056b3;
}

/* Personal dropdown menu styles */
#navbarDropdown {
  font-weight: bold;
  color: #007bff;
}

.dropdown-item {
  font-weight: bold;
  color: #007bff;
  transition: background-color 0.2s; /* Add a smooth transition effect */
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: #cce5ff; /* Light blue background when hovering */
  color: #007bff; /* Keep the blue font color when hovering */
}

/* Create Recipe button styles */
.create-recipe-item {
  display: flex;
  align-items: center;
}

.create-recipe-button {
  font-weight: bold;
  color: #007bff;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s; /* Add a smooth transition effect */
}

.create-recipe-button:hover,
.create-recipe-button:focus {
  background-color: #cce5ff; /* Light blue background when hovering */
  color: #007bff; /* Keep the blue font color when hovering */
}

/* User info and logout styles */
.user-info {
  display: flex;
  align-items: center;
}

.user-info .navbar-text {
  font-weight: bold;
  color: #007bff;
}

.user-info button {
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
}

.user-info button:hover,
.user-info button:focus {
  background-color: #0056b3;
}

/* Logo styles */
.logo {
  font-weight: bold;
  color: #42b983;
  font-size: 24px;
}

/* Container styles */
.container {
  background-color: #f8f9fa;
  border-radius: 4px;
}
</style>

