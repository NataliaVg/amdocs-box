<template>
    <v-container>
      <main>
        <v-row justify="center">
          <spacer/>
            <v-sheet
              class="py-15 ma-16"
              color = "white"
              min-height="70vh"
              min-width="90vh"
              rounded="lg"
            >
          <v-row justify="center">
            <spacer/>
            <v-img
              :src="require('../assets/amdocsLogo.png')"
              max-height="206"
              max-width="250"
              alt="Amdocs logo"
            ></v-img>
          </v-row>

          <v-row justify="center">
            <v-col
              cols ="12"
              offset="2">
              <v-form v-model="valid">
                  <v-col
                    cols="10"
                  >
                    <v-text-field
                      v-model="Username"
                      :rules="usernameRules"
                      label="Username"
                      required
                      full-width

                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="10"
                  >
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      type="password"
                      label="Password"
                      required
                      full-width
                    ></v-text-field>
                  </v-col>
            </v-form>
            </v-col>
          </v-row>
          <v-row justify="center">
            <spacer/>
            <v-col
              cols ="3"
              offset="8"
              >
            <v-btn
              color="magenta"
              dark
              rout to="/feedback"
            >
            <v-icon left>
              mdi-pencil
            </v-icon>
              Log In
            </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
        </v-row>
      </main>
    </v-container>
</template>

<script>

export default {
  name: 'LogIn',
};
</script>
