<template>
    <div class="inbox">
        <v-container
        class="pt-10"
        >
            <v-row>
                <v-col
                class="wrap"
                cols="3"
                >
                    <v-sheet
                    class="status text-no-wrap hidden-sm-and-down"
                    rounded="lg"
                    color="white"
                    >
                        <v-list
                        shaped
                        color="transparent"
                        left
                        dense
                        >
                            <v-header
                            class="pa-5"
                            >
                            CASE STATUS
                            </v-header>
                            <v-divider
                            class="my-2"
                            ></v-divider>

                            <v-list-item-group
                                v-model="selectedItem"
                                color="primary"
                            >
                                <v-list-item
                                v-for="link in links"
                                :key="link.text" router
                                :to="link.route"
                                >
                                    <v-list-item-icon>
                                        <v-icon
                                        :color="link.colorC"
                                        >
                                        mdi-circle
                                        </v-icon>
                                    </v-list-item-icon>
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
                                Area: {{ card.area }}
                            </v-card-subtitle>
                            <v-card-text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                Placeat amet cupiditate laudantium perferendis dicta
                                modi repudiandae asperiores veritatis hic quam tenetur
                                facilis expedita, molestias aut, aliquid tempore.
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn
                                @click="card.show = !card.show"
                                class="ma-4"
                                color="magenta"
                                dark
                                >
                                <v-icon left>
                                mdi-message
                                </v-icon>
                                My message
                                </v-btn>
                            </v-card-actions>
                            <v-expand-transition>
                                <div
                                v-show="card.show"
                                >
                                    <v-divider></v-divider>

                                    <v-subheader>
                                        {{ card.feedbackDate }}
                                    </v-subheader>
                                    <v-card-title>
                                        Feedback:
                                    </v-card-title>
                                    <v-card-subtitle>
                                        Feedback type: {{ card.feedbackType }}
                                    </v-card-subtitle>
                                    <v-card-text>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        Placeat amet cupiditate laudantium perferendis dicta
                                        modi repudiandae asperiores veritatis hic quam
                                        voluptates facilis expedita, molestias aut, aliquid
                                        alias.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
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
      drawer: true,
      links: [
        {
          colorC: 'coral', text: 'Open', route: '/inbox',
        },
        {
          colorC: 'yellow', text: 'In progress', route: '/progress',
        },
        {
          colorC: 'grey', text: 'Closed', route: '/closed',
        },
      ],
      cards: [
        {
          date: '22:22 Today', caseID: '1', area: 'Operations', feedbackDate: '8:00 3/6/2021', feedbackType: 'Complaint', show: false,
        },
        {
          date: '9:04 Yesterday', caseID: '2', area: 'Facilites', feedbackDate: '7:48 Yesterday', feedbackType: 'Question', show: false,
        },
        {
          date: '12:00 3/8/2021', caseID: '3', area: 'Technology', feedbackDate: '16:20 3/7/2021', feedbackType: 'Suggestion', show: false,
        },
        {
          date: '15:31 3/7/2021', caseID: '4', area: 'Human Resources', feedbackDate: '12:09 3/6/2021', feedbackType: 'Congratulation', show: false,
        },
        {
          date: '11:55 3/6/2021', caseID: '5', area: 'Operations', feedbackDate: '18:56 3/5/2021', feedbackType: 'Complaint', show: false,
        },
      ],
    };
  },
};

</script>

<style>
.status {
    position: fixed;
    width: 17%;
}
</style>
