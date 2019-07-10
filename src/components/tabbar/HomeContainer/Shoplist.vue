<template>
    <div>
        <ul>
            <li v-for='item in comimgdata' :key='item.src'>
                <div class="shopbox">
                    <div class="commodity-img">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="commodity-info">
                        <div class="com-title">华为（HUAWEI）荣耀6Plus16G双4G版华为（HUAWEI）荣耀6Plus</div>
                        <div class="commodity-price">
                            <span>￥2195</span>
                            <span>￥2499</span>
                        </div>
                        <div class="commodity-stocks">
                            <span>热卖中</span>
                            <span>剩60件</span>
                        </div>

                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            comimgdata: [
                {url: '/src/images/commodity1.png', src: '/src/images/commodity1.png'},
                {url: '/src/images/commodity2.png', src: '/src/images/commodity2.png'},
                {url: '/src/images/commodity3.png', src: '/src/images/commodity3.png'},
                {url: '/src/images/commodity4.png', src: '/src/images/commodity4.png'},
                // {url: '/src/images/commodity4.png', src: '/src/images/commodity4.png'},


            ]
        }
    }
}
</script>


<style lang='less' scoped>
    ul {
        margin: 0;
        padding: 6px;
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        li {
            margin-bottom: 6px;
            box-shadow: 0 0 2px  rgb(221, 221, 221);
            .shopbox {
                color: rgb(153, 153, 153);
                width: 179px;
                height: 275px;
                border: 1px solid rgb(209, 209, 209);
                position: relative;
                .commodity-img {
                    img {
                        width: 100%;
                        text-align: center;
                    }
                }
                .commodity-info {
                    // height: 75px;
                    padding: 0 5px;
                    position: absolute;
                    bottom: 2px;
                    .com-title {
                        font-size: 12px;
                        color: rgb(41, 41, 41);
                        font-weight: 700;
                        line-height: 13px;
                    }
                    .commodity-price {
                        margin: 5px 0 1px 0;
                        span:nth-child(1) {
                            color: rgb(230, 20, 55);
                            font-size: 15px;
                            font-weight: 700px;
                        }
                        span:nth-child(2) {
                            margin-left: 5px;
                            text-decoration: line-through;
                            font-size: 10px;
                        }
                    }
                    .commodity-stocks {
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                        

                        span {

                        }
                    }

                }
            }
        }
    }

</style>


