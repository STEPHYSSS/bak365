<template>
	<div>
		<!-- 魔方 -->
		<div style="background-color: rgb(249, 249, 249)">
			<div v-if="currentObj.imgList.length===0" class="rc-design-react-preview rc-design-component-default-preview">
				<div class="rc-design-component-default-preview__text">点击编辑魔方</div>
			</div>
			<div class="cap-cube-wrap" v-else>
				<div class="cap-cube" :style="{'margin': -(currentObj.imgGap/2).toFixed(2)+'px','height': bigBoxH+'px','width':bigBoxW+'px'}">
					<div v-for="(item,index) in listBox" :key="index" class="cap-cube__item" :style="{'left': item.Dleft+'px','top': item.Dtop+'px','height': item.Dheight+'px','width': item.Dwidth+'px',
              'margin': (currentObj.imgGap/2).toFixed(2)+'px'
            ,'background-image':`url(${setImgPrex(item.img)})`}"
					 @click="clickLink(item)">
						<!-- #ifndef H5-->
						<image class="cap-cube__table-image--invisible" :src="item.img |fmtImgUrl" alt="loaded" />
						<!-- #endif -->
						<!-- #ifdef H5 -->
						<img class="cap-cube__table-image--invisible" :src="item.img |fmtImgUrl" alt="loaded" />
						<!-- #endif -->
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
						//1:1行2个;   2:
						changeMode: 1,
						densityMode: 4,
						// 图片数组
						imgList: [
							// {
							//   //离左边有几个盒子;离上面几个盒子；width几个盒子；height几个盒子
							//   pageX: 0,
							//   pageY: 0,
							//   pWidth: 2,
							//   pHeight: 2,
							//   url: "",
							//   img:
							//     "https://img.yzcdn.cn/upload_files/2014/12/05/043cc31769494d3d570543b893c9bce9.png!large.webp"
							// }
						],
						// 图片间隙
						imgGap: 3,
						// 页面间距
						pageGap: 11
					};
				}
			}
		},
		data() {
			return {
				// currentObj: {
				//   changeMode: this.propsObj.changeMode,
				//   densityMode: this.propsObj.densityMode,
				//   imgList: this.propsObj.imgList,
				//   imgGap: this.propsObj.imgGap,
				//   pageGap: this.propsObj.pageGap
				// },
				listBox: [],
				bigBoxM: 0,
				bigBoxH: 0,
				bigBoxW: 0
			};
		},
		mounted() {
			this.changeBox();
		},
		methods: {
			setImgPrex(val) {
				if (
					val &&
					this.listBox &&
					this.listBox.length > 0
				) {
					return GetBaseImgUrl() + val;
					// return 'http://192.168.0.105:8001/' + val;
				} else {
					return val;
				}
			},
			clickLink(item) {
				// 点击跳转
				if (item.urlObj && item.urlObj.url) {
					// let url = item.urlObj.url.split('#');
					// if(url!=url[0]){
					   window.location.href = item.urlObj.url
					//    console.log(item.urlObj.url,'888')
					// }else
					// {
						// let path = url[1];
						// uni.reLaunch({
						// 	url: path
						// })
					// }
				}
			},
			changeBox() {
				this.listBox = this.currentObj.imgList;
				if (this.listBox.length === 0) {
					return;
				}
				//手机端记得把320删除
				let clientWidth = uni.getSystemInfoSync().windowWidth;
				let m = Number(this.currentObj.changeMode);
				this.currentObj.pageGap = Number(this.currentObj.pageGap);

				if (m !== 8) {
					let arr = [];
					switch (m) {
					           case 1:
					            arr = [
					              { pageX: 0, pageY: 0, pWidth: 4, pHeight: 1.72},
					              { pageX: 0, pageY: 0, pWidth: 0, pHeight: 0 }
					            ];
					            break;
					          case 2:
					            arr = [
					              { pageX: 0, pageY: 0, pWidth: 2, pHeight: 2 },
					              { pageX: 2, pageY: 0, pWidth: 2, pHeight: 2 }
					            ];
					            break;
					          case 3:
					            arr = [
					              { pageX: 0, pageY: 0, pWidth: 1.33, pHeight: 1.33 },
					              { pageX: 1.33, pageY: 0, pWidth: 1.33, pHeight: 1.33 },
					              { pageX: 2.66, pageY: 0, pWidth: 1.33, pHeight: 1.33 }
					            ];
					            break;
					          case 4:
					            arr = [
					              { pageX: 0, pageY: 0, pWidth: 1, pHeight: 1 },
					              { pageX: 1, pageY: 0, pWidth: 1, pHeight: 1 },
					              { pageX: 2, pageY: 0, pWidth: 1, pHeight: 1 },
					              { pageX: 3, pageY: 0, pWidth: 1, pHeight: 1 }
					            ];
					            break;
					          case 5:
					            arr = [
					              { pageX: 0, pageY: 0, pWidth: 2, pHeight: 2 },
					              { pageX: 2, pageY: 0, pWidth: 2, pHeight: 2 },
					              { pageX: 0, pageY: 2, pWidth: 2, pHeight: 2 },
					              { pageX: 2, pageY: 2, pWidth: 2, pHeight: 2 }
					            ];
					            break;
					          case 6:
					            arr = [
					              { pageX: 0, pageY: 0, pWidth: 2, pHeight: 4 },
					              { pageX: 2, pageY: 0, pWidth: 2, pHeight: 2 },
					              { pageX: 2, pageY: 2, pWidth: 2, pHeight: 2 }
					            ];
					            break;
					          case 7:
					            arr = [
					              { pageX: 0, pageY: 0, pWidth: 4, pHeight: 2 },
					              { pageX: 0, pageY: 2, pWidth: 2, pHeight: 2 },
					              { pageX: 2, pageY: 2, pWidth: 2, pHeight: 2 }
					            ];
					            break;
					          case 8:
					            arr = [
					              { pageX: 0, pageY: 0, pWidth: 2, pHeight: 4 },
					              { pageX: 2, pageY: 0, pWidth: 2, pHeight: 2 },
					              { pageX: 2, pageY: 2, pWidth: 1, pHeight: 2 },
					              { pageX: 3, pageY: 2, pWidth: 1, pHeight: 2 }
					            ];
					            break;
					        }
					this.listBox.forEach((D, index) => {
						if (arr[index]) {
							Object.assign(arr[index],D)
						}
					});
					this.listBox = arr;
				}
				

				let imgGap = Math.ceil(this.currentObj.imgGap / 2);
				//每个盒子的平均宽度;
				let averageW = Math.ceil(
					(
						clientWidth +
						(this.currentObj.imgGap -
							this.currentObj.pageGap * 2)
					).toFixed(2) / Number(this.currentObj.densityMode)
				);


				let newList = JSON.parse(JSON.stringify(this.listBox));

				//求最多的height盒子的个数
				let mostH = newList.reduce((D, D2) => {
					let a =
						parseFloat(D).toString() == "NaN" ?
						Number(D.pHeight) + Number(D.pageY) :
						D;
					let b = Number(D2.pHeight) + Number(D2.pageY);
					return a > b ? a : b;
				});
				let mostW = newList.reduce((D, D2) => {
					let a =
						parseFloat(D).toString() == "NaN" ?
						Number(D.pWidth) + Number(D.pageX) :
						D;
					let b = Number(D2.pWidth) + Number(D2.pageX);
					return a > b ? a : b;
				});
				this.bigBoxH = (mostH * averageW).toFixed();
				this.bigBoxW = (mostW * averageW).toFixed();
				
				newList.forEach((D, index) => {
					this.listBox[index].Dwidth =
						Number(D.pWidth) * averageW - this.currentObj.imgGap;
					this.listBox[index].Dheight =
						Number(D.pHeight) * averageW - this.currentObj.imgGap;
					this.listBox[index].Dleft =
						Number(D.pageX) * averageW + this.currentObj.pageGap;
					this.listBox[index].Dtop = Number(D.pageY) * averageW;
				});

			}
		},
		watch: {
			'propsObj.changeMode'(val) {
				this.changeBox();
			}
		}
	};
</script>

<style scoped>
	.rc-design-component-default-preview__text {
		line-height: 136px;
		font-size: 14px;
	}

	.rc-design-react-preview {
		position: relative;
		overflow: hidden;
	}

	.rc-design-component-default-preview {
		height: 136px;
		background-color: #ebf8fd;
		text-align: center;
		color: #88c4dc;
	}

	.cap-cube-wrap {
		user-select: none;
		width: 100%;
		overflow: hidden;
	}

	.cap-cube {
		position: relative;
	}

	.cap-cube__item {
		box-sizing: border-box;
		/* border: 1px solid rgb(209, 207, 207); */
		position: absolute;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50%;
		overflow: hidden;
	}

	.cap-cube__table-image--invisible {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
