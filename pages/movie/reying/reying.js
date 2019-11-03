// pages/movie/reying/reying.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    reyingList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSkip(e){
      let movieId=e.currentTarget.dataset.movieid
      wx.navigateTo({
        url: `/pages/detail/detail?movieId=${movieId}`
      })
    }
  }
})
