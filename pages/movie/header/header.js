// pages/movie/reying/reying.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:['热映','待映']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCilick(event){
      const currentIndex = event.currentTarget.dataset.index
      this.setData({
        currentIndex
      })
      this.triggerEvent('myevent', {currentIndex})
    }
  }
})
