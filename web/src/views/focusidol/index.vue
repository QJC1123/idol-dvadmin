<template>
	<!-- <el-row style="height: 80%;"> -->
		<d2-container :class="{ 'page-compact': crud.pageOptions.compact }" >
		  <!--    <template slot="header">测试页面1</template>-->
		  
		  
		  <el-row style="height: 100%;">
			  <d2-crud-x ref="d2Crud" v-bind="_crudProps" v-on="_crudListeners" style="padding-left: 50px;background-color: rgb(235,241,246);height: 70%;">
			    <div slot="header">
			      <crud-search
			        ref="search"
			        :options="crud.searchOptions"
			        @submit="handleSearch"
			      />
			      <el-button-group>
			        <el-button size="small" type="primary" @click="addRow"
			          ><i class="el-icon-plus" /> 新增</el-button
			        >
			      </el-button-group>
			    </div>
			  </d2-crud-x>
			  <el-row style="height: 30%;background-color: rgb(235,241,246);">
				  <el-col :span="24" style="padding-left: 50px;padding-top: 20px;">
				  		<el-card>
				  		  <div slot="header" class="clearfix">
				  		    <span>推荐明星</span>
				  		      <!-- <el-link href="https://bbs.django-vue-admin.com" target="_blank" type="primary">详情</el-link> -->
				  		    </el-button> 
				  		  </div>
				  		  <el-row>
				  		      <el-col :span="24" v-for="({name,imageUrl,slogan,link,fans},index) in actor" :key="index">
				  		        <el-row class="project-detail" style="">
				  		  					<el-col :span="0.5">
				  		  						<span>&nbsp;</span>
				  		  					</el-col>
				  		  					<el-col :span="3">
				  		  						<div class="circular" style="width: 50px;height: 50px"><img :src="imageUrl"></div>
				  		  					</el-col>
				  		  					<el-col :span="4" >
				  		  						<div style="padding-top: 3px;    height: 22px;font-size: 14px;font-weight: 400;color: #4e5969;line-height: 22px;transition: all .2s;cursor: pointer;"><span v-text="name" ></span></div>
				  		  						<div class="tag-box text-one" style="background-color: #f7f8fa;overflow: hidden;margin-top: 6px; color: #86909c;    display: inline-block;height: 22px;line-height: 22px;    border-radius: 2px;font-size: 12px;">
				  		  							<span class="gray" v-text="slogan"></span>
				  		  						</div>
				  		  					</el-col>
				  		  					<el-col :span="4">
				  		  						<div style="font-size: 18px;font-family: D-DIN,D-DIN-DIN-Bold;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span v-text="fans"></span></div>
				  		  						<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #c9cdd4;line-height: 14px;margin-top: 15px;">微博粉丝数</div>
				  		  					</el-col>
										
											<el-col :span="4">
												<div style="font-size: 18px;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span >68</span></div>
												<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #c9cdd4;line-height: 14px;margin-top: 15px;">作品数</div>
											</el-col>
											<el-col :span="4" >
												<div style="font-size: 18px;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span >女性</span></div>
												<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #c9cdd4;line-height: 14px;margin-top: 15px;">粉丝性别偏向</div>
											</el-col>
											<el-col :span="4">
												<div style="font-size: 18px;font-weight: 600;color: #1d2129;height: 18px;line-height: 18px;padding-top: 8px;"><span >河南</span></div>
												<div class="" :title="slogan" style="height: 14px;font-size: 12px;font-family: PingFang SC,PingFang SC-Regular;font-weight: 400;color: #c9cdd4;line-height: 14px;margin-top: 15px;">粉丝地区偏向</div>
											</el-col>
				  		        </el-row>
				  		  
				  		      </el-col>
				  		  </el-row>
				  		  
				  		</el-card>
				  	
				  </el-col>
				  
			  </el-row>
			  
		  </el-row>
		  
		</d2-container>
	<!-- </el-row> -->
	<!-- <el-row style="height: 20%;">
		
		<span>&nbsp;</span>
	</el-row>
	 -->
	
	
	
	
	<!-- <el-row gutter="20" style="height: 100%;" >
		
		<el-col :span="14" style="height: 100%;padding-left: 100px;">
			
		</el-col >

		<el-col :span="9" style="padding-left: 80px;">
			
				<el-card class="box-card">
				  <div slot="header" class="clearfix">
				    <span>推荐明星</span>
				      <el-link href="https://bbs.django-vue-admin.com" target="_blank" type="primary">更多</el-link>
				    </el-button> 
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
	</el-row> -->
		
		
		
	
	
	
  
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
export default {
  name: 'focusidol',
  mixins: [d2CrudPlus.crud],
  data () {
    return {
		actor: [

		  {
		    name: '杨洋',
		    imageUrl:'/image/idol_img/杨洋.jpg',
		    slogan: '北京荣信达影视艺..',
		    link: 'https://simpleui.72wo.com/',
			fans:'5689.7万',
			works:'68',
			loc:'河南',
			gender:'女性'
		  },
		  // {
		  //     name: '赵丽颖',
		  //     imageUrl: '/image/idol_img/赵丽颖.jpg',
		  //     slogan: '海润传媒',
		  //     link: 'http://bbs.django-vue-admin.com',
		  // 	fans:'9018.8万'
		  // },
		  		  
		  
				
		],
	}
  },
  methods: {
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
      return api.GetList(query)
    },
    addRequest (row) {
      d2CrudPlus.util.dict.clear()
      return api.createObj(row)
    },
    updateRequest (row) {
      d2CrudPlus.util.dict.clear()
      return api.UpdateObj(row)
    },
    delRequest (row) {
      return api.DelObj(row.id)
    },
    // 授权
    createPermission (scope) {
      this.$router.push({
        name: 'menuButton',
        params: { id: scope.row.id },
        query: { name: scope.row.name }
      })
    }
  }
}
</script>

<style lang="scss">
.yxtInput {
  .el-form-item__label {
    color: #49a1ff;
  }
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
</style>

