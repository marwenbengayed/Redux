import { ADD_TASK, EDIT_TASK } from "./todoActionTypes";

const initialTodoState = {
  todos: [],
};
const reducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        todos: [action.payload, ...state.todos],
      };
    case EDIT_TASK:
      for (const task of state.todos) {
        if (task.taskid === action.payload.taskid) {
          task.description = action.payload.description;
          task.isdone = action.payload.isdone;
          break;
        }
      }
      return {
        todos: [...state.todos],
      };
    default:
      return state;
  }
};
export default reducer;