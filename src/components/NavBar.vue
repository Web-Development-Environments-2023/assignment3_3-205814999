<template>
    
    <!-- <div id="nav">
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'test' }">Test</router-link>|
      {{ !$root.store.username }}
      <span v-if="!$root.store.username">
        Guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        {{ $root.store.username }}: <button @click="Logout">Logout</button>|
      </span>
    </div> -->
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
            <b-nav-item><router-link :to="{ name: 'main' }">Home</router-link></b-nav-item>
            <b-nav-item><router-link :to="{ name: 'search' }">Search</router-link></b-nav-item>
            <b-nav-item ><router-link :to="{ name: 'about' }">About</router-link></b-nav-item>

            <b-nav-item v-if="!$root.store.username">| Hello Guest! <router-link :to="{ name: 'register' }">Register</router-link></b-nav-item>
            <b-nav-item v-if="!$root.store.username"><router-link :to="{ name: 'login' }">Login</router-link></b-nav-item>
            <b-nav-item v-else>{{ $root.store.username }}: <button @click="Logout">Logout</button></b-nav-item>
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default{
        name: "NavBar",
        methods: {
            Logout() {
            this.$root.store.logout();
            this.$root.toast("Logout", "User logged out successfully", "success");

            this.$router.push("/").catch(() => {
                this.$forceUpdate();
            });
            }
  }
    };
</script>