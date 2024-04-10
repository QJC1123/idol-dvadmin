<template>
  <d2-container style="background-color: #f7f8fa;">
	<el-row :gutter="20" style="width: 100%;height: 35%;" >
		<el-col  span="12">
			<img src="./sy1.png" width="100%" style="border-radius:10px"/>
		</el-col>
		<el-col span="6">
			<el-card class="box-card" style>
			  <div slot="header" class="clearfix" style="padding-bottom: 0;">
			    <span style="font-family: YouSheBiaoTiHei;padding-bottom: 0;padding-left: 10px;">明星资讯</span>
			    <el-button style="float: right; padding: 3px 0;color: #c9cdd4;" type="text"  >查看更多</el-button>
			  </div>
			  <el-row style>
				  <el-col :span="3">
					  <div class="dot" data-v-ac08ca54=""></div>
					  <div class="dot1" data-v-ac08ca54=""></div>
				  </el-col>
				  <el-col :span="21">
					  <div class="sycont" data-v-ac08ca54="">
						  <div class="syt1 text-one" data-v-ac08ca54="">李诞谈《脱口秀大会》发展：是教育市场的过程</div>
						  <div class="sydate" data-v-ac08ca54="">2022-11-18</div>
					   </div>
				  </el-col>
				
			   		  </el-row>
				<el-row style>
								  <el-col :span="3">
									  <div class="dot" data-v-ac08ca54=""></div>
									  <div class="dot1" data-v-ac08ca54=""></div>
								  </el-col>
								  <el-col :span="21">
									  <div class="sycont" data-v-ac08ca54="">
										  <div class="syt1 text-one" data-v-ac08ca54="">陈小春张智霖等回归 《大湾仔的夜2》开启美食季</div>
										  <div class="sydate" data-v-ac08ca54="">2022-11-18</div>
									   </div>
								  </el-col>
								
				 		  </el-row>
						  <el-row style>
						  				  <el-col :span="3">
						  					  <div class="dot" data-v-ac08ca54=""></div>
						  					  <div class="dot1" data-v-ac08ca54=""></div>
						  				  </el-col>
						  				  <el-col :span="21">
						  					  <div class="sycont" data-v-ac08ca54="">
						  						  <div class="syt1 text-one" data-v-ac08ca54="">王冰冰加盟《国之大雅》节目 网友:终于要回来了</div>
						  						  <div class="sydate" data-v-ac08ca54="">2022-11-17</div>
						  					   </div>
						  				  </el-col>
						  				
						   		  </el-row>

			
			</el-card>
		</el-col>
		<el-col span="6">
			<el-card class="box-card" style>
			  <div slot="header" class="clearfix" style="padding-bottom: 0;">
			    <span style="font-family: YouSheBiaoTiHei;padding-bottom: 0;padding-left: 10px;">作品动态</span>
			    <el-button style="float: right; padding: 3px 0;color: #c9cdd4;" type="text"  >查看更多</el-button>
			  </div>
			  <el-row style>
				  <el-col :span="3">
					  <div class="dot" data-v-ac08ca54=""></div>
					  <div class="dot1" data-v-ac08ca54=""></div>
				  </el-col>
				  <el-col :span="21">
					  <div class="sycont" data-v-ac08ca54="">
						  <div class="syt1 text-one" data-v-ac08ca54="">王家卫《繁花》还在拍 网友：胡歌从30多拍到40了</div>
						  <div class="sydate" data-v-ac08ca54="">2022-10-15</div>
					   </div>
				  </el-col>
				
			   		  </el-row>
				<el-row style>
								  <el-col :span="3">
									  <div class="dot" data-v-ac08ca54=""></div>
									  <div class="dot1" data-v-ac08ca54=""></div>
								  </el-col>
								  <el-col :span="21">
									  <div class="sycont" data-v-ac08ca54="">
										  <div class="syt1 text-one" data-v-ac08ca54="">国庆档影片正能量汇聚 《万里归途》满意度领跑</div>
										  <div class="sydate" data-v-ac08ca54="">2022-10-15</div>
									   </div>
								  </el-col>
								
				 		  </el-row>
						  <el-row style>
						  				  <el-col :span="3">
						  					  <div class="dot" data-v-ac08ca54=""></div>
						  					  <div class="dot1" data-v-ac08ca54=""></div>
						  				  </el-col>
						  				  <el-col :span="21">
						  					  <div class="sycont" data-v-ac08ca54="">
						  						  <div class="syt1 text-one" data-v-ac08ca54="">电影《如果爱就表白》开机 展现大理风土人情</div>
						  						  <div class="sydate" data-v-ac08ca54="">2022-10-11</div>
						  					   </div>
						  				  </el-col>
						  				
						   		  </el-row>
		
			
			</el-card>
		</el-col>
	</el-row>
	<el-row style="height: 130px;">
		<el-col :span="6" style="background-color: #Fff;height: 100px;">
			<el-row style="height: 20px;"></el-row>
			<el-roW >
				<el-col span="7"><span>&nbsp;</span></el-col>
				<el-col span="4" ><img src="./sy2.png" ></el-col>
				<el-col span="0.7"><span>&nbsp;</span></el-col>
				<el-col span="8">
					<div style="font-size: 18px;font-family: D-DIN,D-DIN-DIN-Bold;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span>找偶像</span></div>
					<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #babec4;line-height: 14px;margin-top: 15px;">多维度查找偶像</div>
				</el-col>
			</el-roW>
		</el-col>
		<el-col :span="6" style="background-color: #Fff;height: 100px;">
			<el-row style="height: 20px;"></el-row>
			<el-roW >
				<el-col span="6"><span>&nbsp;</span></el-col>
				<el-col span="4"><img src="./sy3.png"/></el-col>
				<el-col span="0.7"><span>&nbsp;</span></el-col>
				<el-col span="8">
					<div style="font-size: 18px;font-family: D-DIN,D-DIN-DIN-Bold;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 10px;"><span>搜作品</span></div>
					<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #babec4;line-height: 14px;margin-top: 17px;">海量作品任意搜</div>
				</el-col>
			</el-roW>
		</el-col>
		<el-col :span="6" style="background-color: #Fff;height: 100px;">
			<el-row style="height: 20px;"></el-row>
			<el-roW >
				<el-col span="6"><span>&nbsp;</span></el-col>
				<el-col span="4"><img src="./sy4.png"/></el-col>
				<el-col span="0.7"><span>&nbsp;</span></el-col>
				<el-col span="9">
					<div style="font-size: 18px;font-family: D-DIN,D-DIN-DIN-Bold;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span>观档案</span></div>
					<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #babec4;line-height: 14px;margin-top: 15px;">偶像档案深入观察</div>
				</el-col>
			</el-roW>
		</el-col>
		<el-col :span="6" style="background-color: #Fff;height: 100px;">
			<el-row style="height: 20px;"></el-row>
			<el-roW >
				<el-col span="6"><span>&nbsp;</span></el-col>
				<el-col span="4"><img src="./sy5.png"/></el-col>
				<el-col span="0.7"><span>&nbsp;</span></el-col>
				<el-col span="9">
					<div style="font-size: 18px;font-family: D-DIN,D-DIN-DIN-Bold;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 6px;"><span>加关注</span></div>
					<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #babec4;line-height: 14px;margin-top: 13px;">关注收藏偶像作品</div>
				</el-col>
			</el-roW>
		</el-col>
	</el-row>
    <el-row :gutter="20" > <!-- gutter 属性来设置方格之间的距离 -->
      <el-col :span="8"> 
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="padding-left: 22px;" >演员</span>
            <!-- <el-button style="float: right; padding: 3px 0;color: #c9cdd4;" type="text" >
              <el-link href="https://bbs.django-vue-admin.com" target="_blank" type="primary"  >更多</el-link>
            </el-button> -->
          </div>
          <el-row>
              <el-col :span="24" v-for="({name,imageUrl,slogan,link,fans},index) in actor" :key="index">
                <el-row class="project-detail" style="">
					<el-col :span="1">
						<span>&nbsp;</span>
					</el-col>
					<el-col :span="6">
						<div class="circular" style="width: 50px;height: 50px"><img :src="imageUrl"></div>
					</el-col>
					<el-col :span="10" >
						<div style="padding-top: 3px;    height: 22px;font-size: 14px;font-weight: 400;color: #4e5969;line-height: 22px;transition: all .2s;cursor: pointer;"><span v-text="name" ></span></div>
						<div class="tag-box text-one" style="background-color: #f7f8fa;overflow: hidden;margin-top: 6px; color: #86909c;    display: inline-block;height: 22px;line-height: 22px;    border-radius: 2px;font-size: 12px;">
							<span class="gray" v-text="slogan"></span>
						</div>
					<!-- <div v-text="slogan" class="slogan" :title="slogan"></div> -->
					</el-col>
					<el-col :span="6">
						<div style="font-size: 18px;font-family: D-DIN,D-DIN-DIN-Bold;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span v-text="fans"></span></div>
						<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #c9cdd4;line-height: 14px;margin-top: 15px;">微博粉丝数</div>
					</el-col>
                </el-row>

              </el-col>
          </el-row>
        </el-card>
      </el-col>
	  
	  <el-col :span="8">
	    <el-card class="box-card">
	      <div slot="header" class="clearfix">
	        <span>歌手</span>
	        <!-- <el-button style="float: right; padding: 3px 0" type="text">
	          <el-link href="https://bbs.django-vue-admin.com" target="_blank" type="primary">更多</el-link>
	        </el-button> -->
	      </div>
		  <el-row>
		      <el-col :span="24" v-for="({name,imageUrl,slogan,link,fans},index) in singer" :key="index">
		        <el-row class="project-detail" style="">
		  					<el-col :span="1">
		  						<span>&nbsp;</span>
		  					</el-col>
		  					<el-col :span="6">
		  						<div class="circular" style="width: 50px;height: 50px"><img :src="imageUrl"></div>
		  					</el-col>
		  					<el-col :span="10" >
		  						<div style="padding-top: 3px;    height: 22px;font-size: 14px;font-weight: 400;color: #4e5969;line-height: 22px;transition: all .2s;cursor: pointer;"><span v-text="name" ></span></div>
		  						<div class="tag-box text-one" style="background-color: #f7f8fa;overflow: hidden;margin-top: 6px; color: #86909c;    display: inline-block;height: 22px;line-height: 22px;    border-radius: 2px;font-size: 12px;">
		  							<span class="gray" v-text="slogan"></span>
		  						</div>
		  					<!-- <div v-text="slogan" class="slogan" :title="slogan"></div> -->
		  					</el-col>
		  					<el-col :span="6">
		  						<div style="font-size: 18px;font-family: D-DIN,D-DIN-DIN-Bold;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span v-text="fans"></span></div>
		  						<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #c9cdd4;line-height: 14px;margin-top: 15px;">微博粉丝数</div>
		  					</el-col>
		        </el-row>
		  
		      </el-col>
		  </el-row>
	      
	    </el-card>
	  </el-col>
	  
	  <el-col :span="8">
	    <el-card class="box-card">
	      <div slot="header" class="clearfix">
	        <span>主持人</span>
	        <!-- <el-button style="float: right; padding: 3px 0" type="text">
	          <el-link href="https://bbs.django-vue-admin.com" target="_blank" type="primary">更多</el-link>
	        </el-button> -->
	      </div>
	      <el-row>
	          <el-col :span="24" v-for="({name,imageUrl,slogan,link,fans},index) in host" :key="index">
	            <el-row class="project-detail" style="">
	      					<el-col :span="1">
	      						<span>&nbsp;</span>
	      					</el-col>
	      					<el-col :span="6">
	      						<div class="circular" style="width: 50px;height: 50px"><img :src="imageUrl"></div>
	      					</el-col>
	      					<el-col :span="10" >
	      						<div style="padding-top: 3px;    height: 22px;font-size: 14px;font-weight: 400;color: #4e5969;line-height: 22px;transition: all .2s;cursor: pointer;"><span v-text="name" ></span></div>
	      						<div class="tag-box text-one" style="background-color: #f7f8fa;overflow: hidden;margin-top: 6px; color: #86909c;    display: inline-block;height: 22px;line-height: 22px;    border-radius: 2px;font-size: 12px;">
	      							<span class="gray" v-text="slogan"></span>
	      						</div>
	      					<!-- <div v-text="slogan" class="slogan" :title="slogan"></div> -->
	      					</el-col>
	      					<el-col :span="6">
	      						<div style="font-size: 18px;font-family: D-DIN,D-DIN-DIN-Bold;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span v-text="fans"></span></div>
	      						<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #c9cdd4;line-height: 14px;margin-top: 15px;">微博粉丝数</div>
	      					</el-col>
	            </el-row>
	      
	          </el-col>
	      </el-row>
	    </el-card>
	  </el-col>

<!--      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card" >
            <div slot="header" class="clearfix">
              <span>快捷导航</span>
            </div>
            <el-row>
              <el-col :span="8" v-for="({name,icon,route,color},index) of navigators" :key="index" style="padding: 0">
                <el-card shadow="hover">
                  <div  style="display: flex;align-items: center;flex-direction: column;cursor: pointer" @click="()=>{gotoRoute(route)}">
                    <d2-icon-svg :name="icon" style="width: 25px;height: 25px;" :style="{fill:color}"/>
                    <div style="text-align: center;font-size: 12px;margin-top: 20px" v-text="name"></div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-card>

          <el-card class="box-card"  style="margin-top: 25px">
            <div class="work">
              <d2-icon-svg name="work" style="margin-left: 50%;transform: translateX(-50%);height: 216px"/>
            </div>
          </el-card>
        </div>
      </el-col> -->
    </el-row>

  </d2-container>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
// import VChart, { THEME_KEY } from 'vue-echarts'
import VChart from 'vue-echarts'
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])
	
	
	
export default {
  name: 'workbench',
  components: {
    VChart
  },
  // provide: {
  //   [THEME_KEY]: 'westeros'
  // },
  data () {
    return {
	
      actor: [
		  {
			name: '杨幂',
			imageUrl: '/image/idol_img/杨幂.jpg',
			slogan:'北京欢瑞世纪演艺..',
			link: 'http://django-vue-admin.com',
			fans:'1.12亿'
		  },
		{
		    name: '赵丽颖',
		    imageUrl: '/image/idol_img/赵丽颖.jpg',
		    slogan: '海润传媒',
		    link: 'http://bbs.django-vue-admin.com',
			fans:'9018.8万'
		},
        {
          name: '迪丽热巴',
          imageUrl:'/image/idol_img/迪丽热巴.jpg',
          slogan: '欢瑞世纪影视传媒..',
		  link: 'https://d2.pub/zh',
		  fans:'7848.3万'
        },
        {
          name: '杨洋',
          imageUrl:'/image/idol_img/杨洋.jpg',
          slogan: '北京荣信达影视艺..',
          link: 'https://simpleui.72wo.com/',
		  fans:'5689.7万'
        },
        {
          name: '吴磊',
          imageUrl:'/image/idol_img/吴磊.jpg',
          slogan: '北京荣信达影视艺..',
          link: 'http://ruoyi.vip/',
		  fans:'4758万'
        },
		
      ],
	  
	  singer: [
	  		  {
	  			name: '林俊杰',
	  			imageUrl: '/image/idol_img/林俊杰.jpg',
	  			slogan:'华纳唱片公司',
	  			link: 'http://django-vue-admin.com',
	  			fans:'5416.3万'
	  		  },
	  		{
	  		    name: '蔡依林',
	  		    imageUrl: '/image/idol_img/蔡依林.jpg',
	  		    slogan: '华纳唱片公司',
	  		    link: 'http://bbs.django-vue-admin.com',
	  			fans:'4263.3万'
	  		},
	    {
	      name: '张靓颖',
	      imageUrl:'/image/idol_img/张靓颖.jpg',
	      slogan: '环球唱片',
	  		  link: 'https://d2.pub/zh',
	  		  fans:'4321.8万'
	    },
	    {
	      name: '邓紫棋',
	      imageUrl:'/image/idol_img/邓紫棋.jpg',
	      slogan: '华纳唱片公司',
	      link: 'https://simpleui.72wo.com/',
	  		  fans:'3445.7万'
	    },
	    {
	      name: '张碧晨',
	      imageUrl:'/image/idol_img/张碧晨.jpg',
	      slogan: '华纳唱片公司',
	      link: 'http://ruoyi.vip/',
	  		  fans:'2633万'
	    },
	  		
	  ],
	  host: [
	  		  {
	  			name: '谢娜',
	  			imageUrl: '/image/idol_img/谢娜.jpg',
	  			slogan:'湖南广电',
	  			link: 'http://django-vue-admin.com',
	  			fans:'1.28亿'
	  		  },
	  		{
	  		    name: '何炅',
	  		    imageUrl: '/image/idol_img/何炅.jpg',
	  		    slogan: '湖南广电',
	  		    link: 'http://bbs.django-vue-admin.com',
	  			fans:'1.19亿'
	  		},
	    {
	      name: '朱丹',
	      imageUrl:'/image/idol_img/朱丹.jpg',
	      slogan: '浙江广电',
	  		  link: 'https://d2.pub/zh',
	  		  fans:'1301.1万'
	    },
		{
		  name: '沈梦辰',
		  imageUrl:'/image/idol_img/沈梦辰.jpg',
		  slogan: '湖南广电',
		  link: 'http://ruoyi.vip/',
			  fans:'936万'
		},
	    {
	      name: '谢楠',
	      imageUrl:'/image/idol_img/谢楠.jpg',
	      slogan: '湖南广电',
	      link: 'https://simpleui.72wo.com/',
	  		  fans:'777.3万'
	    },
	    
	  		
	  ],
	  option: {
	    textStyle: {
	      fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
	    },
	    title: {
	      text: 'Traffic Sources',
	      left: 'center'
	    },
	    tooltip: {
	      trigger: 'item',
	      formatter: '{a} <br/>{b} : {c} ({d}%)'
	    },
	    legend: {
	      orient: 'vertical',
	      left: 'left',
	      data: [
	        'Direct',
	        'Email',
	        'Ad Networks',
	        'Video Ads',
	        'Search Engines'
	      ]
	    },
	    series: [
	      {
	        name: 'Traffic Sources',
	        type: 'pie',
	        radius: '55%',
	        center: ['50%', '60%'],
	        data: [
	          { value: 335, name: 'Direct' },
	          { value: 310, name: 'Email' },
	          { value: 234, name: 'Ad Networks' },
	          { value: 135, name: 'Video Ads' },
	          { value: 1548, name: 'Search Engines' }
	        ],
	        emphasis: {
	          itemStyle: {
	            shadowBlur: 10,
	            shadowOffsetX: 0,
	            shadowColor: 'rgba(0, 0, 0, 0.5)'
	          }
	        }
	      }
	    ]
	  }
    }
  },
  methods: {
    gotoRoute (route) {
      this.$router.push(route)
    }
  },
  mounted: function() {
      const vm = this 
      vm.$nextTick(()=> {})
    } 
}
</script>

<!-- 
// import * as echarts from "echarts";

// export default {
//   data() {
//     return {
//       name: "张雪",
//       xData: ["2020-02", "2020-03", "2020-04", "2020-05"], //横坐标数据
//       yData: [30, 132, 80, 134] //纵坐标数据，与横坐标对应
//     };
//   },
//   mounted() {
//     this.initEcharts();
//   },
//   methods: {
//     initEcharts() {
//       const option = {
//         title: {
//           text: "ECharts 入门示例"
//         },
//         tooltip: {},
//         legend: {
//           data: ["销量"]
//         },
//         xAxis: {
//           data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
//         },
//         yAxis: {},
//         series: [
//           {
//             name: "销量",
//             type: "bar", //类型为柱状图
//             data: [5, 20, 36, 10, 10, 20]
//           }
//         ]
//       };
//       const myChart = echarts.init(document.getElementById("mychart"));// 图标初始化
//       myChart.setOption(option);// 渲染页面
//       //随着屏幕大小调节图表
//       window.addEventListener("resize", () => {
//         myChart.resize();
//       });
//     }
//   }
// };
 -->


<style scoped lang="scss">

  $userAvatarLength: 72px;

  .page-header{
    box-sizing: border-box;
    padding: 16px;
    .user-avatar{
        width: $userAvatarLength;
        height: $userAvatarLength;
        line-height: $userAvatarLength;
      display: inline-block;
    }

    .title{
      display: inline-block;
      padding: 0 0 0 15px;
      position: relative;
      top: -5px;

      h1{
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.75rem;
      }
      span{
        font-size: 14px;
        color: rgba(0,0,0,.45);
      }
    }

  }

  .project-detail{
    color: rgba(0,0,0,.45);
    height: 65px;

    .name{
      margin-left: 1rem;
      font-size: 1rem;
      line-height: 2rem;
      height: 2rem;
      display: inline-block;
      color: rgba(0,0,0,.85);
      position: relative;
      top: -5px;
    }
    .slogan{
      font-size: 12px;
      padding: 5px 0;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .team{
      font-size: 14px;
    }
  }

  .activity{
    padding: 0;
    .activity-avatar{
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
    .activity-detail{
      padding: 10px;
      line-height: 15px;
      font-size: 14px;
      color: rgba(0,0,0,.85);
    }
  }
  .chart {
    height: 408px;
  }

  .el-divider--horizontal{
    margin: 4px 0;
    background: 0 0;
    border-top: 1px solid #e8eaec;

  }
  .el-card, .el-message {
    border-radius: 0;
	background-color: #FFF;
  }
  .el-card, .el-message {
    // border-radius: 0;
  }
  .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
    box-shadow: none;
  }
  .el-card ::v-deep .el-card__header {
	  padding-top :15px;
	  padding-left: 10px;
	  height: 45px
    
    
  }

  .circular{
      position:relative;
      width:80px;
      height:80px;
      overflow:hidden;
      border-radius:50%;

  }
  .circular img{
      width:100%;
      height:auto;
  }
  .chart {
    height: 408px;
  }
  
  .d2-container-full__body{
	  background-color: #000000;
  }
  .llist-box{
	      color: #333;
	      font-size: 14px;
	      margin: 0;
	      padding: 0;
	      word-break: break-all;
	      box-sizing: border-box;
	      font-style: normal;
	      font-family: PingFang SC-Regular,PingFang SC;
	      margin-top: 12px;
  }
  .el-srolbar{
	      color: #333;
	      font-size: 14px;
	      margin: 0;
	      padding: 0;
	      word-break: break-all;
	      box-sizing: border-box;
	      font-style: normal;
	      font-family: PingFang SC-Regular,PingFang SC;
	      overflow: hidden;
	      position: relative;
	      height: 100%;
  }
  .dot{
	      cursor: pointer;
	      padding: 0;
	      word-break: break-all;
	      box-sizing: border-box;
	      font-style: normal;
	      font-family: PingFang SC-Regular,PingFang SC;
	      width: .5px;
	      height: 50px;
	      flex-shrink: 0;
	      background-color: #c9cdd4;
	      margin: 6px 13px -6px 6px;
  }
  .dot1{
	      cursor: pointer;
	      margin: 0;
	      padding: 0;
	      word-break: break-all;
	      box-sizing: border-box;
	      font-style: normal;
	      font-family: PingFang SC-Regular,PingFang SC;
	      position: absolute;
	      top: 6px;
	      left: 4px;
	      z-index: 5;
	      width: 5px;
	      height: 5px;
	      background-color: #3491fa;
	      border-radius: 50%;
  }
  .sycont{
	      cursor: pointer;
	      margin: 0;
	      padding: 0;
	      word-break: break-all;
	      box-sizing: border-box;
	      font-style: normal;
	      font-family: PingFang SC-Regular,PingFang SC;
  }
  .syt1{
	      cursor: pointer;
	      margin: 0;
	      padding: 0;
	      word-break: break-all;
	      box-sizing: border-box;
	      font-style: normal;
	      -webkit-line-clamp: 1;
	      overflow: hidden;
	      text-overflow: ellipsis;
	      display: -webkit-box;
	      -webkit-box-orient: vertical;
	      font-size: 14px;
	      font-family: PingFang SC,PingFang SC-Regular;
	      font-weight: 400;
	      color: #86909c;
	      height: 18px;
	      line-height: 18px;
	      transition: all .2s;
  }
  .sydate{
    cursor: pointer;
    margin: 0;
    padding: 0;
    word-break: break-all;
    box-sizing: border-box;
    font-style: normal;
    margin-top: 2px;
    height: 16px;
    font-size: 12px;
    font-family: PingFang SC,PingFang SC-Regular;
    font-weight: 400;
    color: #c9cdd4;
    line-height: 16px;
  }
</style>
