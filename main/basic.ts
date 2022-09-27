// const foo: number = 1;
// foo.length = 1;
// window.foo = 1;
// (window as any).foo = 1;

// tsc basic.ts && node basic.js

interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

const tom: Cat = {
    name:"cat",
    run() {
        console.log("running");
    }
}

// “类型断言”的用法: 值 as 类型
// 发生在编译期
function swim(animal: Cat| Fish) {
    // 如果在不确定类型的时候就想访问一个类型确定的属性和方法，就需要【断言】
    // 将变量animal断言为Fish类型，那么访问其swim属性，就可以通过编译器的检查。
    // "类型断言"相当于欺骗编译器，编译的时候不报错，不代表运行的时候不报错。
    (animal as Fish).swim();
}

// TypeError: animal.swim is not a function
// swim(tom);

// window.a = "hello world";
// 只是想给window添加一个属性，但因为window上并没有a属性，所以报错。此时，就需要将window断言为any：
// (window as any).a = "hello world";

// js运行在不同环境中，存在不同的全局对象，"globalThis"可代表
console.log("globalThis = " + globalThis);
// browser
console.log(globalThis); // => Window {...}
// node
console.log(globalThis); // => Object [global] {...}
// web worker
console.log(globalThis); // => DedicatedWorkerGlobalScope {...}


// “typeof” 的用法
type Person = {
    name: string;
    age: number;
}

let man: Person = {
    name: "Semlinker",
    age: 30
}

type Human = typeof man;
console.log("typeof man = " + typeof man);
console.log("typeof isFish = " + typeof isFish);

function isFish(animal: Cat | Fish) {
    if(typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}