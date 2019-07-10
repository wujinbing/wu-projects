import Vue from 'vue'
import app from './app.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import comment from './components/subcomponents/comment.vue'
// Vue.use(comment)


// vue图片预览组件
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import './css/base.css'


Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});


import router from './router.js'
import moment from 'moment'

Vue.filter('dateformat', function(datestr){
  return moment(datestr).format('YYYY-MM-DD HH-mm-ss')
})




import {Header, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);







var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router

})


