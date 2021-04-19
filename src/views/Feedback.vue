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
                            <v-list-group
                                :value="false"
                                prepend-icon="mdi-human-greeting-proximity"
                            >
                                <template v-slot:activator>
                                    <v-list-item-title>Human Resources</v-list-item-title>
                                </template>

                            <v-list-item-group
                                v-model="selectedHumanResources"
                                color="primary"
                            >
                                <v-list-item
                                    v-for="(item, i) in itemsHumanResources"
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
                        </v-list-group>
                        <v-list-group
                                :value="false"
                                prepend-icon="mdi-cog-outline"
                            >
                                <template v-slot:activator>
                                    <v-list-item-title>Operations</v-list-item-title>
                                </template>

                            <v-list-item-group
                                v-model="selectedOperations"
                                color="primary"
                            >
                                <v-list-item
                                    v-for="(item, i) in itemsOperations"
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
                        </v-list-group>
                        <v-list-group
                                :value="false"
                                prepend-icon="mdi-tools"
                            >
                                <template v-slot:activator>
                                    <v-list-item-title>Facilities</v-list-item-title>
                                </template>

                            <v-list-item-group
                                v-model="selectedFacilities"
                                color="primary"
                            >
                                <v-list-item
                                    v-for="(item, i) in itemsFacilities"
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
                        </v-list-group>
                        <v-list-group
                                :value="false"
                                prepend-icon="mdi-devices"
                            >
                                <template v-slot:activator>
                                    <v-list-item-title>Technology</v-list-item-title>
                                </template>

                            <v-list-item-group
                                v-model="selectedTechnology"
                                color="primary"
                            >
                                <v-list-item
                                    v-for="(item, i) in itemsTechnology"
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
                        </v-list-group>

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
                    <v-dialog
                        v-model="dialog"
                        width="500"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                class="ma-4"
                                color="magenta"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                            <v-icon left>
                                mdi-send
                            </v-icon>
                                send
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline grey lighten-2">
                            Message sent
                            </v-card-title>
                        </v-card>
                        </v-dialog>
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
    dialog: false,
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
    selectedHumanResources: 1,
    itemsHumanResources: [
      { text: 'Subarea 1' },
      { text: 'Subarea 2' },
      { text: 'Subarea 3' },
    ],
    selectedOperations: 1,
    itemsOperations: [
      { text: 'Subarea 1' },
      { text: 'Subarea 2' },
      { text: 'Subarea 3' },
    ],
    selectedFacilities: 1,
    itemsFacilities: [
      { text: 'Subarea 1' },
      { text: 'Subarea 2' },
      { text: 'Subarea 3' },
    ],
    selectedTechnology: 1,
    itemsTechnology: [
      { text: 'Subarea 1' },
      { text: 'Subarea 2' },
      { text: 'Subarea 3' },
    ],
  }),
};
</script>
