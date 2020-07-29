export const bookReducer = (state, action) => {
  console.log("TCL:: bookReducer -> action", action)
  console.log("TCL:: bookReducer -> state", state)
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book]
      break
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id)
      break
    default:
      return state
      break
  }
}
