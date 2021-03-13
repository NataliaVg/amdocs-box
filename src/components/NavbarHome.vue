<template>
    <nav>
        <v-toolbar
        color="primary"
        flat
        app
        >
           <v-img

            max-height="50"
            max-width="150"
            contain
            src="../assets/whiteLogo.png"

        ></v-img>
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text dark>Home</v-btn>
        <v-btn text dark>Log in</v-btn>
        </v-toolbar>
    </nav>
</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ],
    };
  },
};
</script>
