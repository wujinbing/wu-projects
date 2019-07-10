import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import Newlist from './components/tabbar/HomeContainer/Newlist.vue'
import Newinfo from './components/tabbar/HomeContainer/Newinfo.vue'
import Photolist from './components/tabbar/HomeContainer/Photolist.vue'
import Photoinfo from './components/tabbar/HomeContainer/Photoinfo.vue'
import Shoplist from './components/tabbar/HomeContainer/Shoplist.vue'




var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/homepage'},
        {path: '/homepage', component: HomeContainer },
        {path: '/member', component: MemberContainer },
        {path: '/shopcar', component: ShopcarContainer },
        {path: '/search', component: SearchContainer },
        {path: '/homepage/newlist', component: Newlist},
        {path: '/homepage/newlist/:dd', component: Newinfo},
        {path: '/homepage/photo', component: Photolist},
        {path: '/homepage/photo/:id', component: Photoinfo},
        {path: '/homepage/shopping', component: Shoplist},

       



    ],
    linkActiveClass: 'mui-active'
})

export default router