import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#222035',
        background: '#333147',
        yellow: '#EAB330',
        coral: '#D5665F',
        magenta: '#CA0088',
        paper: '#B3B0C4',
        gray: '#E3E5E3',
      },
    },
  },
});
