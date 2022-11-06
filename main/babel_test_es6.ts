// https://es6.ruanyifeng.com/#docs/intro

let array = [1,2,3,4,5];

let newArray = array.map( (item) => {
    return item * item
})

/*
babel(ES6转码器，好处是用ES6的方式写代码，运行在老版本浏览器中) 
转码后：ES6代码 -> ES5代码

# 转码结果输出到标准输出
$ npx babel example.js
var newArray = array.map(function (item) {
    return item * item;
  });
*/  

console.log(newArray)

/**
 * 
 *  一些babel的命令行：
 * 
# 转码结果输出到标准输出
$ npx babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ npx babel example.js --out-file compiled.js
# 或者
$ npx babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ npx babel src --out-dir lib
# 或者
$ npx babel src -d lib

# -s 参数生成source map文件
$ npx babel src -d lib -s
 * 
 */