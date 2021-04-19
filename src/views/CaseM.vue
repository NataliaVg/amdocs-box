<template>
    <div class="inbox">
        <v-container class="top">
            <v-row justify="end">
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
                  cols="9"
                >
                  <template>
                    <v-data-table
                      :headers="headers"
                      :items="subareas"
                      class="table elevation-1 mb-10"
                      hide-default-footer
                      rounded="lg"
                    >
                    </v-data-table>
                  </template>

                  <template>
                    <v-data-table
                      :headers="headers2"
                      :items="status2"
                      class="table elevation-1 mb-10"
                      hide-default-footer
                    >
                    </v-data-table>
                  </template>

                  <template>
                    <v-data-table
                      :headers="headers3"
                      :items="status3"
                      class="table elevation-1"
                      hide-default-footer
                    >
                    </v-data-table>
                  </template>
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
      headers: [
        {
          text: 'Area',
          align: 'start',
          value: 'name',
        },
        { text: 'Number of cases', value: 'ncases' },
      ],
      subareas: [
        { name: 'Human Resources', ncases: 35 },
        { name: 'sub2', ncases: 22 },
        { name: 'sub3', ncases: 7 },
        { name: 'sub4', ncases: 32 },
        { name: 'sub5', ncases: 16 },
      ],
      headers2: [
        {
          text: 'Status',
          align: 'start',
          value: 'name',
        },
        { text: 'Number of cases', value: 'ncases' },
      ],
      status2: [
        { name: 'Open', ncases: 23 },
        { name: 'In progress', ncases: 30 },
        { name: 'Closed', ncases: 40 },
      ],
      headers3: [
        {
          text: 'Subarea',
          align: 'start',
          value: 'name',
        },
        { text: 'Open', value: 'open' },
        { text: 'On going', value: 'going' },
        { text: 'Closed', value: 'closed' },
      ],
      status3: [
        {
          name: 'sub1', open: 10, going: 4, closed: 21,
        },
        {
          name: 'sub2', open: 13, going: 13, closed: 24,
        },
        {
          name: 'sub3', open: 45, going: 26, closed: 41,
        },
        {
          name: 'sub4', open: 61, going: 14, closed: 4,
        },
        {
          name: 'sub5', open: 13, going: 8, closed: 2,
        },
      ],
    };
  },
};
</script>

<style>
.top {
  margin-top: 94px;
}
.table table thead tr th {
  background: #E3E5E3;
}
</style>
