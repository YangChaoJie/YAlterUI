//  Question
//   Implement the built-in `Pick<T, K>` generic without using it.
//   Constructs a type by picking the set of properties `K` from `T`
//   For example

type MyPick<T, K extends keyof T> = {
  [U in K]: T[U]
}

interface ToDo {
  title: string
  completed: boolean
}

type ToDoPreview = MyPick<ToDo, 'title'>

const todo: ToDoPreview = {
  title: '222'
}

type MyExtract<T, U> = T extends U ? never : T