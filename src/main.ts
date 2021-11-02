import '@/styles/index.scss';
import './registerServiceWorker';

import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from './App.vue';
import router from './router';
import apolloClient from './graphql';

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .use(router)
  .mount('#app');
