<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
					<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							全部
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							家居生活
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							摄影设计
						</a>
						<a class="mui-control-item " href="#item4mobile" data-wid="tab-top-subpage-4.html">
							明星美女
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							摄影器材
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							明星写真
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							清纯甜美
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							古典美女
						</a>

					</div>
				</div>

		</div>
        <!-- 懒加载 -->
        <ul>
            <router-link :to="'/homepage/photo/'+item.id" v-for="item in photos" :key='item.src' tag='li'>
                <img v-lazy="item.src">
                <div class="photo-info">
                    <h3>高科技产品</h3>
                    <p>高科技产品是指用于商业目的并且采用高科技和高科技
                        手段生产的知识密集，技术含量大的高附加值创新产品，
                        其产品生命周期呈现棘轮效应。高科技产品开发有三种
                        形式：自我开发、引进开发、协作开发。</p>
                </div>
            </router-link>
            

            

        </ul>
    </div>
</template>


<script>

import mui from '../../../lib/mui/js/mui.min.js'

export default {
    data(){
        return {
            photos: [
                {url: '/src/images/1-1F409101606439.jpg',src: '/src/images/1-1F409101606439.jpg'},
                {url: '/src/images/1-1F409101644U4.jpg' ,src: '/src/images/1-1F409101644U4.jpg'},
                {url: '/src/images/1-1F409101452301.jpg',src: '/src/images/1-1F409101452301.jpg'},
            ]
        }
    },
    created(){

    },
    mounted(){
        

        mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        })
    }
}

</script>

<style lang='less' scoped>
* {
  touch-action: pan-y;
}

ul {
    margin: 0 10px;
    padding: 0;
   
    li {
        list-style: none;
        margin-bottom: 10px;
        box-shadow: 0 0 2px rgb(34, 34, 34);
        background-color: rgb(216, 216, 216);
         position: relative;
        img {
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .photo-info {
            color: rgb(255, 255, 255);
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 60px;
            background-color: rgba(0, 0, 0, .5);
            overflow: hidden;
            padding: 2px 5px;
            // background-color:pink;
            h3 {
                font-size: 13px;
                font-weight: 500;

            }
            p {
                font-size: 11px;
                line-height: 15px;
                text-indent: 2em;
            }

        }
    }
    
}

</style>


