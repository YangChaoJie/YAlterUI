## TypeScript 学习 -- 2

#### 回顾上次分享的 ts

- tsconfig 解释 https://www.typescriptlang.org/tsconfig#resolveJsonModule

```javascript
"compilerOptions": {
   "target": "esnext", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'esnext'是指TypeScript支持的最高版本
   "useDefineForClassFields": true, // 兼容class 这个标志被用作迁移到类字段即将到来的标准版本的一部分
   "module": "esnext", // 设置程序的模块系统。 commonjs amd esnext
   "moduleResolution": "node", // 指定模块解析策略 classic node nodenext
   "strict": true,  // 启用所有严格类型检查选项
   "jsx": "preserve", // 控制如何在JavaScript文件中发出JSX构造。这只会影响以.tsx文件开头的JS文件的输出 react-jsx preserve
   "noImplicitThis": true, // 对隐含的“any”类型的“this”表达式引发错误
   "sourceMap": true, // 这些文件允许调试器和其他工具在实际使用发出的JavaScript文件时显示原始的TypeScript源代码。生成.map 文件
   "resolveJsonModule": true, // 允许导入json 模块
   "esModuleInterop": true, // TypeScript将CommonJS/AMD/UMD模块视为类似于ES6模块的模块
   "lib": ["esnext", "dom"] // TypeScript包括内置JS api(如Math)的默认类型定义集，以及浏览器环境(如document)的默认类型定义集。 指定要包含在编译中的库文件
}

```

- Volar 官方指定的 vue ts vscode 插件

#### 介绍比较重要的 ts 语法 原生 ts 类型

##### type 别名

type - 类型别名： 可以声明一个类型

```
 type StrOrNum = string|number;
 // Usage: just like any other notation
 var sample: StrOrNum;
 sample = 123;
 sample = '123'
```

我们可以为任何类型注释别名

```
 type = a | '1'
 type Text = string | { text: string };
 type Coordinates = [number, number];
 type Callback = (data: string) => void;
```

##### type 与 interface

- 相同点

1.  都可以描述一个对象或者函数

```
interface User {
 name: string
 age: number
}

interface SetUser {
 (name: string, age: number): void;
}

```

2.  都可以扩展和继承

```
interface Name {
  name: string;
}
interface User extends Name {
  age: number;
}

type Name = {
  name: string;
}
type User = Name & { age: number  };


type Name = {
  name: string;
}
interface User extends Name {
  age: number;
}


interface Name {
  name: string;
}
type User = Name & {
  age: number;
}

```

- 不同点
  type
  1） type 可以声明基本类型别名，联合类型，元组等类型 interface 不行
  2） type 语句中还可以使用 typeof 获取实例的 类型进行赋值
  3） 其他 type 可以 interface 不能

```
type StringOrNumber = string | number;
type Text = string | { text: string };
type NameLookup = Dictionary<string, Person>;
type Callback<T> = (data: T) => void;
type Pair<T> = [T, T];
type Coordinates = Pair<number>;
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

```

interface

1. interface 能够声明合并

```
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string
}
*/

```

#### turple 元组

- tuple 类型是数组的另一种类型，它可以精确地知道它包含了多少个元素，以及它在特定位置包含了哪些类型。

```
type StringNumberPair = [string, number];
function doSomething(pair: StringNumberPair) {
  const a = pair[0];

const a: string
  const b = pair[1];

const b: number
  // ...
}
```

#### infer 关键字

```
type GetFirstArgumentOfAnyFunction<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
) => any
  ? FirstArgument
  : never

type t = GetFirstArgumentOfAnyFunction<(name: string, age: number) => void>
// 用来推断第一个参数的类型

type a = ReturnType<() => void> // void
type b = ReturnType<() => string | number> // string | number
type c = ReturnType<() => any> // any

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type ArrayType<T> = T extends (infer Item)[] ? Item : T

type t = ArrayType<[string, number]> // string | number
```

分析下 vue 的类型系统
#### unknown 和 never

- unkown unknown is the set of all possible values. Any value can be assigned to a variable of type unknown. This means that unknown is a supertype of every other type. unknown is called the top type for that reason.
  Unknown 是所有可能值的集合。任何值都可以赋给类型未知的变量。这意味着 unknown 是所有其他类型的超类型。因此，Unknown 被称为顶级类型。
- never never is the empty set. There is no value that can be assigned to variable of type never. In fact, it is an error for the type of value to resolve to never because that would be a contradiction. The empty set can fit inside any other set, so never is a subtype of every other type. That is why never is called the bottom type.¹
- never 会是空集。没有值可以赋给类型为 never 的变量。事实上，将值类型解析为 never 是一个错误，因为这将是一个矛盾。空集合可以放在任何其他集合中，所以 never 是所有其他类型的子类型。这就是为什么不叫底型 ¹
- https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/

```
T | never ⇒ T
T & unknown ⇒ T
type numberU = number | unknown

let oo: numberU = 1
let oo1: numberU = 'p'
let oo2: never = 1
```
    
#### unknown 和 any
 unknown which is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type. 

 unknown是any的类型安全对应物。任何东西都可以赋值给unknown，但unknown只能赋给自身以及任何没有类型断言或基于控制流的窄化的东西。同样，如果不先断言或缩小到更特定的类型，则不允许对未知对象进行操作。

 ```
let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any 


let s1: string = vAny;     // Any is assignable to anything 
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable
 ```
=======

#### Utility Types

```
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

TypeScript 提供了几种实用程序类型来促进常见的类型转换。这些 type 在全局可用

#### vue type 类型使用

1. type-challenges
https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
2. 简单的 ts + vue3 例子
项目地址：https://github.com/YangChaoJie/YAlterUI/tree/main/example/pages/ts-app
