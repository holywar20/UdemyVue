import { createApp } from 'vue';

import App from "./App.vue";

// Compononents

import FriendDetail from './Components/FriendDetail.vue';

const app = createApp(App);

app.component('friend-contact' , FriendDetail );

app.mount('#app');
