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
                    v-model="selectedItem"
                    color="primary"
                  >
                  <v-list-item
                    v-for="(item, i) in items"
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
                    v-model="selectedItem"
                    color="primary"
                  >
                  <v-list-item
                    v-for="(item, i) in items"
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
    selectedItem: 1,
    items: [
      { text: 'Complaint', icon: 'mdi-emoticon-confused-outline' },
      { text: 'Congratulation', icon: 'mdi-thumb-up-outline' },
      { text: 'Question', icon: 'mdi-help' },
      { text: 'Suggestion', icon: 'mdi-chat-outline' },
    ],
  }),
};
</script>
