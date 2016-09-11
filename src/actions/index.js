let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD TODO',
    id  : nextTodoId++,
    text
  }
}
