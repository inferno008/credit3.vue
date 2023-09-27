<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/priceList">Price List</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/index">index</router-link>
    </nav>

    <!-- Router View -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
/* Style for the navigation bar */
.navbar {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

/* Style for the active router link */
.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>





