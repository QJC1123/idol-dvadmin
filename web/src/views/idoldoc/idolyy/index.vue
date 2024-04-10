<template>
  <el-row :gutter="20" class="elrow1">
  	<el-col span="6" style="height: 100%;">
  		<div style="height: 100%;padding-left: 10px;background-color: white;">
  			<el-row class="jj1">
  				<el-col :span="8">
  					<div class="circular"><img :src="require('@/assets/idolimg/杨洋.jpg')"></div>
  				</el-col>
  				<el-col :span="8" >
  					<div style="padding-top: 15px;"><span class="name">杨洋</span></div>
  					<div class="slogan">&nbsp;&nbsp;&nbsp;&nbsp;中国&nbsp;&nbsp;安徽合肥</div>
  				</el-col>
  				<el-col :span="8">
  					<el-row style="padding-top: 20px;"> <span >&nbsp;</span> </el-row>
  					<el-row>
  						<div class="shoucang" @mouseover="gz" @mouseleave="mgz" :style="scstyle">
  							<!-- <i class="iconfont icon-shoucang-1" ></i> -->
  							<i class="el-icon-plus" style="padding-right: 2px;"></i>
  							加入关注
  						</div>
  					</el-row>
  				</el-col>
  			</el-row>
  			<el-row class="jj2">
  				<el-row>
  					<span>&nbsp;</span>
  					<span class="orange-t" data-v-0355f41b="">&nbsp;&nbsp;&nbsp;&nbsp;演员&nbsp;&nbsp;&nbsp;&nbsp;</span>
  					<span>&nbsp;&nbsp;&nbsp;</span>
  					<span class="orange-t" data-v-0355f41b="">&nbsp;&nbsp;&nbsp;&nbsp;1991-9-9&nbsp;&nbsp;&nbsp;&nbsp;</span>
  				</el-row>
  				<el-row style="padding-top: 2px;">
  					<span>&nbsp;</span>
  					<span class="orange-t" data-v-0355f41b="">&nbsp;&nbsp;&nbsp;&nbsp;北京荣信达影视艺术有限公司&nbsp;&nbsp;&nbsp;&nbsp;</span>
  					<span>&nbsp;&nbsp;&nbsp;</span>
  				</el-row>
  				<el-row style="padding-top: 5px;">
  					<!-- <span class="el-only-child__content el-tooltip__trigger el-tooltip__trigger"> 简介：作品:#《我不是熊猫》《我的人间烟火》《特战荣耀》《你是我的荣耀》《全职高手》《三生三世十里桃花》《旋风少女》《盗墓笔记》</span> -->
  					<span class="el-only-child__content el-tooltip__trigger el-tooltip__trigger" > 简介：作品:#《我不是熊猫》《我的人间烟火》《特战荣耀》..</span>
  				</el-row>
  			</el-row>
  			<el-row class="jj3">
  				<el-row><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;身高：180cm&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  				<el-row style="padding-top: 7px;"><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;体重：58kg&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  				<el-row style="padding-top: 7px;"><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;星座：处女座&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  				<el-row style="padding-top: 7px;"><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;宗教：佛教&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  				<el-row style="padding-top: 7px;"><span class="pink-t">&nbsp;&nbsp;&nbsp;&nbsp;爱好：唱歌、弹吉他、游泳、跳舞&nbsp;&nbsp;&nbsp;&nbsp;</span></el-row>
  			
  			</el-row>
  			<el-row class="jj4">
  				<div class="title1" style="padding-left: 10px;">数据概览</div>
  				<div class="count-box" data-v-0355f41b="">
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">5689.7万</div>
  						<div class="total" data-v-0355f41b="">粉丝总数</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">68</div>
  						<div class="total" data-v-0355f41b="">作品总数</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">36%</div>
  						<div class="total" data-v-0355f41b="">活跃粉丝占比</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">河南</div>
  						<div class="total" data-v-0355f41b="">粉丝地区偏向</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">女性</div>
  						<div class="total" data-v-0355f41b="">粉丝偏向</div>
  					</div>
  					<div class="seven-total" data-v-0355f41b="">
  						<div class="num" data-v-0355f41b="">较优</div>
  						<div class="total" data-v-0355f41b="">作品质量</div>
  					</div>
  				</div>
  			</el-row>
  		</div>
  	</el-col >
  	<el-col span="18">
  		<div class="page1">
  		  <el-tabs v-model="activeName" @tab-click="handleClick">
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
			      		  				<div class="fs1-d2">68</div>
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
			      		  				<div class="fs1-d2">6</div>
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
  name: 'idolyy',
  components: {
    VChart,Schart
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
	      this.fanLocation = this.$echarts.init(document.getElementById('fanLocation'));
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
	                  data: [10,8,6,6,6,5,5,5,5,5,5,4,3,3,3,3],
					  itemStyle:{
						  normal:{
							  color:'rgba(136,202,100,0.6)'
							  // color:'#88ca64',
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
	                  data: [0,0,0,0,0,2,3,3,3,2,6,10,8,10,8,6],
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
		        { value: 50, name: '影视作品' },
		        { value: 18, name: '综艺节目' },
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
			          { value: 2, name: '5星' },
			          { value: 18, name: '4星' },
			          { value: 47, name: '3星' },
			          { value: 1, name: '2星' },
			          { value: 0, name: '1星' }
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
	  		        { value: 3199, name: '女' },
	  		        { value: 1583, name: '男' },
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
								// 'rgba(245,49,157,1.0)',
								// 'rgba(245,49,157,0.6)',
	  			              
	  						  // 'rgba(255, 139, 18, 0.5)',
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
					          { value: 3392, name: '小透明' },
					          { value: 779, name: '常驻博主' },
					          { value: 435, name: '资深博主' },
					          { value: 122, name: '微博红人' },
					          { value: 6, name: '微博大V' }
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
					          { value: 2202, name: '水粉' },
					          { value: 2532, name: '活粉' },
							  { value: 4734, name: '总数' },
					         
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
					          { value: 2202, name: '水粉' },
					          { value: 2532, name: '活粉' },
							  { value: 4734, name: '总数' },
					         
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

</style>
