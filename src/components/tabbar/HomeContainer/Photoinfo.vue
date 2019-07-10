<template>
    <div>
        <div class="photo-body">
            <div class="photo-head">
                <div class="photo-title">很美的落地大书柜 可以放超多书</div>
                <div class="photo-time">
                    <div class="photo-time-content">
                        <span>发表时间: 2015-04-16 11:50:28</span>
                        <span>点击 0 次</span>
                    </div>
                </div>
            </div>
            <div class="photo-content">
                <ul>
                    <li v-for='item in minphoto' :key="item.id">
                        <viewer :images="item.src"> 
                             <img :src="item.src" alt="" >
                        </viewer> 
                    </li>
                </ul>

                <p>
                    首先让我们关注一下宏观经济方面的新闻，中国人民大学国家发展
                    研究院在最新报告中指出，上半年中国经济“弱企稳”，下半年短期下
                    度还需加大，包括加大力度稳定房地产投资、加大力度稳定基建投资、
                    稳定当前对新兴产业等财政补贴、适当加大金融机构的风险容忍等。
                </p>
                
            </div>
            <comment-box>  </comment-box> 
       </div>

        
    </div>
</template>


<script>
import comment from '../../subcomponents/comment.vue'
export default {
    data(){
        return {
            minphoto:[
                 {url: '/src/images/1-1F409101G5115.jpg', src: '/src/images/1-1F409101G5115.jpg', id:1},
                 {url: '/src/images/1-1F409101J5935.jpg', src: '/src/images/1-1F409101J5935.jpg', id:2},
                 {url: '/src/images/1-1F409101644U4.jpg', src: '/src/images/1-1F409101644U4.jpg', id:3},
                 {url: '/src/images/1-1F409101452301.jpg', src: '/src/images/1-1F409101452301.jpg', id:4},
                 {url: '/src/images/1-1F409101606439.jpg', src: '/src/images/1-1F409101606439.jpg', id:5},
            ]
        }
    },

    components: {
        'comment-box':comment
    }
}
</script>

<style lang='less' scoped>

    .photo-body {
        padding: 0 0;
    }
    .photo-head {
        height: 80px;
        border-bottom: 1px solid #e3e3e3;
        padding: 20px 10px;
        position: relative;
        .photo-title {
            text-align: center;
            font-size: 15px;
            color: #5fdaff;
            font-weight: 700;
        }
        .photo-time {
            width: 94%;
            position: absolute;
            bottom: 5px;

            .photo-time-content {
                display: flex;
                color: #7c7c80;
                justify-content: space-between; 
                font-size: 11px;


            }
            
        }

    }
    .photo-content {
        padding: 12px 10px;
        
        ul {
            width: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            li {
                margin: 6px;
                list-style: none;
                // background-color: rgba(0,0,0,.5);
                box-shadow: 0 0 3px rgb(94, 94, 94);
                img {
                    width: 100px;
                    vertical-align: middle;
                }
            }
        }
        
        p {
            font-size: 12px;
            margin-bottom: 10px;
            margin-top: 10px;
            color: #4e4e4e;
        } 
    }

   

</style>

