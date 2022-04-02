// pages/posts/posts.js
import {postList} from "../../data/data.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        postList: {}
    },

    /**
     * 生命周期函数--监听页面加载
     * 钩子函数 hook function
     * 条件渲染
     */
    onLoad (options) {
        // wx.setStorageSync('tmp-name', 'joe')
        // wx.setStorageSync('tmp-name', 'wang')
        // wx.setStorageSync('tmp-age', 18);

        // const tmpName = wx.getStorageSync('tmp-name')
        // const tmpName = await wx.getStorage({
        //     key: 'tmp-name'
        // })
        // console.log(tmpName)
        // wx.clearStorageSync()
        // wx.removeStorageSync('tmp-name')
        this.setData({
            postList
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log('Ready')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log('show')
    },

    /**
     * 生命周期函数--监听页面隐藏
     * 条件触发
     */
    onHide: function () {
        // console.log('hide')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        // console.log('onUnload')
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

    onGoToDetail(event) {
        const postId = event.currentTarget.dataset.postId
        wx.navigateTo({
            url: '/pages/post-detail/post-detail?postId=' + postId,
        })
    }
})