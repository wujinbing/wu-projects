<template>
    <div>
       <div class="news-body">
            <div class="news-head">
                <div class="news-title">1季度多家房企利润跌幅超50%去库存促销战打响</div>
                <div class="news-time">
                    <div class="news-time-content">
                        <span>发表时间: 2015-04-16 11:50:28</span>
                        <span>点击 {{ id }} 次</span>
                    </div>
                </div>
            </div>
             <lunbotu-box v-bind:lunbotulist="lunbotulist" :lunbotuwh="lunbotuwh"> </lunbotu-box>
            <div class="news-content">
                <h3>人大国发院：房地产投资下半年面临回调</h3>
                <p>
                    首先让我们关注一下宏观经济方面的新闻，中国人民大学国家发展
                    研究院在最新报告中指出，上半年中国经济“弱企稳”，下半年短期下
                    度还需加大，包括加大力度稳定房地产投资、加大力度稳定基建投资、
                    稳定当前对新兴产业等财政补贴、适当加大金融机构的风险容忍等。
                </p>
                <h3>人大国发院：房地产投资下半年面临回调</h3>
                <p>
                    首先让我们关注一下宏观经济方面的新闻，中国人民大学国家发展
                    研究院在最新报告中指出，上半年中国经济“弱企稳”，下半年短期下
                    度还需加大，包括加大力度稳定房地产投资、加大力度稳定基建投资、
                    稳定当前对新兴产业等财政补贴、适当加大金融机构的风险容忍等。
                </p>
                <h3>人大国发院：房地产投资下半年面临回调</h3>
                <p>
                    首先让我们关注一下宏观经济方面的新闻，中国人民大学国家发展
                    研究院在最新报告中指出，上半年中国经济“弱企稳”，下半年短期下
                    度还需加大，包括加大力度稳定房地产投资、加大力度稳定基建投资、
                    稳定当前对新兴产业等财政补贴、适当加大金融机构的风险容忍等。
                </p>
                <h3>人大国发院：房地产投资下半年面临回调</h3>
                <p>
                    首先让我们关注一下宏观经济方面的新闻，中国人民大学国家发展
                    研究院在最新报告中指出，上半年中国经济“弱企稳”，下半年短期下
                    度还需加大，包括加大力度稳定房地产投资、加大力度稳定基建投资、
                    稳定当前对新兴产业等财政补贴、适当加大金融机构的风险容忍等。
                </p>
                <h3>人大国发院：房地产投资下半年面临回调</h3>
                <p>
                    首先让我们关注一下宏观经济方面的新闻，中国人民大学国家发展
                    研究院在最新报告中指出，上半年中国经济“弱企稳”，下半年短期下
                    度还需加大，包括加大力度稳定房地产投资、加大力度稳定基建投资、
                    稳定当前对新兴产业等财政补贴、适当加大金融机构的风险容忍等。
                </p>
                <h3>人大国发院：房地产投资下半年面临回调</h3>
                <p>
                    首先让我们关注一下宏观经济方面的新闻，中国人民大学国家发展
                    研究院在最新报告中指出，上半年中国经济“弱企稳”，下半年短期下
                    度还需加大，包括加大力度稳定房地产投资、加大力度稳定基建投资、
                    稳定当前对新兴产业等财政补贴、适当加大金融机构的风险容忍等。
                </p>
            </div>
            <!-- <comment-box>  </comment-box>  -->
            <comment-box >   </comment-box>
       </div>
        
    </div>
    
</template>

<script>
// import comment from './src/components/subcomponents/comment.vue'
import comment from '../../subcomponents/comment.vue'

import lunbotu from '../../subcomponents/Lunbotu.vue'



export default {
    data(){
        return {
            id: this.$route.params.dd,
            lunbotuwh: {h:false , w:true},
            lunbotulist: [
                {url: '/src/images/commodity4.png'},
                {url: '/src/images/commodity4.png'},
                {url: '/src/images/commodity4.png'}
            ],   
        }
    },
    components: {
        'comment-box': comment,
        'lunbotu-box': lunbotu,
    },
    // props:['lunbotulist']
    
}
</script>

<style lang='less' scoped>

    .news-body {
        padding: 0 0;
    }
    .news-head {
        height: 80px;
        border-bottom: 1px solid #e3e3e3;
        padding: 20px 10px;
        position: relative;
        .news-title {
            text-align: center;
            font-size: 15px;
            color: #ff0707;
            font-weight: 700;
        }
        .news-time {
            width: 94%;
            position: absolute;
            bottom: 5px;

            .news-time-content {
                display: flex;
                color: #5faeff;
                justify-content: space-between; 
                font-size: 11px;


            }
            
        }

    }
    .news-content {
        padding: 12px 10px;
        color: #7c7c80;
        h3 {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 10px;

        }
        p {
            font-size: 12px;
            margin-bottom: 10px;
        } 
    }

</style>

