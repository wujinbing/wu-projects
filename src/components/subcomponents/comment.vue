<template>
    <div>
        <div class="comment-body">
            <div class="comment-top">
                <div class="comment-title">发表评论</div>
                <textarea class="comment-area" name="" id="" maxlength="120" placeholder="请输入要BB的内容（最多BB120个字)"></textarea>
                <mt-button class="comment-button" size="large" type="primary">发表评论</mt-button>
            </div>
            <div class="comment-item">
                <div class="comment-user">第一楼 用户：匿名用户&nbsp&nbsp&nbsp 发表时间：2017-09-20 11:49:05</div>
                <div class="comment-content">我要开始BB了，大家做好准备了吗</div>
            </div>
            <div class="comment-item">
                <div class="comment-user">第一楼 用户：匿名用户 &nbsp&nbsp&nbsp 发表时间：2017-09-20 11:49:05</div>
                <div class="comment-content">我要开始BB了，大家做好准备了吗</div>
            </div>
            <div class="comment-item">
                <div class="comment-user">第一楼 用户：匿名用户 &nbsp&nbsp&nbsp发表时间：2017-09-20 11:49:05</div>
                <div class="comment-content">我要开始BB了，大家做好准备了吗</div>
            </div>
            <div class="comment-item">
                <div class="comment-user">第一楼 用户：匿名用户&nbsp&nbsp&nbsp 发表时间：2017-09-20 11:49:05</div>
                <div class="comment-content">我要开始BB了，大家做好准备了吗</div>
            </div>
            <mt-button class="comment-button" size="large" type="danger" plain>加载评论</mt-button>

        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='less' scoped>
    .comment-body{
        padding: 0px 10px;
        .comment-top {
            .comment-title {
                font-size: 18px;
                font-weight: 550;
                border-bottom: 1px solid  #c9c9c9;
                padding-bottom: 5px;
            }
            .comment-area {
                margin: 10px 0px;
                height: 100px;
                font-size: 12px;

            }
            .comment-button {
                margin-bottom: 10px;
                

        }

        }
        .comment-item {
            font-size: 12px;
            .comment-user {
                background-color: rgb(219, 219, 219);
                padding: 3px 5px;



            }
            .comment-content {
                padding: 5px 5px;
                text-indent: 2em;

            }

        }
    }

</style>


