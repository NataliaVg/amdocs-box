<template>
    <div class="area">
        <v-container class="mt-8">
            <v-row>
                <v-col cols="3">
                </v-col>
                <v-col
                  cols="9"
                  sm="12"
                  md="9"
                >
                        <v-autocomplete
                        v-model="values"
                        :items="status"
                        outlined
                        dense
                        chips
                        small-chips
                        label="Status filter"
                        multiple
                        dark
                        filled
                    ></v-autocomplete>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="mt-n7">
            <v-row>
                <v-col
                  class="wrap hidden-sm-and-down"
                  md="3"
                >
                    <v-sheet
                      class="status text-no-wrap"
                      rounded="lg"
                      color="white"
                    >
                        <v-list
                          shaped
                          color="transparent"
                          left
                          dense
                        >
                            <v-header class="pa-5">
                            CASES
                            </v-header>
                            <v-divider class="my-2"></v-divider>

                            <v-list-item-group
                              v-model="selectedItem"
                              color="primary"
                            >
                                <v-list-item
                                  v-for="link in links"
                                  :key="link.text" router
                                  :to="link.route"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title>
                                        {{ link.text }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-sheet>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="9"
                >
                    <div
                      v-for="card in cards"
                      :key="card"
                    >
                        <v-card
                          class="mb-5"
                          elevation="3"
                          rounded="lg"
                        >
                            <v-subheader>
                                {{ card.date }}
                            </v-subheader>
                            <v-card-title>
                                Case: {{ card.caseID }}
                            </v-card-title>
                            <v-card-subtitle>
                                Subarea: {{ card.subarea }} <br>
                                Feedback type: {{ card.feedbackType }}
                            </v-card-subtitle>
                            <v-card-text>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Placeat amet cupiditate laudantium perferendis dicta culpa
                              modi repudiandae asperiores veritatis hic quam tenetur voluptates
                              facilis expedita, molestias aut, aliquid tempore alias.
                                <v-textarea
                                  class="mt-4"
                                  filled
                                  clear-icon="mdi-close-circle"
                                  auto-grow
                                  label="My reply"
                                ></v-textarea>
                            </v-card-text>
                            <v-card-actions class="justify-end mt-n7">
                                <v-col cols="3 mb-n8 mr-1">
                                    <v-select
                                      :items="status"
                                      label="Status"
                                      outlined
                                    ></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn
                                        color="magenta"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon left>
                                        mdi-send
                                        </v-icon>
                                    Reply
                                    </v-btn>
                                </v-col>
                                <v-col cols="3 mr-1">
                                    <v-btn
                                      class=""
                                      color="magenta"
                                      dark
                                    >
                                        <v-icon>
                                            mdi-email
                                        </v-icon>
                                     Send feedback
                                    </v-btn>
                                </v-col>
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'Inbox',
  data() {
    return {
      status: ['Open', 'On going', 'Closed'],
      drawer: true,
      links: [
        {
          text: 'General', route: '/casem',
        },
        {
          text: 'Area', route: '/area',
        },
        {
          text: 'Subarea 1', route: '/sub1',
        },
        {
          text: 'Subarea 2', route: '/sub2',
        },
        {
          text: 'Subarea 3', route: '/sub3',
        },
      ],
      cards: [
        {
          date: '22:22 Today', caseID: '5', area: 'Operations', subarea: 'subarea5', feedbackType: 'Complaint',
        },
        {
          date: '9:04 Yesterday', caseID: '4', area: 'Facilites', subarea: 'subarea4', feedbackType: 'Question',
        },
        {
          date: '12:00 3/8/2021', caseID: '3', area: 'Technology', subarea: 'subarea3', feedbackType: 'Suggestion',
        },
        {
          date: '15:31 3/7/2021', caseID: '2', area: 'Human Resources', subarea: 'subarea2', feedbackType: 'Congratulation',
        },
        {
          date: '11:55 3/6/2021', caseID: '1', area: 'Operations', subarea: 'subarea1', feedbackType: 'Complaint',
        },
      ],
    };
  },
};
</script>
