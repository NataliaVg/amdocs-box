<template>
  <v-app id="app">
    <v-app-bar
      app
      color="primary"
      flat
    >
    <v-container class="py-0 fill-height">
    <v-spacer></v-spacer>

     <v-btn
      v-for="link in links"
      :key="link"
      text
      dark
      >
      {{ link.text }}
    </v-btn>
    </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      { text: 'Feedback', path: '/feedback' },
      { text: 'Inbox', path: '/feedback' },
      { text: 'Sign out', path: '/feedback' },
    ],
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   background-color: #333147;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
