<template>
  <v-container>
    <v-row class="justify-center mt-8">
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
                  MANAGE
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
      <v-col cols="9">
        <v-data-table
          :headers="headers"
          :items="subareas"
          sort-by="subarea"
          class="elevation-1"
          hide-default-footer
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>SUBAREAS</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-dialog
                v-model="dialog"
                max-width="500px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="magenta"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    New Subarea
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.name"
                            label="Subarea name"
                          ></v-text-field>
                        </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        >
                          <v-text-field
                          v-model="editedItem.area"
                          label="Area"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="magenta"
                      text
                      @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="magenta"
                      text
                      @click="save"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline">
                    Are you sure you want to delete this item?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="magenta" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="magenta" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              color="yellow"
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              color="yellow"
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn
              color="magenta"
              @click="initialize"
            >
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: [
      { text: 'Area', route: '/addarea' },
      { text: 'Subarea', route: '/addsubarea' },
    ],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Subarea',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Area', value: 'area' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    subareas: [],
    editedIndex: -1,
    editedItem: {
      name: '',
    },
    defaultItem: {
      name: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },

  watch: {
    /* eslint-disable */
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
      /* eslint-enable */
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.subareas = [
        {
          name: 'Subarea1',
          area: 'Technology',
        },
        {
          name: 'Subarea2',
          area: 'Technology',
        },
        {
          name: 'Subarea3',
          area: 'Technology',
        },
        {
          name: 'Subarea10',
          area: 'Operations',
        },
        {
          name: 'Subarea12',
          area: 'Facilites',
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.subareas.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.subareas.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.subareas.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.subareas[this.editedIndex], this.editedItem);
      } else {
        this.subareas.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
