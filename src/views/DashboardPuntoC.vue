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
                    <v-col cols="9">
                      <v-card
                       class="mx-auto"
                       content-class
                       loader-height
                        >
                        <v-card-text>
                          <div>Chart 1</div>
                          <p class="display-1 text--primary">
                            DATA 1
                          </p>
                          <div class="donut">
                            <GChart
                                type="PieChart"
                                :data="CasesType"
                                :options="CasesTypeOptions"
                                />
                          </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="3">
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
                    <v-col cols="12">
                      <v-card class="mx-auto">
                        <v-card-text>
                          <div>Chart 2</div>
                          <p class="display-1 text--primary">
                            DATA 2
                          </p>
                            <div id="barchart">
                            <GChart
                                type="BarChart"
                                :data="FeedbackDay"
                                :options="FeedbackDayOptions"
                                />
                          </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      </v-row>
                                          <v-row>
                    <v-col cols="12">
                      <v-card class="mx-auto">
                        <v-card-text>
                          <div>Chart 3</div>
                          <p class="display-1 text--primary">
                            DATA 3
                          </p>
                            <div>
                              <GChart
                                  type="LineChart"
                                  :data="CasesMonth"
                                  :options="CasesMonthOptions"
                                  />
                            </div>
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
    FeedbackDay: [
      ['Day', 'Cases'],
      ['Sun.', 0],
      ['Mon.', 1],
      ['Tues.', 5],
      ['Wed.', 7],
      ['Thurs.', 3],
      ['Fri.', 1],
      ['Sat.', 0],
    ],
    FeedbackDayOptions: {
      width: '100%',
      chart: {
        title: 'Feedback',
        subtitle: 'Subarea Cases / Day',
      },
      bars: 'horizontal',
      colors: ['#CA0088'],
    },
    CasesType: [
      ['Feedback Ttype', 'Cases'],
      ['Complaint', 1],
      ['Congratulation', 6],
      ['Question', 5],
      ['Suggestion', 3],
    ],
    CasesTypeOptions: {
      height: '400',
      width: '100%',
      pieHole: '0.4',
      chart: {
        title: 'Feedback Type',
      },
      colors: ['#FFBF3F', '#E8927C', '#DF1995', '#7969b0', '#92a1d3'],
    },
    CasesMonth: [
      ['Month', 'Complaint', 'Congratulation', 'Question', 'Suggestion'],
      ['01', 10, 11, 22, 15],
      ['02', 15, 2, 24, 37],
      ['03', 6, 11, 13, 42],
      ['04', 8, 14, 14, 23],
      ['05', 10, 14, 15, 22],
      ['06', 2, 10, 14, 21],
      ['07', 8, 25, 21, 11],
      ['08', 13, 13, 22, 10],
      ['09', 14, 12, 30, 31],
      ['10', 5, 15, 10, 4],
      ['11', 10, 3, 21, 42],
      ['12', 20, 40, 11, 32],
    ],
    CasesMonthOptions: {
      chart: {
        title: 'Feedback Type',
      },
      colors: ['#F8E08E', '#E6BAA8', '#DCB6C9', '#a69bca', '#c8d0e9'],
    },

  }),

};
</script>
<style>

</style>
