<template>
	<div class="pictureAds">
		<!-- 图片广告 -->
		<div class="zent-design-preview-controller__drag-handle" style="background-color: rgb(249, 249, 249);">
			<div class="rc-design-react-preview">
				<div v-if="currentObj.imgList.length===0" class="rc-design-component-default-preview">
					<div class="rc-design-component-default-preview__title">点击编辑图片广告</div>
					<div>建议宽度750像素</div>
				</div>
				<div v-else :style="{'padding-right':currentObj.changeMode!=3?currentObj.pageGap+'px':0,
           'padding-left': currentObj.changeMode!=3?currentObj.pageGap+'px':0}"
				 :class="['cap-image-ad',currentObj.imgShadow==='1'?'cap-image-ad--img-shadow':'',
          currentObj.imgRadius==='1'?'cap-image-ad--fillet':'']">
					<ul v-if="currentObj.changeMode==1" class="cap-image-ad__top2end">
						<li class="cap-image-ad__content" :style="{'height': changeClientWidth+'px', 'margin-bottom': currentObj.imgGap+'px'}"
						 v-for="(item,index) in currentObj.imgList" :key="index" @click="clickLink(item)">
							<h3 class="cap-image-ad__title" v-if="item.name&&item.name!==' '">{{item.name}}</h3>

							<div class="cap-image-ad__image-wrapper">
								<!-- #ifndef H5-->
								<image style="width:100%;" class="cap-image-ad__image" :src="item.img " alt="loaded" />
								<!-- #endif -->
								<!-- #ifdef H5 -->
								<img style="width:100%;" class="cap-image-ad__image" :src="item.img " alt="loaded" />
								<!-- #endif -->
							</div>
						</li>
					</ul>
					<swiper v-if="currentObj.changeMode==2" class="cap-image-ad__image_swipe" :style="{'height':changeClientWidth+'px','width':changeClientWidth+'px'}"
					 @change="onChange" :indicator-dots="currentObj.indicator==1&&currentObj.imgList.length>1">
						<swiper-item v-for="(image, index) in currentObj.imgList" :key="index" @click="clickLink(image)">
							 <!--  -->
							<!-- <navigator v-for="(url,index2) in image.urlObj" :key="index2" :url = "url.url"> -->
								
							<!-- #ifndef H5-->
							<image :src="image.img" style="width:100%;"/>
							<!-- <a :href = "image.urlObj.url"></a> -->
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<img :src="image.img " style="width:100%;" />
							<!-- #endif -->
							<h3 class="cap-image-ad__title" v-if="image.name&&image.name!==' '">{{image.name}}</h3>
							<!-- </navigator> -->
						</swiper-item>
					</swiper>
					<div v-if="currentObj.indicator!=1&&currentObj.imgList.length>1&&currentObj.changeMode==2">
						<div :class="['cap-indicator','cap-indicator--'+ currentObj.indicator]" :style="{'right': currentObj.indicator!=2?'15px':''}">
							<span v-for="(image, i) in currentObj.indicator!=2?1:currentObj.imgList" :key="i" :class="['cap-indicator__dot', i===current?'cap-indicator__dot--active':'']">{{current+1}}</span>
							/{{currentObj.imgList.length}}
						</div>
					</div>

					<!-- {{image.urlObj.url}} 商品链接-->
					<div v-if="currentObj.changeMode==3||currentObj.changeMode==4||currentObj.changeMode==5" :style="{'height':boxWidth+'px',
            'padding-right':currentObj.pageGap+'px',
           'padding-left': currentObj.pageGap+'px'}"
					 :class="['cap-image-ad__slide']">
						<div v-for="(image, index) in currentObj.imgList" :key="index" class="cap-image-ad__image-wrapper" :style="{'width':boxWidth+'px','height':boxWidth+'px',
              'margin-right': currentObj.imgGap+'px'}"
						 @click="clickLink(image)">
							<!-- #ifndef H5-->
							<image :src="image.img" style="width:100%;height:100%" alt="loaded" />
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<img :src="image.img" style="width:100%;height:100%" alt="loaded" />
							<!-- #endif -->
							<h3 class="cap-image-ad__title" v-if="image.name&&image.name!==''">{{image.name}}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Mixins from "../public";
	import {GetBaseImgUrl} from "@/util/publicFunction";
	export default {
		mixins: [Mixins],
		props: {
			propsObj: {
				type: Object,
				default () {
					return {
						changeMode: 1,
						// 图片间隙
						imgGap: 0,
						// 页面间距
						pageGap: 0,
						imgShadow: "1",
						imgRadius: "1",
						// 导航滚动的时候多一个 一屏显示 4，5，6张
						imgNum: "6",
						// 1,2,3,4
						indicator: "1",
						//图片
						imgList: []
					};
				}
			}
		},
		data() {
			return {
				clientWidth: 0,
				boxWidth: 0,
				current: 0,
				changeClientWidth: ""
				// currentObj: {
				//   changeMode: this.propsObj.changeMode,
				//   pageGap: this.propsObj.pageGap,
				//   imgGap: this.propsObj.imgGap,
				//   imgShadow: this.propsObj.imgShadow,
				//   imgRadius: this.propsObj.imgRadius,
				//   imgList: this.propsObj.imgList,
				//   imgNum: this.propsObj.imgNum,
				//   indicator: this.propsObj.indicator
				// }
			};
		},
		mounted() {
			this.clientWidth = uni.getSystemInfoSync().windowWidth;
			this.clientWidth = (this.clientWidth - this.currentObj.pageGap * 2).toFixed(
				2
			);
			this.changeClientWidth = this.clientWidth;
			this.currentObj.changeMode = Number(this.currentObj.changeMode);
			this.currentObj.imgNum = Number(this.currentObj.imgNum);
			this.currentObj.imgList.forEach(D => {
				if (D.img) {
					// D.img = this.$VUE_APP_PREFIX2 + D.img
					D.img = GetBaseImgUrl() + D.img;
					// D.img = 'http://192.168.0.105:8001/'+D.img
				}

			})

			this.setImgWidth();
			// this.changeStyle();
		},
		methods: {
			changeStyle() {
				// bus.$on("pictureAdsFun", obj => {
				//   this.currentObj = obj;
				//   this.setImgWidth();
				// });
			},
			setImgWidth() {
				// form.imgGap
				// uni.getSystemInfoSync().windowWidth - currentObj.pageGap*2 - form.imgGap * 3;

				this.boxWidth =
					this.currentObj.changeMode == "3" ?
					282 :
					this.currentObj.changeMode == "4" ?
					128 :
					this.currentObj.imgNum == "4" ?
					this.windowWidthSet(4) :
					this.currentObj.imgNum == "5" ?
					this.windowWidthSet(5) :
					this.windowWidthSet(6);
			},
			windowWidthSet(numImg) {
				let newNum = ((uni.getSystemInfoSync().windowWidth - this.currentObj.pageGap * 2 - this.currentObj.imgGap * (numImg -
					1)) / numImg)
				newNum = Math.round(newNum * 100) / 100;
				return newNum
			},
			onChange(index) {
				this.current = index.detail.current;
			},
			clickLink(obj) {
				if (obj.urlObj && obj.urlObj.url) {
					// let url = obj.urlObj.url.split('#');
					// if(url!="http://dingtalk.bak365.cn"){
						window.location.href = obj.urlObj.url
					// }else{
						// let path = url[1];
						// uni.reLaunch({					
						// 	url: path
						// });
					// }
				}
			}
		},
		watch: {
			"currentObj.pageGap"(n) {
				n = Number(n);
				this.changeClientWidth = (this.clientWidth - n * 2).toFixed(2);
			},
			"currentObj.imgList"(){
				this.currentObj.imgList.forEach(D => {
					if (D.img) {
						// D.img = this.$VUE_APP_PREFIX2 + D.img
						D.img = GetBaseImgUrl() + D.img;
						// D.img = 'http://192.168.0.105:8001/'+D.img
					}
				
				})
				console.log(this.currentObj.imgList)
			}
		}
	};
</script>

<style lang="less" scoped>
	img:before {
		height: 0;
		width: 0;
	}

	.pictureAds {
		/deep/.uni-swiper-dots-horizontal {
			bottom: 35px;
		}
	}

	.rc-design-component-default-preview {
		height: 136px;
		background-color: #ebf8fd;
		text-align: center;
		color: #88c4dc;
	}

	.rc-design-react-preview {
		position: relative;
		overflow: hidden;
	}

	.rc-design-component-default-preview .rc-design-component-default-preview__title {
		padding-top: 30px;
		font-size: 14px;
	}

	.cap-image-ad {
		overflow: hidden;
		font-size: 0;
	}

	.cap-image-ad img,
	.cap-image-ad image {
		vertical-align: top;
	}

	.cap-image-ad__content {
		position: relative;
		overflow: hidden;
	}

	.cap-image-ad__image {
		display: block;
		height: auto;
		margin: 0 auto;
		border: 0;
	}

	.cap-image-ad__title {
		text-align: center;
		overflow: hidden;
		box-sizing: border-box;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0;
		z-index: 10;
		background-color: rgba(51, 51, 51, 0.8);
		color: #fff;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		font-weight: 100;
	}

	.cap-image-ad__slide {
		width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
		padding-bottom: 10px;
		margin-bottom: -10px;
	}

	.cap-indicator {
		position: absolute;
		display: flex;
	}

	.cap-indicator--3 {
		bottom: 13px;
		display: inline-block;
		height: 16px;
		line-height: 16px;
		font-size: 12px;
		color: #999;
	}

	.cap-indicator--2 {
		display: flex;
		transform: translateX(-50%);
		bottom: 36px;
		left: 50%;
	}

	.cap-indicator--4 {
		bottom: 13px;
		display: inline-block;
		min-width: 18px;
		height: 18px;
		line-height: 18px;
		padding: 0 5px;
		border-radius: 100px;
		font-size: 12px;
		background: #000;
		opacity: 0.3;
		color: #fff;
	}

	.cap-indicator--2 .cap-indicator__dot {
		float: left;
		margin-left: 2px;
		width: 12px;
		height: 2px;
		background-color: #c5c5c5;
	}

	.cap-indicator--2 .cap-indicator__dot--active {
		background-color: #000;
	}

	.cap-indicator--3 .cap-indicator__dot--active {
		margin-right: 2px;
		font-weight: 700;
		font-size: 16px;
		color: #333;
	}

	.cap-image-ad__slide .cap-image-ad__image-wrapper {
		display: inline-block;
		height: 100%;
		position: relative;
	}

	.cap-image-ad__top2end .cap-image-ad__content {
		box-shadow: none;
	}

	.cap-image-ad__top2end .cap-image-ad__content:last-child {
		margin-bottom: 0 !important;
	}

	/* .cap-image-ad__slide .cap-image-ad__image-wrapper:last-child {
  margin-right: 0 !important;
} */
	.cap-image-ad__content .cap-image-ad__image-wrapper {
		position: relative;
	}

	.cap-image-ad__top2end {
		padding: 0;
	}

	.cap-image-ad__top2end .cap-image-ad__image {
		width: 100%;

	}

	.cap-image-ad--img-shadow .cap-image-ad__top2end .cap-image-ad__content,
	.cap-image-ad--img-shadow .cap-image-ad__image_swipe,
	.cap-image-ad--img-shadow .cap-image-ad__image-wrapper {
		box-shadow: 0 4px 10px rgba(47, 54, 70, 0.1);
	}

	.cap-image-ad--img-shadow .cap-image-ad__image-wrapper image,
	.cap-image-ad--img-shadow .cap-image-ad__image-wrapper img {
		width: 100%;
		height: 100%;
	}

	.cap-image-ad--img-shadow .cap-image-ad__top2end,
	.cap-image-ad--img-shadow .cap-image-ad__slide {
		padding-top: 15px;
		padding-bottom: 15px;
		margin-bottom: 0;
	}

	.cap-image-ad--img-shadow .cap-image-ad__image_swipe {
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.cap-image-ad--fillet .cap-image-ad__top2end img,
	.cap-image-ad--fillet .cap-image-ad__top2end image,
	.cap-image-ad--fillet .cap-image-ad__image_swipe {
		border-radius: 8px;
	}

	.cap-image-ad--fillet .cap-image-ad__image-wrapper {
		border-radius: 8px;
		overflow: hidden;
	}

	.cap-image-ad--fillet .cap-image-ad__title {
		border-radius: 0 0 8px 8px;
	}

	.cap-image-ad--img-shadow .cap-image-ad__slide {
		margin-left: -15px;
		margin-right: -15px;
	}

	.cap-image-ad--img-shadow .cap-image-ad__slide>div:first-child {
		margin-left: 15px;
	}
</style>
