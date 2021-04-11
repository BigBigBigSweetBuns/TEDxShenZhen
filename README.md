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

查阅网站设计图，提取出重复内容，将其模块化（page-header、page-footer）。



#### 自适应

分为 moblie 和 pc 端。小于 576px 的情况使用 mobile 端。

pc 使用 bootsrap 的 container 、row、 col 布局。



#### 模块化

先将默认数据填入到 props 中，构建html的结构，在全部模块添加完后添加css。

暂不实现后台数据。优先将网站实现初步内容。



#### 后台数据管理

数据不经常更新，不开发后台管理页面。同时不使用数据库，使用对象储存（json）文件。

请求后台的 express 的接口，express 来进行处理和返回 json 数据。

** 曾经考虑1：**

对象储存：一文件一对象。文件夹为对象组。

** 曾经考虑2**：

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



#### Page-footer 模块

内容：邮件订阅服务、导航信息、网站信息、相关网站链接

##### mboile 端

取消了导航信息。扩大展示了相关网站链接。