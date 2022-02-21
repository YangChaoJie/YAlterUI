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