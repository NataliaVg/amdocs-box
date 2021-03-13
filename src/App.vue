<template>
  <v-app id="app">
    <v-app-bar
      app
      color="primary"
      flat
    >
    <v-container class="py-0 fill-height">
     <v-img
        class="mx-2"
        :src="require('@/assets/whiteLogo.png')"
        max-height="50"
        max-width="150"
        contain
      ></v-img>
    <v-spacer></v-spacer>

     <v-btn
     class="hidden-sm-and-down"
      v-for="link in linksAdmin"
      :key="link"
      router :to="link.path"
      text
      dark
      >
      {{ link.text }}
    </v-btn>
    <v-btn
      class="hidden-md-and-up"
      router to="/login"
      text
      dark
      >
      Log in
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
    linksGeneral: [
      { text: 'Feedback', path: '/feedback' },
      { text: 'Inbox', path: '/inbox' },
      { text: 'Sign out', path: '/' },
    ],
    linksArea: [
      { text: 'Feedback', path: '/feedback' },
      { text: 'Inbox', path: '/inbox' },
      { text: 'Case Managment', path: '/casem' },
      { text: 'Dashboard', path: '/dashboard' },
      { text: 'Sign out', path: '/' },
    ],
    linksAdmin: [
      { text: 'Feedback', path: '/feedback' },
      { text: 'Inbox', path: '/inbox' },
      { text: 'Dashboard', path: '/dashboard' },
      { text: 'User role', path: '/roles' },
      { text: 'Sign out', path: '/' },
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
