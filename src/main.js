import { createApp } from 'vue';
import App from './App.vue';
import { VuesticPlugin } from 'vuestic-ui';
import 'vuestic-ui/dist/vuestic-ui.css';

createApp(App)
  .use(VuesticPlugin, {
    colors: {
      primary: '#4059AD',
      second: '#6B9AC4',
      third: '#97D8C4',
      fourth: '#EFF2F1',
      fifth: '#F4B942',
    },
  })
  .mount('#app');
