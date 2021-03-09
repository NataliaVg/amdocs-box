<template>
    <v-main>
        <v-container>
         <v-row>
           <v-col cols="3">
             <v-sheet rounded="lg" color="white">
                <v-list shaped color="transparent" left dense>
                  <v-header class="pa-5">FEEDBACK TYPE</v-header>
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
            <v-sheet rounded="lg" color="white" class="mt-4">
                <v-list shaped color="transparent" left dense>
                  <v-header class="pa-5">AREA</v-header>
                  <v-divider class="my-2"></v-divider>

                  <v-list-item-group
                    v-model="selectedArea"
                    color="primary"
                  >
                  <v-list-item
                    v-for="(item, i) in itemsArea"
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

           <v-col>
              <v-sheet
              color = "white"
              min-height="70vh"
              rounded="lg"
            >
                <v-col
                >
                    <v-textarea
                    filled
                    autofocus
                    clearable
                    class="ma-1"
                    name="input-7-4"
                    label="My message"
                    rows="13"
                    >
                    </v-textarea>
                    <v-row justify="end">
                        <spacer/>
                    <v-checkbox
                        class="ma-5"
                        input-value="true"
                        value
                        label="Anonymous"
                        color="yellow"

                    ></v-checkbox>
                    </v-row>
                    <v-row justify="end">
                        <spacer/>

                        <v-btn
                            class="ma-4"
                            color="magenta"
                            dark
                        >
                        <v-icon left>
                            mdi-send
                        </v-icon>
                            send
                        </v-btn>
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
      { text: 'Complaint', icon: 'mdi-emoticon-confused-outline' },
      { text: 'Congratulation', icon: 'mdi-thumb-up-outline' },
      { text: 'Question', icon: 'mdi-help' },
      { text: 'Suggestion', icon: 'mdi-chat-outline' },
    ],
    selectedArea: 1,
    itemsArea: [
      { text: 'Human Resources', icon: 'mdi-human-greeting-proximity' },
      { text: 'Operations', icon: 'mdi-cog-outline' },
      { text: 'Facilities', icon: 'mdi-tools' },
      { text: 'Technology', icon: 'mdi-devices' },
    ],

  }),
};
</script>
