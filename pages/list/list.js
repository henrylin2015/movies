// list.js
// Douban API 操作
const douban = require('../../utils/douban.js')
Page({
    data:{
	type:"正在上映",
	title:"",
	page: 1,
	size: 20,
	subtitle:'加载中...',
	city:"上海",
	loading:true,
	hasMore: true,
	movies: []
    },
    loadMore(){
	console.log("hasMore...")
	if(!that.data.hasMore) return
	that.setData({title:'加载中...',loading:true})
	douban.find(that.data.type, that.data.page++,that.data.size)
	    .then(d =>{
		if(d.subjects.length){
		    that.setData({title:d.title,movies:d.subjects,loading:false})
		}else{
		    that.setData({hasMore:false,loading:false})
		}
	    })
	    .catch(e => {
		that.setData({subtitle:'获取数据异常',movies:[],loading:false})
		console.error(e)
	    })
    },
    onLoad (params) {
	var that = this
	that.data.type = params.type || that.data.type
	douban.find(that.data.type, that.data.page++,that.data.size)
	    .then(d =>{
		if(d.subjects.length){
		    that.setData({title:d.title,movies:d.subjects,loading:false})
		}else{
		    that.setData({hasMore:false,loading:false})
		}
	    })
	    .catch(e => {
		that.setData({subtitle:'获取数据异常',movies:[],loading:false})
		console.error(e)
	    })
    },
    // 页面准备完成
    onReady() {
	wx.setNavigationBarTitle({ title: this.data.type + '·电影·豆瓣' })
    }
})