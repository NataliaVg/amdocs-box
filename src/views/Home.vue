<template>
  <div class="home">
        <v-row
        no-gutters
        >
            <v-col
                cols="12"
                md="6"
                align="center"
                class="gradient-background"
            >
                <v-row
                    class="fill-height white--text"
                    justify="center"
                >
                    <v-col
                        cols="12"
                    >
                    </v-col>
                    <v-col
                      class="mb-10"
                      cols="6"
                      md="6"
                    >
                        <h1>Let's communicate!</h1>
                        <p class="pa-5">
                        Lorem ipsum dolor sit amet, consectetur ad
                        ipiscin elit. Etiam vulputate augue vel felis gra
                        vida porta. Lorem ipsum dolor sit amet, cons
                        ectetur adipiscing elit.<br>
                        Lorem ipsum dolor sit amet, consectetur ad
                        ipiscin elit. Etiam vulputate augue vel felis gra
                        vida porta. Lorem ipsum dolor sit amet, cons
                        ectetur adipiscing elit.
                        </p>
                        <v-btn
                            x-large
                            rounded
                            router to="/login"
                        >
                        Log in
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                cols="12"
                md="6">
                <v-img
                    :src="require('../assets/landing1.jpg')"
                    height="100vh"
                ></v-img>
            </v-col>
        </v-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>
<style>
.gradient-background {
    background-image: linear-gradient(to right, #D5665F, transparent);
}
</style>
