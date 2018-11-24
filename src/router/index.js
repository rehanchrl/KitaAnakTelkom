import Vue from 'vue';
import Router from 'vue-router';
import HomeComponents from '@/components/Home/HomeComponents';
import ContentComponents from '@/components/Content/ContentComponents';
import SubContentComponents from '@/components/SubContent/SubContentComponents';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeCompoenents',
      component: HomeComponents,
    },
    {
      path: '/content/x',
      name: 'ContentComponents',
      component: ContentComponents,
    },
    {
      path: '/content/x/sub-content',
      name: 'SubContents',
      component: SubContentComponents,
    },
  ],
});
