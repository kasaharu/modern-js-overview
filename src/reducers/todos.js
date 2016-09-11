const todo = (state, action) => {
  switch (action.type) {
    case 'ADD TODO':
      return {
        id  : action.id,
        text: action.text
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default todos