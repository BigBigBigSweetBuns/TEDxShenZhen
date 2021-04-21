# tedxshenzhen

构建基础的官网

着重设计于2021年的演讲宣传页

### 主要技术与框架

##### 前端页面

vue、vue-router、vuex、axios、sass

CSS图标库：font Awesome

样式和布局：bootstrap-vue

##### 后台服务器

nginx、expresss、mysql 

### 网页结构



### 开发日记

查阅网站设计图，提取出重复内容，将其模块化，如（page-header、page-footer）。



#### 自适应

分为 moblie 和 pc 端。小于 576px 的情况使用 mobile 端。

pc 使用 bootsrap 的 container,row, col 布局。



#### 模块化

先将默认数据填入到 props 中，构建html的结构，在全部模块添加完后添加css。

暂不实现后台数据。优先将网站实现初步内容。



#### 后台数据管理

数据不经常更新，不开发后台管理页面。同时不使用数据库，使用对象储存（json）文件。

请求后台的 express 的接口，express 来进行处理和返回 json 数据。

**曾经考虑1**

对象储存：一文件一对象。文件夹为对象组。

**曾经考虑2**

直接使用 对象储存数据库



#### 添加新文章

采用markdown编辑器进行编辑

path : /editMD



#### 取消邮件订阅服务

请求将表单内的数据发送至服务器。判断返回值，确认是否提交成功。



#### Page-header 模块

页面顶部内容：包含导航条、logo。

bootstrap 没有想要的相关的样式，手写了一个 Page-header 模块。

Page-header 模块需要分成 pc 端 和 mobile 端，通过判断 视图宽度 判断切换。

##### PC 端

分为两行 logo一行、导航条 一行，鼠标移动到上面是，向下显示子导航条。

##### mobile 端

页面顶部一行 logo 和 一个汉堡按钮，点击汉堡按钮，左侧弹出导航条页。

**难点**

动画效果

子导航条出现效果

通过锚定当前路由，高亮当前导航



#### Page-footer 模块

内容：邮件订阅服务、导航信息、网站信息、相关网站链接

##### mboile 端

取消了导航信息。扩大展示了相关网站链接。



#### docment.title 页面标题

给每个路由  meta 对象添加 title 属性。

通过全局路由拦截，在路由发生变化修改页面 title 。

```javascript
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + " - TEDx深圳";
  }
  next()
})
```

动态路由匹配时，数据加载完后调用

```javascript
changeDowcumentTitle(title) {
   document.title = title + " - TEDx深圳";
},
```



#### 分页列表请求

该效果主要集中在视频和文章页面。每12个为一页内容。

该功能主要由后端实现，前端通过get请求，设置page参数，获取不同页面。 



#### 文章展示

通过 iframe 嵌套网页来展示。2021-04-16

准备转化为 字符串储存HTML  取消 iframe 嵌套方式。



#### 视频展示

通过 外链 bilibili 视频。 2021-04-16

**更新**

使用 阿里云对象储存。 2021-04-20



#### vuex 

管理 弹窗组件和加载动画组件状态



### 邮件订阅/退订

将订阅 / 退订分为两个表。

```
{
	email    : String,
	createTS : Number, // 时间戳
}
```

退订

```
{
	id       : Number,
	email    : String,
	createTS : Number, // 时间戳
}
```

提取 订阅/退订 列表需要账密。



#### 动画效果

每个网页载入动画，待加载动画。

每个页面添加banner 和 部分展示文本