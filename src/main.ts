import './assets/main.css';
import pt from './i18n/pt.json';
import en from './i18n/en.json';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  MdClose,
  BiSearch,
  LaFilterSolid,
  BiChevronDown,
  HiCheck,
  BiBookmarkHeart,
  BiBookmarkHeartFill,
  MdLanguageOutlined,
} from 'oh-vue-icons/icons';

addIcons(
  MdClose,
  BiSearch,
  LaFilterSolid,
  BiChevronDown,
  HiCheck,
  BiBookmarkHeart,
  BiBookmarkHeartFill,
  MdLanguageOutlined,
);

import App from './App.vue';
import router from './router';

export const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt,
    en,
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.component('v-icon', OhVueIcon);

app.mount('#app');
