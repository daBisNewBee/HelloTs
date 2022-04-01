var message = "Hello World";
console.log(message);
console.warn("this is warn msg");
/**
 *
 * VSCode官网：
 * "https://code.visualstudio.com/docs/typescript/typescript-debugging"
 * 
 * 在终端编译ts：
 * 1. 编译*.ts文件成*.js:
 *    tsc helloworld.ts
 *  在当前目录生成 helloworld.js
 *
 * 2. 运行*.js:
 *    node helloworld.js
 *
 * 3. 指定"outDir"为“out”后，tsc
 *    在“out”下生成"helloworld.js"
 *
 * 5. "f5" 选择“Node.js” 的调试环境，加断点开始调试
 *
 * 在VSCode下编译ts：
 * 1. 全局安装：
 *   npm install -g typescript
 *
 * 2. 当前项目下安装：(避免和其他ts项目冲突)
 *  npm install --save-dev typescrip
 *
 * 3. 编译ts为js
 *  command + Shirt + B
 *  build: 仅构建
 *  watch: 观察changes，随时构建，类似"tsc -p ."
 *  默认配置位于：.vscode/tasks.json
 *
 * 选择TypeScript的版本：
 * workspace 和 VSCode 的ts 版本不同，可以在IDE右下角选择使用
 *
 *
 *  command + Shirt + P: 输入命令
 *
 *  比如，“TypeScript: Select TypeScript Version command.”：可以切换ts版本
 */ 
//# sourceMappingURL=helloworld.js.map