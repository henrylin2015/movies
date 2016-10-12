// board.js
Page({
    data: {
	title: "board",
	imgUrl: [
	    'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2380677316.jpg',
	    'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg',
	    'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2382529006.jpg',
	    'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2377470803.jpg',
	    'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2380681527.jpg'
	],
	boards:[
	    {key:'in_theaters',name:'正在热映'},
	    {key:'coming_soon',name:'即将上映'},
	    {key:'top250',name:'Top250'},
	    {key:'weekly',name:'口碑榜'},
	    {key:'us_box',name:'北美票房榜'},
	    {key:'new_movies',name:'新片榜'}
	]
    }
})