1,rpx
rpx单位可以自适应所有机型的尺寸。
在 iPhone6 机型下，看到的图片尺寸大小（比如：200*200），如果用px表示，则要除以2（100px*100px），如果用rpx表示则不变（200rpx*200rpx）。
<view>标签，类似于html中的div来做页面布局，也可以用作容器。
页面跳转函数 
1，wx.navigateTo，跳转到一个子页面，可以返回到之前的页面，上一个页面的子页面（最多能跳转10次）。


wx.navigateTo({
  url: '/pages/posts/posts',
})
2，wx.redirectTo，不会保留父级页面
wx.redirectTo({
  url: '/pages/posts/posts',
})
3，不同：wx.navigateTo 不会关闭当前页面（父页面），会保留页面栈中的。wx.redirectTo 会把当前页面（父页面）销毁
bind 和 catch， catch 与 bind 不同，catch 会阻止事件向上冒泡（catch 阻止事件冒泡，不再向父节点传递）。
export 和 import ... from ...
# 导出
var postList = []
export {
  postList
}
# 导入
import {postList} from "../../data/data.js"
console.log(postList)
# 注意：这种方式的导入和导出 变量名(postList) 必须一致
小程序自定义属性 data-[属性名称]="[属性值]"，来自己定义属性。
把变量存储在 app.js 中，可以在其他页面用 getApp() 来获取存储的数据，但是存储的数据如果被更新不会被持久化，重新打开小程序之后就会被重置。
缓存 Storages（有点像前端的数据库），Storages 缓存是可以长久保存的，不像app.js中的变量是“会话”级别的，不会在小程序重启后被重置掉。
// 设置缓存
wx.setStorageSync('tmp-name', 'joe')

// 更新缓存
wx.setStorageSync('tmp-name', 'wang')

// 获取缓存
const tmpName = wx.getStorageSync('tmp-name')
console.log(tmpName)

// 删除指定的缓存
wx.removeStorageSync('tmp-name')

// 清理所有缓存
wx.clearStorageSync()
Page 中操作 data 是否影响数据绑定（影响页面对数据绑定的刷新）
// this.setData({...}) 这种方式 不但进行了数据绑定（会影响页面对数据绑定的刷新），还改变了 data 中对应的数据值
this.setData({
    collected: !this.data.collected
})

// 这种直接赋值的方式，只会改变 data 中对应数据的值，并不会 数据绑定（不会影响页面对数据绑定的刷新，页面不会有变化）
this.data.collected = !this.data.collected
跳转到含有 tabBar 页面使用 wx.switchTab 函数。
自定义组件设置属性，自定义组件的属性可以直接用做数据绑定，properties 和 data 中的变量都可以直接用做数据绑定。
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 这种方式可以指定默认值，type: 属性的类型，value: 属性的默认值
        // text: {
        //     type: String,
        //     value: "111"
        // }
        // 这种方式简洁，但是属性的默认值是当前数据类型的默认值 Number 类型默认是 “0”，String 默认值是 ""
        text: Number // text：属性名；Number：属性类型
    },


    /**
     * 组件的初始数据
     */
    data: {

    },
    ...
1
