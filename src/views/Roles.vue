<template>
    <v-container class="mt-8">
        <v-row>
            <v-col>
                <v-card tile>
                    <v-card-title>
                        <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        flat
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="users"
                      :search="search"
                    >
                        <template v-slot:item.icon>
                            <v-icon class="ml-2">
                                mdi-account-circle
                            </v-icon>
                        </template>
                        <template v-slot:item.role="{ item }">
                            <v-select
                              :items="roleItems"
                              :value="item"
                              dense
                            ></v-select>
                        </template>
                        <template v-slot:item.area="{ item }">
                            <v-select
                              :items="areaItems"
                              :value="item"
                              dense
                            ></v-select>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      search: '',
      roleItems: ['General user', 'Area administrator', 'General administrator'],
      areaItems: ['Human Resources', 'Operations', 'Facilities', 'Technology'],
      headers: [
        { text: '', value: 'icon' },
        {
          text: 'Name',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'User Role', value: 'role' },
        { text: 'Area', value: 'area' },
      ],
      users: [
        {
          name: 'Lesa Cruz',
          email: 'lesa.cruz@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Herman Garrett',
          email: 'herman.garrett@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Denise Ward',
          email: 'denise.ward@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Alyssa Campbell',
          email: 'alyssa.campbell@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Christine Hopkins',
          email: 'christine.hopkins@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Tony Richardson',
          email: 'tony.richardson@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Jeanette Hicks',
          email: 'jeanette.hicks@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Alberto Boyd',
          email: 'alberto.boyd@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Ruby Simmmons',
          email: 'ruby.simmmons@example.com',
          role: '',
          area: '',
        },
        {
          name: 'Sherry Barrett',
          email: 'sherry.barrett@example.com',
          role: '',
          area: '',
        },
      ],
    };
  },
};
</script>
