<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.src" :style="'backgroundImage: url(' +item.url+')'" 
            :class="{'lbtautowidth':lunbotuwh.w, 'lbtautoheight':lunbotuwh.h}">
                
            </mt-swipe-item>
        </mt-swipe>
        <!-- <span> {{ lunbo }} </span> -->
      
    </div>
</template>

<script>
export default {
    data(){
        return {
            //  lunbotulist: [
            //     {url: '/src/images/1-1F409101606439.jpg'},
            //     {url: '/src/images/1-1F409101644U4.jpg'},
            //     {url: '/src/images/1-1F409101452301.jpg'}
            // ],   
        }
    },
   props:['lunbotulist','lunbotuwh'] 
}

</script>

<style lang='less' scoped>
.mint-swipe {
    height: 250px;
    .mint-swipe-items-wrap {
        .mint-swipe-item {
         background-position: center;
        //  background-size: cover;
        }
    }
    
}

.lbtautowidth {
     background-size: auto 100%;
     background-repeat: no-repeat;
}


.lbtautoheight {
    background-size: 100% auto;
    background-repeat: no-repeat;
}

</style>



