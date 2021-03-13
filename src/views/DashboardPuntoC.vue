<template>
    <v-main>
        <v-container>
         <v-row>
           <v-col cols="3">
             <v-sheet rounded="lg" color="white">
                <v-list shaped color="transparent" left dense>
                  <v-header class="pa-5">DATA</v-header>
                  <v-divider class="my-2"></v-divider>

                  <v-list-item-group
                    v-model="selectedFeedback"
                    color="primary"
                  >
                  <v-list-item
                    v-for="(item, i) in itemsFeedback"
                    :key="i"
                  >
                  <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                  </v-list-item>
                  </v-list-item-group>
              </v-list>
             </v-sheet>
           </v-col>

           <v-col cols="9">
              <v-sheet
              color = "white"
              min-height="70vh"
              rounded="lg"
            >
                <v-col>
                  <v-row justify="start">
                    <v-col cols="6">
                      <v-card
                       class="mx-auto"
                       content-class
                       loader-height
                        >
                        <v-card-text>
                          <div>Bar chart</div>
                          <p class="display-1 text--primary">
                            DATA 1
                          </p>
                          <v-img
                            :src="require('../assets/Line-graph.png')"
                            alt="Bar char"
                            contain
                            max-height="250"
                            ></v-img>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="6">
                          <v-card
                       class="mx-auto ma-3"
                       content-class
                       loader-height
                       max-height="90"
                       color="coral"
                        >
                        <v-card-text>
                          <div>Open</div>
                          <p class="display-1 center">
                            5
                          </p>
                          </v-card-text>
                        </v-card>
                          <v-card
                       class="mx-auto ma-3"
                       content-class
                       loader-height
                       max-height="90"
                       color="yellow"
                        >
                        <v-card-text>
                          <div>In progress</div>
                          <p class="display-1">
                            4
                          </p>
                          </v-card-text>
                        </v-card>
                          <v-card
                       class="mx-auto ma-3"
                       content-class
                       loader-height
                       max-height="90"
                       color="gray"
                        >
                        <v-card-text>
                          <div>Closed</div>
                          <p class="display-1">
                            3
                          </p>
                          </v-card-text>
                        </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                    <v-col cols="6">
                      <v-card class="mx-auto">
                        <v-card-text>
                          <div>Donut chart</div>
                          <p class="display-1 text--primary">
                            DATA 2
                          </p>
                          <v-img
                            :src="require('../assets/donut-chart.png')"
                            alt="Donut chart"
                            contain
                            max-height="250"
                            ></v-img>
                          </v-card-text>
                        </v-card>
                      </v-col>

                      <v-col cols="6">
                      <v-card class="mx-auto">
                        <v-card-text>
                          <div>Bar chart</div>
                          <p class="display-1 text--primary">
                            DATA 3
                          </p>
                          <v-img
                            :src="require('../assets/pie-chart.png')"
                            alt="Pie chart"
                            contain
                            max-height="250"
                            ></v-img>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      </v-row>

                </v-col>
            </v-sheet>
          </v-col>
         </v-row>
       </v-container>
    </v-main>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Feedback',
      'Inbox',
      'Sign out',
    ],
    selectedFeedback: 1,
    itemsFeedback: [
      { text: 'Charts', icon: 'mdi-chart-bar' },
      { text: 'Tables', icon: 'mdi-file-table-outline' },
    ],
  }),
};
</script>
