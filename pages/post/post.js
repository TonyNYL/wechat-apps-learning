// pages/post/post.js
var dataObj = require("../../data/data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // date: "Jan 28 2017",
    // title: "小时候的冰棍儿与雪糕",
    // postImg: "/images/post/post-4.jpg",
    // avatar: "/images/avatar/avatar-5.png",
    // content: "冰棍与雪糕绝不是同一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棍。时过境迁，...",
    // readingNum: 92,
    // collectionNum: 108,
    // commentNum: 7

    // object: {
    //   date: "Jan 28 2017"
    // },
    // title: "小时候的冰棍儿与雪糕",
    // postImg: "/images/post/post-4.jpg",
    // avatar: "/images/avatar/avatar-5.png",
    // content: "冰棍与雪糕绝不是同一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棍。时过境迁，...",
    // readingNum: 92,
    // collectionNum: {
    //   array:[108]
    // },
    // commentNum: 7
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log("onLoad:页面被加载");

    this.setData({
      postList:dataObj.postList
    })

    // this.setData({
    //   "title": "一根雪糕的经济学原理",
    //   "collectionNum.array[0]": 66,
    //   "object.date": "Jan 28 2019"
    // })


    // var iceCreamData = {
    //   object: {
    //     date: "Jan 28 2017"
    //   },
    //   title: "小时候的冰棍儿与雪糕",
    //   postImg: "/images/post/post-4.jpg",
    //   avatar: "/images/avatar/avatar-5.png",
    //   content: "冰棍与雪糕绝不是同一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棍。时过境迁，...",
    //   readingNum: 92,
    //   collectionNum: {
    //     array: [108]
    //   },
    //   commentNum: 7
    // }
    // this.setData({
    //   postData: iceCreamData
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady:页面被渲染");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow:页面被显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide:页面被隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload:页面被卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})