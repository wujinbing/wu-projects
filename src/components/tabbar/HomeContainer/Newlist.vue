<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in timedata" :key="item.id">
                <router-link :to="'/homepage/newlist/'+item.id"> 
                    <img class="mui-media-object mui-pull-left" src="/src/images/1-1F409101J5935.jpg">
                    <div class="mui-media-body">
                        幸福
                        <div>
                            <p class="mui-ellipsis">
                                <span>发表时间: {{ item.time | dateformat}}</span>
                                <span>点击: 0次</span>
                            </p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            timedata: [
                {time: new Date(), id: 1 },
                {time: new Date(), id: 2 },
                {time: new Date(), id: 3 },
                {time: new Date(), id: 4 },
                {time: new Date(), id: 5 },
                {time: new Date(), id: 6 },
                {time: new Date(), id: 7 },
                {time: new Date(), id: 8 },
                {time: new Date(), id: 9 },
                {time: new Date(), id: 10 },
                {time: new Date(), id: 11 },
                {time: new Date(), id: 12 },
                {time: new Date(), id: 13 },



            ]
        }

    }
    
}
</script>
<style lang='less' scoped>
.mui-table-view {
    li {
        list-style: none;
        a {
            img {
                height: 50px;
                
            }
            .mui-media-body {
                position: relative;
                height: 50px;
                p {
                    font-size: 8px;
                    color:#226aff;
                    display: flex;
                    justify-content: space-between;
                    // position: absolute;
                    // bottom: 0px;
                }
                div {
                    width: 100%;
                    position: absolute;
                    bottom: 0px;
                    
                }
            }
        }
    }
    
}
</style>


