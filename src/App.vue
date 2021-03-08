<template>
  <v-app>
    <NavbarHome />
    <v-content class="background">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import NavbarHome from './components/NavbarHome.vue';

export default ({
  name: 'App',
  components: { NavbarHome },

  data: () => ({
    //
  }),
});
</script>
