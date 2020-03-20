import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import paly from "../components/paly";
import app_2 from "../components/app-2";
import app_3 from '../components/app-3';
import app_for from '../components/app-for';
import app_on from '../components/app-on';
import app_input from '../components/vue-input';
import new_dome from '../components/newDome';
import input_1 from '../components/input1';
import app_textarea from '../components/app-textarea';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/paly',
      name: 'paly',
      component: paly
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
  ]
})
