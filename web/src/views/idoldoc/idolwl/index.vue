<template>
  <el-row :gutter="20" class="elrow1">
	  <!-- 简介 -->
  	<el-col span="6" style="height: 100%;padding-left: 30px;padding-top: 20px;padding-bottom: 18px;">
  		<div style="height: 100%;padding-left: 10px;background-color: white;">
  			<el-row class="jj1" style="height: 13%;">
  				<el-col :span="8">
					<!-- 头像 -->
  					<div class="circular"><img :src="require('@/assets/idolimg/吴磊.jpg')"></div>  
  				</el-col>
  				<el-col :span="8" >
					<!-- 姓名 -->
  					<div style="padding-top: 15px;"><span class="name">吴磊</span></div>
					<!-- 地址 -->
  					<div class="slogan">&nbsp;&nbsp;&nbsp;&nbsp;中国&nbsp;&nbsp;上海</div>
  				</el-col>
  				<el-col :span="8" >
  					<el-row style="padding-top: 20px;"> <span >&nbsp;</span> </el-row>
  					<el-row>
  						<div class="shoucang" @mouseover="gz" @mouseleave="mgz" :style="scstyle" style="width: 80%;">
  							<!-- <i class="iconfont icon-shoucang-1" ></i> -->
  							<i style="padding-right: 2px;"></i>
  							已关注
  						</div>
  					</el-row>
  				</el-col>
  			</el-row>
  			<el-row class="jj2" style="height: 10%;">
				<!-- 类别 -->
  				<el-row>
  					<span>&nbsp;</span>
  					<span class="orange-t" data-v-0355f41b="">&nbsp;&nbsp;&nbsp;&nbsp;演员&nbsp;&nbsp;&nbsp;&nbsp;</span>
  					<span>&nbsp;&nbsp;&nbsp;</span>
  					<span class="orange-t" data-v-0355f41b="">&nbsp;&nbsp;&nbsp;&nbsp;1999-12-16&nbsp;&nbsp;&nbsp;&nbsp;</span>
  				</el-row>
				<!-- 公司 -->
  				<el-row style="padding-top: 2px;">
  					<span>&nbsp;</span>
  					<span class="orange-t" data-v-0355f41b="">&nbsp;&nbsp;&nbsp;&nbsp;北京荣信达影视艺术有限公司&nbsp;&nbsp;&nbsp;&nbsp;</span>
  					<span>&nbsp;&nbsp;&nbsp;</span>
  				</el-row>
				<!-- 微博简介 -->
  				<el-row style="padding-top: 5px;">
  					<!-- <span class="el-only-child__content el-tooltip__trigger el-tooltip__trigger"> 简介：作品:#《长歌行》《启航：当风起时》《穿越火线》《盛夏未来》《我和我的父辈》《宠爱》工作邮箱:wulei_1226@163.com</span> -->
  					<span class="el-only-child__content el-tooltip__trigger el-tooltip__trigger" > 简介：作品:#《长歌行》《启航：当风...</span>
  				</el-row>
  			</el-row>
			<!-- 身高体重爱好宗教星座 -->
  			<el-row class="jj3" style="height: 18%;">
  				<el-row><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;身高：178cm&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  				<el-row style="padding-top: 7px;"><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;体重：58kg&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  				<el-row style="padding-top: 7px;"><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;星座：摩羯座&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  				<el-row style="padding-top: 7px;"><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;宗教：佛教&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  				<el-row style="padding-top: 7px;"><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;爱好：唱歌，演戏&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  			</el-row>
  			<el-row class="jj4" >
  				<div class="title1" style="padding-left: 10px;">数据概览</div>
  				<div class="count-box" style="height: 20px;" >
  					<div class="seven-total" style="height: 20px;" >
  						<div class="num" >4757.6万</div>
  						<div class="total" >粉丝总数</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">115</div>
  						<div class="total" data-v-0355f41b="">作品总数</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">32%</div>
  						<div class="total" data-v-0355f41b="">活跃粉丝</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">河南</div>
  						<div class="total" data-v-0355f41b="">地区偏向</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">女性</div>
  						<div class="total" data-v-0355f41b="">性别偏向</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">较优</div>
  						<div class="total" data-v-0355f41b="">作品质量</div>
  					</div>
  				</div>
  			</el-row>
  		</div>
  	</el-col >
	<!-- 简介结束 -->
  	<el-col span="18">
  		<div class="page1" style="padding-top: 20px;">
  		  <el-tabs v-model="activeName" @tab-click="handleClick" >
			  <el-tab-pane label="作品分析" name="1">
				<el-row>
			      <el-row :gutter="20" class="zp1">
					
			      	<el-card class="box-card" >
			      	  <div slot="header" class="clearfix">
			      	    <span>数据概览</span>
			      	  </div>
			      	  <div>
			      		  <el-row>
			      		  	<el-col :span="12">
			      		  		<div class="fs1-distr-cont" >
			      		  			<div class="fs1-left" >·作品数·</div>
			      		  			<div class="fs1-right">
			      		  				<div class="fs1-d1 pink" >
			      		  					<!-- <i class="iconfont el-icon-plus"></i> -->
			      		  					<!-- <span class="fs1-d1-span">女性</span> -->
			      		  				</div>
			      		  				<div class="fs1-border"></div>
			      		  				<div class="fs1-d2">115</div>
			      		  			</div>
			      		  		</div>
			      		  	</el-col>
			      		  	<el-col :span="12">
			      		  		<div class="fs1-distr-cont" >
			      		  			<div class="fs1-left" >·未上映·</div>
			      		  			<div class="fs1-right">
			      		  				<div class="fs1-d1 orange" >
			      		  					<!-- <i class="iconfont el-icon-plus"></i> -->
			      		  					<!-- <span class="fs1-d1-span" style="color: orange;">广东</span> -->
			      		  				</div>
			      		  				<div class="fs1-border"></div>
			      		  				<div class="fs1-d2">10</div>
			      		  			</div>
			      		  		</div>
			      		  	</el-col>
			      		  </el-row>
			      	  </div>
			      	</el-card>
			      </el-row>
				  <el-row class="zp2">
					  <el-card class="box-card" >
					    <div slot="header" class="clearfix">
					      <span>总活动趋势</span>
					    </div>
						<div id="workyear" style="width: 100%;height: 200px;"></div>
					    <!-- <div style="height:200px;"></div> -->
					  </el-card>
				  </el-row>
				  <el-row :gutter="20" class="zp3" >
					  <el-col :span="12">
					  	<el-card class="box-card" >
					  	  <div slot="header" class="clearfix">
					  	    <span>作品类型</span>
					  	  </div>
						  
						<div id="zplx" style="width: 100%;height: 200px;"></div>
						  
					  	  <!-- <div style="height:200px;"></div> -->
					  	  <!-- <div id="mStudyTime" style="width: 100%; height: 300px;"></div> -->
					  	</el-card>
					  </el-col>
					  <el-col :span="12">
					  	<el-card class="box-card" >
					  	  <div slot="header" class="clearfix">
					  	    <span>作品质量</span>
					  	  </div>
						  <div id="zpzl" style="height: 200px;"></div>
					  	  
					  	</el-card>
					  </el-col>
				  </el-row>

			    </el-row>
			  </el-tab-pane>
			  
			  <el-tab-pane label="粉丝画像" name="2">
			    <el-row :gutter="20" class="fs1">
					<el-card class="box-card" >
					  <div slot="header" class="clearfix">
					    <span>数据概览</span>
					  </div>
					  <div>
						  <el-row>
						  	<el-col :span="12">
						  		<div class="fs1-distr-cont" >
						  			<div class="fs1-left" >·主要性别·</div>
						  			<div class="fs1-right">
						  				<div class="fs1-d1 pink" >
						  					<!-- <i class="iconfont el-icon-plus"></i> -->
						  					<span class="fs1-d1-span">女性</span>
						  				</div>
						  				<div class="fs1-border"></div>
						  				<div class="fs1-d2">68%</div>
						  			</div>
						  		</div>
						  	</el-col>
						  	<el-col :span="12">
						  		<div class="fs1-distr-cont" >
						  			<div class="fs1-left" >·主要地区·</div>
						  			<div class="fs1-right">
						  				<div class="fs1-d1 orange" >
						  					<!-- <i class="iconfont el-icon-plus"></i> -->
						  					<span class="fs1-d1-span" style="color: orange;">河南</span>
						  				</div>
						  				<div class="fs1-border"></div>
						  				<div class="fs1-d2">10.35%</div>
						  			</div>
						  		</div>
						  	</el-col>
						  </el-row>
					  </div>
					</el-card>
			  	<!-- <el-row>
			  		<div class="title2" style="padding-left: 20px;">数据概览</div>
			  	</el-row> -->
			  	<!-- <el-row>
			  		<el-col :span="12">
			  			<div class="fs1-distr-cont" >
			  				<div class="fs1-left" >·主要性别·</div>
			  				<div class="fs1-right">
			  					<div class="fs1-d1 pink" >
			  						<span class="fs1-d1-span">女性</span>
			  					</div>
			  					<div class="fs1-border"></div>
			  					<div class="fs1-d2">72.44%</div>
			  				</div>
			  			</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="fs1-distr-cont" >
			  				<div class="fs1-left" >·主要地区·</div>
			  				<div class="fs1-right">
			  					<div class="fs1-d1 pink" >
			  						<span class="fs1-d1-span">广东</span>
			  					</div>
			  					<div class="fs1-border"></div>
			  					<div class="fs1-d2">10.35%</div>
			  				</div>
			  			</div>
			  		</el-col>
			  	</el-row> -->
			  	<!-- <i class="iconfont icon-nvshi" data-v-3f12d7d2=""></i> -->
			    </el-row>
			    <el-row :gutter="20" class="fs2">
					<el-col :span="12">
						<el-card class="box-card" >
						  <div slot="header" class="clearfix">
						    <span>去水粉丝占比</span>
						  </div>
						  
						  <div id="qsfs" style="height:125px;"></div>
						  <!-- <div id="mStudyTime" style="width: 100%; height: 300px;"></div> -->
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card class="box-card" >
						  <div slot="header" class="clearfix">
						    <span>活跃粉丝占比</span>
						  </div>
						  <div id="hyfs" style="height:125px;"></div>
						</el-card>
					</el-col>
			    </el-row>
			    <el-row :gutter="20" class="fs3">
			    	<el-col :span="12">
			    		<el-card class="box-card" >
			    		  <div slot="header" class="clearfix">
			    		    <span>粉丝类型分布</span>
			    		  </div>
						  <div id="fslx" style="height: 200px;"></div>
			    		  <!-- <div style="height:200px;"></div> -->
			    		  <!-- <div id="mStudyTime" style="width: 100%; height: 300px;"></div> -->
			    		</el-card>
			    	</el-col>
			    	<el-col :span="12">
			    		<el-card class="box-card" >
			    		  <div slot="header" class="clearfix">
			    		    <span>粉丝性别比例</span>
			    		  </div>
						  <div id="fsxb" style="height: 200px;"></div>
			    		  <!-- <div style="height:200px;"></div> -->
			    		</el-card>
			    	</el-col>
			    </el-row>
			    <el-row :gutter="20" class="fs4">
					<el-card class="box-card" >
					  <div slot="header" class="clearfix">
					    <span>粉丝地区分布</span>
					  </div>
					  <div id="fanLocation" style="width: 100%; height: 200px;"></div>
					  <!-- <div style="height:200px;">
						  <div id="mStudyTime" style="width: 100%; height: 300px;"></div>
					  </div> -->
					</el-card>
		
			    </el-row>
			  </el-tab-pane>
  		    <el-tab-pane label="个人作品集" name="3">
				<v-zpj></v-zpj>
  		    </el-tab-pane>
  			
  		    
  		  </el-tabs>
  		</div>
  	</el-col>
  </el-row>
</template>

<script>
import util from '@/libs/util.js'
import { request } from '@/api/service'
import { mapActions } from 'vuex'
import * as api from './api'
import { d2CrudPlus } from 'd2-crud-plus'
import zpj from '../../tvwork/index.vue'


import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
// import VChart from 'vue-echarts'
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

import VChart, { THEME_KEY } from 'vue-echarts'
import Schart from 'vue-echarts';
	
	
	
export default {
  name: 'idolwl',
  components: {
    VChart,Schart,
	
	'v-zpj':zpj
  },
  mixins: [d2CrudPlus.crud],
  provide: {
    [THEME_KEY]: 'westeros'
  },
  data() {
	return {
		scstyle:'',
		// position: 'left',
		activeName: '1',
		myChart: '',
		fanLocation: '',
		workyear : '',
		zplx:'',
		zpzl:'',
		fsxb:'',
		fslx:'',
		qsfs:'',
		hyfs:'',
		chartVisible: true,
	}
  },
  mounted() {
  	this.fanLocationChart();
  	this.workyearChart();
  	this.zplxChart();
  	this.zpzlChart();
  	this.fsxbChart();
  	this.fslxChart();
	this.qsfsChart();
	this.hyfsChart();
      // 图标自适应（监听多个图表）
  	window.addEventListener('resize', () => {
  		this.fanLocation.resize();
  		this.workyear.resize();
  		this.zplx.resize();
  		this.zpzl.resize();
  		this.fsxb.resize();
  		this.fslx.resize();
		this.qsfs.resize();
		this.hyfs.resize();
  	});
  },
  methods:{
	  // tab切换
	  handleClick (tab, event) {
		if (this.activeName == '1') {
		    this.$nextTick(() => {
				
				this.workyear.resize();
				this.zplx.resize();
				this.zpzl.resize();
				
				// this.pieChart1.resize();
		    });
		}
		if (this.activeName == '2') {
		    this.$nextTick(() => {
				this.fanLocation.resize();
				this.fsxb.resize();
				this.fslx.resize();
				this.qsfs.resize();
				this.hyfs.resize();
				
		    });
		}
		if (this.activeName == '3') {
		    this.$nextTick(() => {
				// this.fanLocation.resize();
				// this.workyear.resize();
				// this.pieChart1.resize();
		    });
		}
		console.log(tab, event);
	 //    const _self = this
		// if (tab.name == "2") {
		//         this.$nextTick(()=>{
		// 			this.setMychart();
		        
		//         })
		//     return;
		// };
		// if (tab.name == "3") {
		//         this.$nextTick(()=>{
		// 			this.setMychart();
		          
		//         })
		//     return;
		// }
	  },
	  // handleClick(tab, event) {
	  //     console.log(tab, event);
	  // },
	  gz(){
	  	this.scstyle="color: #ff5500;border: 1px solid #ff5500;"
	  },
	  mgz(){
	  	this.scstyle=""
	  },
	  // 授权
	  createPermission (scope) {
	    this.$router.push({
	      name: 'menuButton',
	      params: { id: scope.row.id },
	      query: { name: scope.row.name }
	    })
	  },
	  //画图 粉丝地区分布
	  fanLocationChart() {
	      // 基于准备好的dom，初始化echarts实例
	      //重点
		  // const domMap = document.getElementById("fanLocation");
		  // // 清除Echarts默认添加的属性
		  // domMap.removeAttribute("_echarts_instance_");
		  // // let myChart = this.$echarts.init(domMap);
		  // this.fanLocation = this.$echarts.init(domMap);
		  
		  const dp = document.getElementById('fanLocation');
		  dp.removeAttribute("echarts_instance_");
		  this.fanLocation = this.$echarts.init(dp);
	      // this.fanLocation = this.$echarts.init(document.getElementById('fanLocation').removeAttribute("_echarts_instance_"));
	      // 绘制图表
	      this.fanLocation.setOption({
	          
			  grid:{
					left: "50",
				      top: "20",
				      right: "20",
				      bottom: "30",
				      containLabel: false  
			  },
	          tooltip: {},
	          xAxis: {
	              data: ['河南', '广东', '山东', '河北', '北京', '江苏', '四川', '湖南', '浙江', '重庆','新疆','上海','云南','湖北','安徽','陕西']
	          },
	          yAxis: {
				  type: 'value',
				  axisLabel: {formatter: '{value} %'},
			  },
	          series: [
	              {
	                  name: '人数百分比',
	                  type: 'bar',
					  barWidth:15,
	                  data: [10, 8,6,6,6,4,4,4,4,4,4,4,3,3,3,3],
					  itemStyle:{
						  normal:{
							  color:'rgba(136,202,100,0.6)'
							  // color:'#88ca64'
							  // color:'rgb(156, 196, 207)'
						  }
					  }
	              }
	          ]
	      });
	  },
	  //活动趋势图
	  workyearChart() {
	  //重点
	  
	      this.workyear = this.$echarts.init(document.getElementById('workyear'));
	      this.workyear.setOption({
	          
	          tooltip: {},
			  grid:{
				  left: "50",
				    top: "20",
				    right: "20",
				    bottom: "30",
				    containLabel: false  
			  },
	          xAxis: {
	              data: ['2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年']
	          },
	          yAxis: {
	              type: 'value'
	          },
	          series: [
	              {
	                  name: '活动作品数',
	                  type: 'line',
	                  data: [1,3,4,8,8,8,2,4,3,3,5,7,6,7,6,9,7,11],
					  itemStyle: {
					      normal: {
					          color: '#88ca64', //改变折线点的颜色   ;
					          lineStyle: {
					              color:'#88ca64' //改变折线颜色
					          }
					      }
					  },
					  // symbol:'none', //去掉折线图中的节点
					  // smooth: true  //true 为平滑曲线，false为直线
	              }
	          ]
	      });
	  },
	  //作品类型图
	  zplxChart(){
		  this.zplx = this.$echarts.init(document.getElementById('zplx'))
		  this.zplx.setOption({
		  textStyle: {
		    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
		  },
		  tooltip: {
		    trigger: 'item',
		    formatter: '{a} <br/>{b} : {c} ({d}%)'
		  },
		  legend: {
		    orient: 'vertical',
			y:'35%',
		    right: '10%',
		    data: [
		      '影视作品',
		      '综艺节目',
		    ]
		  },
		  series: [
		    {
		      name: '活动作品类型',
		      type: 'pie',
		      radius: '80%',
		      center: ['40%', '50%'],
			  label: {
			          normal: {
			              position: 'inner',
						  show:false
			          }
			     },
			     labelLine: {
			           normal: {
			              show: false
			     }
			    }, 
			  
		      data: [
		        { value: 88, name: '影视作品' },
		        { value: 27, name: '综艺节目' },
		      ],
			  itemStyle: {
			      normal: {
			      color: function(params) {
			              //自定义颜色
			              var colorList = [
			              'rgba(255, 139, 18, 0.7)',
						  'rgba(255, 139, 18, 0.3)',
			              ];
			              return colorList[params.dataIndex]
			          }
			      }
			  },
		      emphasis: {
		        itemStyle: {
		          shadowBlur: 10,
		          shadowOffsetX: 0,
		          shadowColor: 'rgba(0, 0, 0, 0.5)',
				  
				  }
		        },
				
		    }
		  ]
		})
	  },
	  //作品质量图
	  zpzlChart(){
		  this.zpzl = this.$echarts.init(document.getElementById('zpzl'))
		  this.zpzl.setOption({
			  
			    textStyle: {
			  		    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
			  	},
			    tooltip: {
			  		    trigger: 'item',
			  		    formatter: '{a} <br/>{b} : {c} ({d}%)'
			  		  },
			    legend: {
			      right:'10%',
			      orient: 'vertical',
			      y:'15%',
			    },
			    series: [
			      {
			        name: '作品豆瓣评分等级',
			        type: 'pie',
			        radius: ['40%', '70%'],
					center: ['40%', '50%'],
			        avoidLabelOverlap: false,
			        label: {
			          show: false,
			          position: 'center'
			        },
			        emphasis: {
			          label: {
			  
			            fontSize: '40',
			            fontWeight: 'bold'
			          }
			        },
			        labelLine: {
			          show: false
			        },
			        startAngle:90, //起始角度
			        data: [
			          { value: 0, name: '5星' },
			          { value: 41, name: '4星' },
			          { value: 33, name: '3星' },
			          { value: 8, name: '2星' },
			          { value: 1, name: '1星' }
			        ],
			        itemStyle: {
			  			      normal: {
			  			      color: function(params) {
			  			              //自定义颜色
			  			              var colorList = [
			  			         'rgba(255, 139, 18, 1.0)',
			  			         'rgba(255, 139, 18, 0.7)',
			  						  'rgba(255, 139, 18, 0.5)',
			  						  'rgba(255, 139, 18, 0.3)',
			  						  'rgba(255, 139, 18, 0.1)'
			  			              ];
			  			              return colorList[params.dataIndex]
			  			          }
			  			      }
			  			  },
			      }
			    ]
			  
		  })
	  },
	  //粉丝性别图
	  fsxbChart(){
	  		  this.fsxb = this.$echarts.init(document.getElementById('fsxb'))
	  		  this.fsxb.setOption({
	  		  textStyle: {
	  		    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
	  		  },
	  		  tooltip: {
	  		    trigger: 'item',
	  		    formatter: '{a} <br/>{b} :  {d}%'
	  		  },
	  		  legend: {
	  		    orient: 'vertical',
	  			y:'35%',
	  		    right: '10%',
	  		    data: [
	  		      '女',
	  		      '男',
	  		    ]
	  		  },
	  		  series: [
	  		    {
	  		      name: '粉丝性别比例',
	  		      type: 'pie',
	  		      radius: '80%',
	  		      center: ['40%', '50%'],
	  			  label: {
	  			          normal: {
	  			              position: 'inner',
	  						  show:false
	  			          }
	  			     },
	  			     labelLine: {
	  			           normal: {
	  			              show: false
	  			     }
	  			    }, 
	  			  
	  		      data: [
	  		        { value: 68, name: '女' },
	  		        { value: 32, name: '男' },
	  		      ],
	  			  itemStyle: {
	  			      normal: {
	  			      color: function(params) {
	  			              //自定义颜色
	  			              var colorList = [
								  
								  'rgba(255, 139, 18, 0.8)',
								  'rgba(255, 139, 18, 0.5)',
								
								//   'rgba(203, 172, 207, 0.8)',
								//   'rgba(203, 172, 207, 0.5)',
								
								// 'rgba(255, 215, 240, 1.0)',
								// 'rgba(255, 215, 240, 0.6)',
								// 'rgba(254,234,245,0.6)',
								
	  			              ];
	  			              return colorList[params.dataIndex]
	  			          }
	  			      }
	  			  },
	  		      emphasis: {
	  		        itemStyle: {
	  		          shadowBlur: 10,
	  		          shadowOffsetX: 0,
	  		          shadowColor: 'rgba(0, 0, 0, 0.5)',
	  				  
	  				  }
	  		        },
	  				
	  		    }
	  		  ]
	  		})
		},
		//粉丝类型分布图
		fslxChart(){
				  this.fslx = this.$echarts.init(document.getElementById('fslx'))
				  this.fslx.setOption({
					  
					    textStyle: {
					  		    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
					  	},
					    tooltip: {
					  		    trigger: 'item',
					  		    formatter: '{a} <br/>{b} :{d}%'
					  		  },
					    legend: {
					      right:'10%',
					      orient: 'vertical',
					      y:'15%',
					    },
					    series: [
					      {
					        name: '微博粉丝类型',
					        type: 'pie',
							radius: '80%',
					        // radius: ['40%', '70%'],
							center: ['40%', '50%'],
					        avoidLabelOverlap: false,
					        label: {
					          show: false,
					          position: 'center'
					        },
					        emphasis: {
					          label: {
					  
					            fontSize: '40',
					            fontWeight: 'bold'
					          }
					        },
					        labelLine: {
					          show: false
					        },
					        startAngle:90, //起始角度
					        data: [
					          { value: 4407, name: '小透明' },
					          { value: 247, name: '常驻博主' },
					          { value: 46, name: '资深博主' },
					          { value: 7, name: '微博红人' },
					          { value: 4, name: '微博大V' }
					        ],
					        itemStyle: {
					  			      normal: {
					  			      color: function(params) {
					  			              //自定义颜色
					  			              var colorList = [
												  
										'rgba(255, 139, 18, 0.1)',
										'rgba(255, 139, 18, 0.3)',
										'rgba(255, 139, 18, 0.5)',
										'rgba(255, 139, 18, 0.7)',
										'rgba(255, 139, 18, 1.0)',
										
										
										// 'rgba(203, 172, 207, 0.1)',
										// 'rgba(203, 172, 207, 0.3)',
										// 'rgba(203, 172, 207, 0.5)',
										// 'rgba(203, 172, 207, 0.7)',
										// 'rgba(203, 172, 207, 1.0)',
					  			
					  			              ];
					  			              return colorList[params.dataIndex]
					  			          }
					  			      }
					  			  },
					      }
					    ]
					  
				  })
		},
		//去水粉丝占比
		qsfsChart(){
				  this.qsfs = this.$echarts.init(document.getElementById('qsfs'))
				  this.qsfs.setOption({
					  
					    textStyle: {
					  		    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
					  	},
					    tooltip: {
					  		    trigger: 'item',
					  		    formatter: '{a} <br/>{b} :{d}%'
					  		  },
					    legend: {
					      right:'10%',
					      orient: 'vertical',
					      y:'15%',
						  show:false
					    },
					    series: [
					      {
					        name: '微博粉丝类型',
							startAngle:180, //起始角度
					        type: 'pie',
							// radius: '160%',
					        radius: ['80%', '160%'],
							center: ['50%', '80%'],
					        avoidLabelOverlap: false,
					        label: {
					          show: false,
					          position: 'center'
					        },
					        emphasis: {
					          label: {
					  
					            fontSize: '40',
					            fontWeight: 'bold'
					          }
					        },
					        labelLine: {
					          show: false
					        },
					        startAngle:180, //起始角度
					        data: [
					          { value: 2216, name: '水粉' },
					          { value: 2545, name: '活粉' },
							  { value: 4761, name: '总数' },
					         
					        ],
					        itemStyle: {
					  			      normal: {
					  			      color: function(params) {
					  			              //自定义颜色
					  			              var colorList = [
												  'rgba(255, 139, 18, 0.5)',
												  'rgba(255, 139, 18, 0.7)',
												  // 'rgba(203, 172, 207, 0.5)',
												  // 'rgba(203, 172, 207, 0.7)',
					  			              ];
					  			              return colorList[params.dataIndex]
					  			          }
					  			      }
					  			  },
					      }
					    ]
					  
				  })
		},
		//活跃粉丝占比
		hyfsChart(){
				  this.hyfs = this.$echarts.init(document.getElementById('hyfs'))
				  this.hyfs.setOption({
					  
					    textStyle: {
					  		    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
					  	},
					    tooltip: {
					  		    trigger: 'item',
					  		    formatter: '{a} <br/>{b} :{d}%'
					  		  },
					    legend: {
					      right:'10%',
					      orient: 'vertical',
					      y:'15%',
						  show:false
					    },
					    series: [
					      {
					        name: '微博粉丝类型',
							startAngle:180, //起始角度
					        type: 'pie',
							// radius: '160%',
					        radius: ['80%', '160%'],
							center: ['50%', '80%'],
					        avoidLabelOverlap: false,
					        label: {
					          show: false,
					          position: 'center'
					        },
					        emphasis: {
					          label: {
					  
					            fontSize: '40',
					            fontWeight: 'bold'
					          }
					        },
					        labelLine: {
					          show: false
					        },
					        startAngle:180, //起始角度
					        data: [
					          { value: 2216, name: '水粉' },
					          { value: 2545, name: '活粉' },
							  { value: 4761, name: '总数' },
					         
					        ],
					        itemStyle: {
					  			      normal: {
					  			      color: function(params) {
					  			              //自定义颜色
					  			              var colorList = [
												  'rgba(255, 139, 18, 0.5)',
												  'rgba(255, 139, 18, 0.7)',
												  // 'rgba(203, 172, 207, 0.5)',
												  // 'rgba(203, 172, 207, 0.7)',
												  
										
					  			
					  			              ];
					  			              return colorList[params.dataIndex]
					  			          }
					  			      }
					  			  },
					      }
					    ]
					  
				  })
		},
	  
  },

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
.elrow1{
	height: 100%;
}
.el-tab-pane {
  height: 700px;
  overflow-y: auto;
}
.jj1{
	
	// background-color: #ffff7f;
	height: 16%;
	width: 100%;
	// padding-bottom: 15px;
	padding-top: 30px;
	padding-left: 10px;
	
	
}
.jj2{
	// background-color: #ff297b;
	height: 13%;
	width: 100%;
	// padding-bottom: 15px;
	border-bottom: 1px solid #eff0f1;
	padding-left: 10px;
}

.jj3{
	padding-left: 10px;
	// background-color: #ffff7f;
	padding-top: 12px;
	height: 23%;
	width: 100%;
	padding-bottom: 12px;
	border-bottom: 1px solid #eff0f1;
	
}
.jj4{
	padding-top: 12px;
	padding-left: 10px;
	// background-color: #000000;
	height: 25%;
	width: 100%;
	padding-bottom: 12px;
	padding-right: 12px;
}

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
.shoucang{
	font-size: 12px;
	// margin-bottom: 10px;
	width: 80px;
	height: 32px;
	border-radius: 2px;
	border: 1px solid #c9cdd4;
	// border: 1px solid #ffaa00;  #ff8b12;
	// color: #ffaa00;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #4e5969;
	cursor: pointer;
	// padding-top: 20px;
}
.iconfont{
	font-family: iconfont!important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased
}
.icon-shoucang-1{
	color: #86909c;
	margin-right: 10px;
	height: 12px;
	line-height: 14px;
}
.orange-t{
	margin: 0;
	word-break: break-all;
	box-sizing: border-box;
	font-style: normal;
	display: inline-block;
	height: 22px;
	line-height: 22px;
	border-radius: 2px;
	font-size: 12px;
	font-family: PingFang SC-Regular,PingFang SC;
	font-weight: 400;
	padding: 0 4px;
	margin-right: 8px;
	margin-bottom: 5px;
	color: #ff8b12;
	background: #fff3e7;
}


.el-only-child__content 
{
	
	font-size: 12px;
	font-weight: 400;
	color: #4e5969;
	margin: 0;
	padding: 0;
	word-break: break-all;
	box-sizing: border-box;
	font-style: normal;
	font-family: PingFang SC-Regular,PingFang SC;
}
.pink-t{
	    margin: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-family: PingFang SC-Regular,PingFang SC;
	    display: inline-block;
	    background-color: #feeaf5;
	    font-size: 12px;
	    font-weight: 300;
	    color: #f5319d;
	    padding: 0 5px;
	    line-height: 22px;
	    border-radius: 22px;
}
.title1{
	    margin: 0;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-family: PingFang SC-Regular,PingFang SC;
	    font-size: 14px;
	    font-weight: 500;
	    color: #1d2129;
	    line-height: 22px;
		// padding-bottom: 12px;
		// border-bottom: 1px solid #eff0f1;
}
.title2{
	    margin: 0;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-family: PingFang SC-Regular,PingFang SC;
	    font-size: 14px;
	    font-weight: 500;
	    color: #1d2129;
	    line-height: 22px;
		padding-bottom: 12px;
		border-bottom: 1px solid #eff0f1;
}

.count-box
{
	    color: #333;
	    font-size: 14px;
	    margin: 0;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-family: PingFang SC-Regular,PingFang SC;
	    margin-top: 14px;
	    display: flex;
	    justify-content: space-between;
	    flex-wrap: wrap;
}
.seven-total{ 
	    color: #333;
	    font-size: 14px;
	    margin: 0;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-family: PingFang SC-Regular,PingFang SC;
	    width: 80px;
	    margin-bottom: 14px;
	    text-align: center;
	    line-height: 22px;
}
.num1{
	    text-align: center;
	    line-height: 22px;
	    margin: 0;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-size: 16px;
	    font-family: D-DIN Exp-Regular,D-DIN Exp;
	    font-weight: 400;
	    color: #1d2129;
}
.total{
	    text-align: center;
	    line-height: 22px;
	    margin: 0;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-family: PingFang SC-Regular,PingFang SC;
	    font-size: 12px;
	    font-weight: 400;
	    color: #86909c;
	    display: flex;
	    justify-content: center;
	    align-items: center;
}
#echartsa
{
	// width: 50%;
	height: 100px;
	width: 100px;
	border: 1px solid red;
}
.fs1{
	width: 100%;
	height: 28%;
	// padding-top: 30px;
	padding-left: 10px;
	// background-color: #000000;
}
.fs2{
	width: 100%;
	height: 36%;
	// padding-top: 30px;
	// padding-left: 10px;
	// background-color: #559e88;
}
.fs3{
	width: 100%;
	height: 45%;
	// padding-top: 30px;
	// padding-left: 10px;
	// background-color: #1d571f;
}
.fs4{
	width: 100%;
	height: 53%;
	// padding-top: 30px;
	// padding-left: 10px;
	// background-color: #a41b0e;
}
.fs1-distr-cont{
   color: #333;
    font-size: 14px;
    margin: 0;
    padding: 0;
    word-break: break-all;
    box-sizing: border-box;
    font-style: normal;
    font-family: PingFang SC-Regular,PingFang SC;
    flex: 1;
    height: 70px;
    background: #f7f8fa;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-left: 20px;
}

.fs1-left{
    margin: 0;
    word-break: break-all;
    box-sizing: border-box;
    font-style: normal;
    position: absolute;
    left: 0;
    padding: 0 14px;
    height: 26px;
    background: #f2f3f5;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: PingFang SC,PingFang SC-Regular;
    font-weight: 400;
    color: #4e5969;
}
.fs1-right{
    color: #333;
    font-size: 14px;
    margin: 0;
    padding: 0;
    word-break: break-all;
    box-sizing: border-box;
    font-style: normal;
    font-family: PingFang SC-Regular,PingFang SC;
    display: flex;
    align-items: center;
}
.fs1-d1{  
    margin: 0;
    padding: 0;
    word-break: break-all;
    box-sizing: border-box;
    font-style: normal;
    font-family: PingFang SC-Regular,PingFang SC;
    color: #f5319d;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;


}
.fs1-d1-span{
	    color: #f5319d;
	    font-weight: 400;
	    font-size: 14px;
	    margin: 0;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-family: PingFang SC-Regular,PingFang SC;
	    margin-left: 4px;
	    height: 14px;
	    line-height: 14px;
}
.fs1-border{	
	    color: #333;
	    font-size: 14px;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-family: PingFang SC-Regular,PingFang SC;
	    width: 1px;
	    height: 14px;
	    background-color: #e5e6eb;
	    margin: 0 10px;
}
.fs1-d2{
	    margin: 0;
	    padding: 0;
	    word-break: break-all;
	    box-sizing: border-box;
	    font-style: normal;
	    font-size: 16px;
	    font-family: D-DIN Exp,D-DIN Exp-DINExp-Bold;
	    font-weight: 600;
	    color: #1d2129;
	    height: 24px;
	    line-height: 24px;
}
.chart {
height: 408px;
}

.schart {
    width: 100%;
    height: 300px;
}

.zp1{
	width: 100%;
	height: 30%;
	
}

.zp2{
	padding-top: 20px;
	width: 100%;
	height: 50%;
	padding-right: 10px;
}

.zp3{
	padding-top: 20px;
	width: 100%;
	height: 390px;
	// background-color: #000000;
}
.el-tabs-content{
	height: 1000px
}
.el-col-18{
	height: 1000px
}
.page1{
	height: 1000px
}
.el-tabs{
	height: 1000px
}
.el-tabs__content{
	height: 1000px
}
</style>

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
