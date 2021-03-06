import Vue from 'vue'
import Router from 'vue-router'
import logIn from '../pages/logIn'
import summary from '../pages/summary'
import map from '../pages/map'
import ito from '../pages/ito'
import userAssets from '../pages/userAssets'
import merchantAssets from '../pages/merchantAssets/merchantAssetsIndex'
import '../index'



// import echa from '../pages/echa'
const HAS_LOGINED = true

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: logIn},
    {path: '/map',component: map},
    {path: '/summary',component: summary},
    {path: '/summary/ito',component: ito},
    {path: '/summary/userAssets',component: userAssets},
    {path: '/summary/merchantAssets',component: merchantAssets},

    {path: '*',component: summary}
  ]
})
