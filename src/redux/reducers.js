const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { text: action.payload.text }],
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
      };
    case "REMOVE_TODO":
      return {
        todos: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
