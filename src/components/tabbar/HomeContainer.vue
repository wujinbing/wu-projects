<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.src" :style="{backgroundImage: 'url( '+item.url+' )'}">
                
            </mt-swipe-item>
        </mt-swipe>
        <div id="gridlist">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" 
                    v-for="item in gridlist" :key="item.src">
                        <a href="#">
		                    <img :src="item.src" alt="">
		                    <div class="mui-media-body">{{item.name}}</div>
                        </a>
                    </li>
		           
		        </ul> 
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            lunbotulist: [
                {url: '/src/images/1-1F409101606439.jpg'},
                {url: '/src/images/1-1F409101644U4.jpg'},
                {url: '/src/images/1-1F409101452301.jpg'}
            ],
            gridlist: [
                {src: '/src/images/menu1.png', name: 111},
                {src: '/src/images/menu2.png', name: 222},
                {src: '/src/images/menu3.png', name: 333},
                {src: '/src/images/menu4.png', name: 444},
                {src: '/src/images/menu5.png', name: 555},
                {src: '/src/images/menu6.png', name: 666},
            ]
            
        }
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
        }
        
    }

}
</style>
style


