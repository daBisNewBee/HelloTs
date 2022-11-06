 11. 报错：
-  C:\Users\liuwenbin\git\HelloTs\main> tsc .\promise.ts
"promise.ts:2:16 - error TS2585: 'Promise' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the 'lib' compiler option to es2015 or later."
- 解决：npm install @types/node
- 原因：“在node中使用typescript时，这个包用来加载所有的类型定义”
- [NodeJs中的@types/node包是什么？](https://www.zhblog.net/qa/package-in-nodejs.html)

## 几个 “es5 es6 es2015” 概念

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
4. [x]ES4 2000, 没有通过，因为太激进，大部分内容被 ES6 继承
5. ES5 2009, 其实是 ES3.1
6. **ECMAScript 6.0 2015，从开始指定到最后发布，用了15年**
