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

export default todo
