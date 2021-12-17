<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!loggedIn">
      <span> To use this app you'll need to </span>
      <router-link to="/login">Login</router-link>
      <span> or </span>
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../vuex/helpers";

export default {
  computed: {
    ...authComputed,
  },
};
</script>
