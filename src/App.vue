<template>
	<div class="app-container">
		<mt-header id="tab-top" fixed title="练习项目">
			<router-link to="/" slot="left">
				<mt-button icon="back" @click='back'>返回</mt-button>
			</router-link>
				<mt-button icon="more" slot="right">111</mt-button>
		</mt-header>
		<!-- <mt-header id="tab-top" fixed title="练习项目">
			<router-link to="/" slot="left">
				<span icon="back">返回</span>
			</router-link>
		</mt-header>
	 -->
	
  		<transition>
			  <router-view></router-view>
		</transition>
		

		<nav id="tabbar-bottom"  class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-wu" to="/homepage">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-wu" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-wu" to="/shopCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">111</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-wu" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
	</div>
</template>


<script>
export default {
	data(){
		return {

		}
	},
	methods: {
		back(){
			this.$router.go(-1)
		}
	}
}
</script>


<style lang="less" scoped>

.app-container{
	padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
	// margin: 40px 0px;
	.mui-bar {
		background-color: #fff;
		box-shadow: 0 0 0.4px rgba(0,0,0,.3)
	}
}
.v-enter {
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}


.mui-bar-tab .mui-tab-item-wu.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-wu {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-wu .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
	padding-bottom: 0;
}	
.mui-bar-tab .mui-tab-item-wu .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
#tab-top {
	z-index: 1001;
}
// #tabbar-bottom {
// 	position:absolute;
// 	bottom: 0px;
// 	// bottom: 60px;
// 	// z-index: 1001;
// }
</style>



