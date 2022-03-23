type Test<T> = T extends number ? 1 : 2

type res = Test<1 | 'a'>

let a1: res = 1
// 1 | 2
console.log(typeof a1);

type Test1<T> = T extends true ? 1 : 2

type res1 = Test<boolean>

let a2: res1 = 2
// 1 | 2

// infer 使用 --------------------------------------
// type ParamType<T> = T extends (...args: infer P) => any ? P : T;
type ParamType<T> = T extends (args: infer P) => any ? P : T;

// 在这条语句 T extends (...args: infer) -> any ？ P : T 中，infer P 表示带推断的函数参数， 整句表示为： 如果 T 能赋值 给 （...args: infer P） => any, 则结果是 （...args: infer P）=> any 类型中的参数 P，否则返回为T.
interface User {
  name: string;
  age: number;
}
type Func = (user: User) => void;
type Param = ParamType<Func>;
type Param0 = ParamType<string>;
let a3: Param = {name: '11', age: 10}

type ReturnType0<T> = T extends (...args: any[]) => infer R ? R : any;

type func = () => number;
type variable = string;
type funcReturnType = ReturnType0<func>; // funcReturnType 类型为 number
type varReturnType = ReturnType0<variable>; // varReturnType 类型为 string

type ArrayType<T> = T extends (infer Item)[] ? Item : T
type t = ArrayType<[string, number]> // string | number

//------------------------------------- ref 类型
// 解包
// type UnwrapRef<T> = T extends Ref<infer R> ? R : T;


type Ref<T = any> = {
  value: T
}
declare function ref<T>(value: T): Ref<UnwrapRef<T>>;
declare function ref<T>(value: T): T extends Ref ? Ref<UnwrapRef<T>> : T;
const count = ref(2)
count.value
const count2 = ref(ref(2))
count2.value
// 索引签名
declare type UnwrapRef<T> = {
  ref: T extends Ref<infer R> ? R : T
  other: T
}[T extends Ref ? 'ref' : 'other']

const coyb = ref(ref(ref(ref(2))));
coyb
const coyy: UnwrapRef<number> = 0
coyy
type UnwrapRef0<T> = {
  ref: T extends Ref<infer R> ? R : T
  object: {[K in keyof T]: UnwrapRef<T[K]>}
  other: T
}[T extends Ref ? 'ref' : T extends object ? 'object' : 'other']

// 索引签名
/**
 * 索引签名是 type script 里的一个语法糖
 * 所谓索引，就是根据一定的指向返回相应的值
 * typeScript 里的索引签名有两种： 数字牵引和字符串牵引
 */
interface Fooo {
  [key: string]: number
  x: number
  y: number // 属性必须为 number 类型
}
// 索引签名可以通过映射类型来使索引字符串为联合类型中的一员
type Index = 'a' | 'b' | 'c'
type FormIndex = {[k in Index]?: number}
const good: FormIndex = {a: 1, b: 2};

console.log('good[]', good['a']);

type FormSomeIndex<K extends string> = {[key in K]: number}
let com : {[code: string]: number} = { 'dd': 1, '': 2 }

interface NestedCSS {
  color?: string;
  // [selecor: string]: string | NestedCSS
  nest?: {
    [selecor: string]: NestedCSS
  }
}

const example: NestedCSS = {
  color: 'red',
  nest: {
    '.subclass': {
      color: 'blue'
    }
  }
}

// const cvc: NestedCSS = {
//   colodd: '' 
// }

// ==========================
// 条件类型
// 常见的extends 语句可以分成集中成立情况
// 字面量类型以及其原始类型
// 基类与派生类的子类型关系
// 联合类型与其分支的子类型关系
// Top Type 与 Bottom Type
// 分布式 条件类型

// 字面量类型及其原始类型

type Recode = 200 | 400 | 500

interface Foo {
  status: 'success' | 'failure'
}

type Minxed = true | 599 | 'dsfsdf'


// 子关系类型
class Base {
  name!: string;
}

class Derived extends Base {
  age!: number
}
type _T1 = Derived extends Base ? true : false;
type _T2 = {name: 'asdfasdfa';} extends Base ? true :  false;
let bbb: _T2 = true

type _T3 = {name: '12'; age: 8; job: '3edff'} extends Base ? true : false;

let ccc: _T3 = true;

// 联合类型以及其分支 --- 前者是否是后者的子集
type _T7 = 'a' extends 'a' | 'b' | 'c' ? true : false;
// true
type _T8 = 'a' | 'b' extends 'a' | 'b' | 'c' ? true : false;
// false
type _T9 = 'a' | 'b' | 'wuhu!' extends 'a' | 'b' | 'c' ? true : false;


// Top Type 与 Bottom Type
/**
 * 在typeScript 我们说any 与unknown 是Top Type, never则是Bottom Type/
 * Top Type 意味着它们处于类型层级的顶端，即任意的类型都属于其子类型，对于 OtherType extends any 与 OtherType extends unknown 必定成立。而 Bottom Type 处于类型层级的底端，意味着无法再细分的类型，除了 never 自身，没有别的类型能够再赋值给它。这也就意味着，它属于任意类型的子类型，即 never extends OtherType 必定成立。
 */

// 8，即所有 extends 均成立
type _Chain = never extends 'linbudu'
  ? 'linbudu' extends 'linbudu' | 'budulin'
    ? 'linbudu' extends string
      ? string extends {}
        ? {} extends Object
          ? Object extends any
            ? Object extends unknown
              ? any extends unknown
                ? unknown extends any
                  ? 8
                  : 7
                : 6
              : 5
            : 4
          : 3
        : 2
      : 1
    : 0
  : never;

  let ddd : _Chain = 8

  //  分布式条件类型

  type Extract0<T, U> = T extends U ? T : never;

  interface IObject {
    a: string;
    b: number;
    c: boolean;
  }
  
  // 'a'|'b'
  type _ExtractedKeys1 = Extract<keyof IObject, 'a'|'b'>;
  
  // 'a'|'b'
  type _ExtractedKeys2 = Extract<'a'|'b'|'c', 'a'|'b'>;
  
  // never
  type _ExtractedKeys3 = 'a'|'b'|'c' extends 'a'|'b' ? 'a'|'b'|'c' : never;

  // 交集
// type Extract<T, U> = T extends U ? T : never;

// 差集
// type Exclude<T, U> = T extends U ? never : T;

// 移除集合中的 null 与 undefined
// type NonNullable<T> = T extends null | undefined ? never : T;
interface Todo {
  title: string
  description?: string
  completed?: boolean
}

// type AA<T> = T extends Todo


interface KK extends Todo{
  title: string,
  completed?: boolean
}

type TodoPreview = Extract<KK, Todo>

const todo8: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

// Type Assertions
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvans")
// 类似于 as HTMLCanvasElement
myCanvas.height = 100

let x: "hello" = "hello";
// OK
x = "hello";
// ...
// x = "howdy";
/**
 * 
 * 非空断言运算符（后缀
！
)
TypeScript 还有一种特殊的语法，可以在不进行任何显式检查的情况下从类型中删除
 null 和 undefined。写作 ！在任何表达式实际上是值不是 null 或 undefined 的类型断言之后：
 */
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed);
}
class CC {
  a?: string
}
let bb: CC = {
  a: undefined
}
const u = bb.a!
console.log(u);


type numberU = number | unknown

let oo: numberU = 1
let oo1: numberU = 'p'
let oo2: never = 1

