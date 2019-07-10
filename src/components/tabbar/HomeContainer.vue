<template>
    <div>

        <lunbotu-box :lunbotulist="lunbotulist" :lunbotuwh="lunbotuwh"> </lunbotu-box>

        <div id="gridlist">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" 
                    v-for="item in gridlist" :key="item.src">
                        <router-link :to="item.gridlistrouter">
		                    <img :src="item.src" alt="">
		                    <div class="mui-media-body">{{item.name}}</div>
                        </router-link>
                    </li>
		        </ul> 
		</div>
        <del class="red">111111</del>
    </div>
</template>

<script>
// import '../../css/base.css'
import lunbotu from '../subcomponents/Lunbotu.vue'
export default {
    data(){
        return {
            lunbotuwh: {h:true , w:false},
            msg: 'hahahahha',
            lunbotulist: [
                {url: '/src/images/commodity4.png'},
                {url: '/src/images/commodity4.png'},
                {url: '/src/images/commodity4.png'}
            ],
            gridlist: [
                {src: '/src/images/menu1.png', name: '新闻资讯', gridlistrouter: '/homepage/newlist'},
                {src: '/src/images/menu2.png', name: '图片分享', gridlistrouter: '/homepage/photo'},
                {src: '/src/images/menu3.png', name: '商品购买', gridlistrouter: '/homepage/shopping'},
                {src: '/src/images/menu4.png', name: '留言反馈', gridlistrouter: '/homepage/feedback'},
                {src: '/src/images/menu5.png', name: '视频专区', gridlistrouter: '/homepage/Video'},
                {src: '/src/images/menu6.png', name: '联系我们', gridlistrouter: '/homepage/contact-us'}
            ],
            
        }
    },
    components: {
        'lunbotu-box':lunbotu
    },
    created(){
        // this.getlunbotu()
    },
    methods: {
        // getlunbotu(){
        //     // console.log('000000')
        //     this.$http.get("http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1").then(result => {
        //         console.log(result.body)
        //     })
        // }
    }
}

</script>

<style lang='less' scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-items-wrap {
        .mint-swipe-item {
         background-position: center;
         background-size: cover;
        }
    }
    
}
#gridlist {
    .mui-table-view,.mui-grid-9{
        border: none;
        margin-top: 10px;
        background-color: #fff;
        .mui-table-view-cell{
            border: none;
            img {
                width: 70%;
            }
            .mui-media-body{
                font-size: 12px;
            }
        }
        
    }

}
</style>
style


