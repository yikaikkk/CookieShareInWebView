<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
			<text class="title">{{number}}</text>
			<image src="headimg"></image>
		    <button @click="cookietest">cookie</button>
			 <button @click="sendPhoneNumber">redirect</button>
			<!-- <button class="testbutton" @click="test">test</button> -->
		
	</view>
</template>

<script>
	import axios from "axios";
import { useAttrs } from "vue";
    import wx from 'weixin-js-sdk'
	// import axios from 'axios'
	export default {
		data() {
			return {
				title: 'Hello',
				headimg:'',
				number:'12wqwqwe12eqweq'
			}
		},
		onLoad(options) {
			var phoneNumber=this.$route.query.number
			if(document.cookie==null){
				var name="phone",value=phoneNumber;
				var expires = "";
				var date = new Date();
				date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toUTCString();
				document.cookie = name + "=" + (value || "") + expires + "; path=/" + this.getDomain();
				console.log("cookie")
			}
			if(document.cookie!=null){
				var phoneNumber=document.cookie.phone;
				window.postMessage({
				  type: 'phone',
				  phone: phoneNumber
				}, '*');
				var cookieArray = document.cookie.split(';'); // 将所有 cookie 分割成单独的名称-值对
				var cookie,cookieValue;
				console.log('cookieArray:', cookieArray);
				for (var i = 0; i < cookieArray.length; i++) {
				    cookie = cookieArray[i].trim(); // 去除两端的空格
							
				    // 查找名称匹配的 cookie 并返回其值
				    if (cookie.indexOf("phone" + '=') ==0) {
				         cookieValue=cookie.substring(("phone").length + 1, cookie.length);
				    }
				}
				
				if (cookieValue) {
				    console.log('Cookie value:', cookieValue);
					this.number=cookieValue
				} else {
				    console.log('Cookie not found.');
				}
				console.log(document.cookie)
			}
		},
		methods: {
			getCookie(name) {
			    var cookieArray = document.cookie.split(';'); // 将所有 cookie 分割成单独的名称-值对
			    var cookie;
			    
			    for (var i = 0; i < cookieArray.length; i++) {
			        cookie = cookieArray[i].trim(); // 去除两端的空格
			
			        // 查找名称匹配的 cookie 并返回其值
			        if (cookie.indexOf(name + '=') === 0) {
			            return cookie.substring(name.length + 1, cookie.length);
			        }
			    }
			    
			    // 如果没有找到 cookie，返回 null 或者 undefined
			    return null;
			},
			ddddtest(){
				uni.request({
					url:'http://192.168.43.47:80/ddd',
					method:"GET",
					sslVerify: false,
					data:{
						phone:'12380808080'
					},
					success:res=>{
					console.log("success")
				}
				})
				
			},
			test(){
				const ua = navigator.userAgent.toLowerCase();
				console.log(ua)
				var isWeixin = ua.indexOf('micromessenger') != -1;
				if (isWeixin) {
				   // axios({
					  // method:'POST',
					  // url:'http://localhost:80/test/logtest',
					  // data:{
						 //  number:"123123123"
					  // }
				   // })
				   wx.miniProgram.navigateTo({
				   			   appId: 'wx2d018ee776a967fc',
				                  url:'../bindphone/bindphone',        // 指定跳转至小程序页面的路径
				                  success: (res) => {
				               	  console.log(res);   // 页面跳转成功的回调函数
				                  },
				                  fail: (err) => {
				               	  console.log(err);   // 页面跳转失败的回调函数
				                  }
				               });
				       
				　　}else{
				   　　 return false;      
				　　}
			},
			getDomain() {
			var host = location.hostname;
			var pos = host.indexOf(":");
			if (pos >= 0) {
			    host = host.substring(0, pos);
			}
			  return "." + host;
			},
			cookietest(){
				var name="phone",value="123123",days=7;
				var expires = "";
				    if (days) {
				        var date = new Date();
				        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				        expires = "; expires=" + date.toUTCString();
				    }
				    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=" + window.location.hostname;
				
				// 使用示例：设置一个名为 'testCookie'，值为 '123456'，有效期为 7 天的 cookie
			},
			sendPhoneNumber() {
			  wx.miniProgram.postMessage({
				  data: { phone:this.number}
				
			  })
			 wx.miniProgram.redirectTo({
			  			   appId: 'wx2d018ee776a967fc',
			                 url:'../bindphone/bindphone',        // 指定跳转至小程序页面的路径
			                 success: (res) => {
			              	  console.log(res);   // 页面跳转成功的回调函数
			                 },
			                 fail: (err) => {
			              	  console.log(err);   // 页面跳转失败的回调函数
			                 }
			              });
			  console.log("send")
			}
			

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		/* align-items: center;
		font-size: 36rpx;
		color: #8f8f94;
		margin-left: 300px; */
	}
	.testbutton{
		/* margin-right: 400px; */
	}
</style>
