import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import play from "../components/play";
import app_2 from "../components/app-2";
import app_3 from '../components/app-3';
import app_for from '../components/app-for';
import app_on from '../components/app-on';
import app_input from '../components/vue-input';
import new_dome from '../components/newDome';
import input_1 from '../components/input1';
import app_textarea from '../components/app-textarea';
import app_checkbox from '../components/app-checkbox';
import app_radio from '../components/app-radio';
import app_select from '../components/app-select';
import app_select_for from '../components/app-select-for';
import link_value from '../components/link-value';
import app_button from '../components/app-button';
import use_vue from '../components/use-vue';
import to_other_page from '../components/to-other-page';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/play',
      name: 'play',
      component: play
    },
    {
      path: '/play1/:id',
      name: 'play1',
      component: play
    },
    {
      path: '/app-2',
      name: 'app_2',
      component: app_2
    },
    {
      path: '/app-3',
      name: 'app-3',
      component: app_3
    },
    {
      path: '/app-for',
      name: 'app-for',
      component: app_for
    },
    {
      path: '/app-on',
      name: 'app-on',
      component: app_on
    },
    {
      path: '/app-input',
      name: 'app-input',
      component: app_input
    },
    {
      path: '/new-dome',
      name: 'new-dome',
      component: new_dome
    },
    {
      path: '/input-1',
      name: 'input-1',
      component: input_1
    },
    {
      path: '/app-textarea',
      name: 'app-textarea',
      component: app_textarea
    },
    {
      path: '/app-checkbox',
      name: 'app-checkbox',
      component: app_checkbox
    },
    {
      path: '/app-radio',
      name: 'app-radio',
      component: app_radio
    },
    {
      path: '/app-select',
      name: 'app-select',
      component: app_select
    },
    {
      path: '/app-select-for',
      name: 'app-select-for',
      component: app_select_for
    },
    {
      path: '/link-value',
      name: 'link-value',
      component: link_value
    },
    {
      path: '/app-button',
      name: 'app-button',
      component: app_button
    },
    {
      path: '/use-vue',
      name: 'use-vue',
      component: use_vue
    },
    {
      path: '/to-other-page',
      name: 'to-other-page',
      component: to_other_page
    },




  ]
})
