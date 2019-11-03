import request from '../../service/natwork.js'
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail:{},
    height:'250rpx'
  },
  handlDetails:function(){
    if(this.data.height=='250rpx'){
      this.setData({
        height:""
      })
    }else{
      this.setData({
        height: "250rpx"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let movieId = options.movieId;
    request('detailmovie?movieId=' + movieId).then(res=>{
      let movieDetail = res.data.data.detailMovie;
      let imgList = movieDetail.photos;
      for (var i = 0; i < imgList.length;i++){
        movieDetail.photos[i]=JSON.parse(JSON.stringify(imgList[i]).replace(/w.h\//g,""))
      }
      this.setData({
        movieDetail
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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