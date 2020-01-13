import Vue from 'vue'
import globalComponents from './globalComponents';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import VueLazyload from 'vue-lazyload'
import VueSpinners from 'vue-spinners'

locale.use(lang);

export default () => {
  Vue.use(globalComponents);
  Vue.use(VueSpinners);
  Vue.use(VueLazyload, {
    observer: true,
    // optional
    observerOptions: {
      rootMargin: '0px',
      threshold: 0.1
    }
  });
}
