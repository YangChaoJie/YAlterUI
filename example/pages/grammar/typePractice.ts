//  Question 1
//   Implement the built-in `Pick<T, K>` generic without using it.
//   Constructs a type by picking the set of properties `K` from `T`
//   For example

type MyPick<T, K extends keyof T> = {
  [U in K]: T[U]
}

interface ToDo {
  title: string
  description: string
  completed: boolean
}

type ToDoPreview = MyPick<ToDo, 'title'>

const todo: ToDoPreview = {
  title: '222'
}

type MyExtract<T, U> = T extends U ? never : T

/** Question 2
 * Implement the built-in Omit<T, K> generic without using it.
 * Constructs a type by picking all properties from T and then removing K
 */

type MyOmit<T, K extends keyof T> = {
  // [Key in keyof T as Key extends K ? never : Key]: T[Key];
  [U in MyExtract<keyof T, K>] : T[U]
}

const todo1: MyOmit<ToDo, 'title' | 'description'> = {
  completed: true,
  // title: '' error
}


/**
 * Question 3
 * Implement the built-in Readonly<T> generic without using it.
 * Constructs a type with all properties of T set to readonly,meaning the
 * properties of the constructed type cannot be reassigned.
 */

type MyReadonly<T> = {
  readonly [U in keyof T] : T[U]
}

const todo2: MyReadonly<ToDo> = {
  title: '',
  description: '',
  completed: false
}
todo2.title = 'ddd' // 提示是只读属性

/**
 * Question 4
 * Implement the built-in ReturnType<T> generic without using it.
 */

type MyReturnType<T> = T extends (...arg: any) => infer T ? T : never

const fn = (v) => {
  if (v)
  return 1
  else
  return 2
}

type a = MyReturnType<typeof fn>

/***
 * Question 5
 * Give an array, transform into an object type and the key/value must in the given array.
 */
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type TupleToObject<T extends readonly any[]> = {
  [U in T[number]]: T[U]
}

type result = TupleToObject<typeof tuple>

