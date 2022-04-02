// pages/movie-detail/movie-detail.js
import {objectToString, objToArray} from "../../utils/utils"
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const mid = options.mid
        wx.request({
          url: app.gBaseUrl + 'subject/' + mid,
          success: (res) => {
            this.dealMovieData(res.data)
          }
        })
    },

    dealMovieData(movie) {
      console.log(movie)
      let data = {}
      data.castsStr = objectToString(movie.casts, ' / ')
      data.directorsStr = objectToString(movie.directors, ' / ')
      data.genresStr = movie.genres.join('、')
      data.title = movie.title
      data.image = movie.images.large
      data.subTitle = movie.countries[0] + ' · ' + movie.year
      data.wish_count = movie.wish_count
      data.comments_count = movie.comments_count
      data.ratingStars = movie.rating.stars/10
      data.ratingAverage = movie.rating.average
      data.summary = movie.summary ? movie.summary : '暂无简介'
      data.castsArray = objToArray(movie.casts)
      this.setData({
        movie: data
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

    },

    onVioewPost(event) {
        wx.previewImage({
          urls: [
              this.data.movie.images.large
          ],
        })
    }
})