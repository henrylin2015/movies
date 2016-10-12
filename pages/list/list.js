// list.js
Page({
    data:{
	type:"正在上映",
	title:"正在上映的电影-北京",
	img: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2380677316.jpg"
    },
    onLoad () {
	console.log("list")
    },
    // 页面准备完成
    onReady() {
	wx.setNavigationBarTitle({ title: this.data.type + '·电影·豆瓣' })
    }
})