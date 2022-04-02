// pages/post-detail/post-detail.js

import {postList} from "../../data/data.js"
// 引入 app
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        postData: {},
        collected: false,
        isPlaying: false,
        _pid: null, // 不做数据绑定的变量前面加上 “_”
        _postsCollected: {},
        _backgroundAudioManager: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const postData = postList[options.postId]
        const postsCollected = wx.getStorageSync('posts_collected')
        this.data._postsCollected = postsCollected
        this.data._pid = options.postId
        this.setData({
            postData: postData,
            collected: postsCollected[options.postId] === undefined ? false : postsCollected[options.postId],
            isPlaying: (options.postId == app.gPlayMusicPostId)
        })

        this.data._backgroundAudioManager = wx.getBackgroundAudioManager()
        this.data._backgroundAudioManager.onPlay(this.onMusicStart)
        this.data._backgroundAudioManager.onPause(this.onMusicStop)
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

    onCollect(event) { // async
        let postsCollected = this.data._postsCollected
        if (postsCollected == '') {
            postsCollected = {}
        }
        postsCollected[this.data._pid] = !this.data.collected
        wx.setStorageSync('posts_collected', postsCollected)
        
        wx.showToast({
            title: this.data.collected ? '取消收藏成功' : '收藏成功',
            icon: 'success',
            duration: 3000
        })

        // const res = await wx.showModal({
        //     title: '是否收藏文章'
        // })

        // if (res.confirm) {
        //     let postsCollected = this.data._postsCollected
        //     if (postsCollected == '') {
        //         postsCollected = {}
        //     }
        //     postsCollected[this.data._pid] = !this.data.collected
        //     wx.setStorageSync('posts_collected', postsCollected)
        //     this.setData({
        //         collected: !this.data.collected
        //     })
        // }
        
        this.setData({
            collected: !this.data.collected
        })
    },

    async onShare(event) {
        const res = await wx.showActionSheet({
            itemList: [
              '分享到QQ', 
              '分享到微信',
              '分享到微博'
            ],
            itemColor: '#23a0ff'
        })
        console.log(res)
    },

    onMusicStart(event) {
        const music = postList[this.data._pid].music
        this.data._backgroundAudioManager.src = music.url
        this.data._backgroundAudioManager.title = music.title
        this.data._backgroundAudioManager.coverImgUrl = music.coverImg
        this.setData({
            isPlaying: true
        })

        // 改变全局变量
        app.gPlayMusicPostId = this.data._pid
    },

    onMusicStop(event) {
        this.data._backgroundAudioManager.pause()
        this.setData({
            isPlaying: false
        })
        
        // 改变全局变量
        app.gPlayMusicPostId = null
    }
})