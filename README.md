 11. 报错：
-  C:\Users\liuwenbin\git\HelloTs\main> tsc .\promise.ts
"promise.ts:2:16 - error TS2585: 'Promise' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the 'lib' compiler option to es2015 or later."
- 解决：npm install @types/node
- 原因：“在node中使用typescript时，这个包用来加载所有的类型定义”
- [NodeJs中的@types/node包是什么？](https://www.zhblog.net/qa/package-in-nodejs.html)

# 几个 “es5 es6 es2015” 概念
#### ES6 与 ECMAScript 2015 的关系:
1. ECMAScript 5.1, 2011年发布
2. ES6： 是一个泛指，5.1版以后的JavaScript的下一代标准，包括了ES2015、ES2016、ES2017等
    - ES2015：ES6 的第一个版本，**2015年发布**，全称“ECMAScript 2015 标准”
    - ES2016：2016年发布，与上一年的差异小(新增了数组实例的includes方法和指数运算符)
    - ES2017：2017年发布

#### ECMAScript 历史
1. ECMAScript 1.0 1997 
    - 第一版
2. ECMAScript 2.0 1998
3. ECMAScript 3.0 1999 
    - 巨大的成功，奠定了 **JavaScript 语言的基本语法**，以后的版本完全继承，初学者一开始学习 JavaScript，其实就是在学 3.0 版的语法。
4. [x] ECMAScript 4.0 2000, 没有通过，因为太激进，大部分内容被 ES6 继承
5. ECMAScript 5.0 2009, 其实是 ES3.1
6. **ECMAScript 6.0 2015，从开始指定到最后发布，用了15年**

#### ECMAScript和JavaScript的区别
**"JavaScript = ECMAScript + DOM + BOM"**
- JavaScript 
    - 其语法的标准化组织是ECMA
- DOM 
    - 标准化组织是W3C
- BOM 
    - 缺少标准化组织，最初是Netscape浏览器标准的一部分
    - 常见对象：window、location、history、navigator、screen、document、frames
- Node.js
    - 基于Chrome v8，v8用来解析执行JS，v8基于ECMAScript
    - 没有DOM、BOM操作，只保留JavaScript的语法核心ES，并且增加了事件驱动的非阻塞 I/O 模型，使其轻量级和高效
    - 作为服务运行在windows、linux、mac，**把js的角色从前台开发转移到了后台开发**
    - 本质： v8 + libuv + http/fs 等API的封装


# 好奇：js的效率不高，为什么要搞个nodejs让其跑在服务端？
1. 符合事件驱动(web的服务器的要点：事件驱动、非阻塞IO)
    - libevent、libev、libuv三个网络库，都是c语言实现的异步事件库
    - libuv: :开发node的过程中需要一个跨平台的事件库，他们首选了libev，但又要支持Windows，故重新封装了一套，linux下用libev实现，Windows下用IOCP实现；
2. 高性能(当时，第二次浏览器大战也渐渐分出高下,Chrome浏览器的JavaScript引擎V8摘得性能第一的桂冠)
3. 没有历史包袱(js很多年一直存在与前端，后端部分一直没有市场)
4. 开发门槛低，对前端dev友好