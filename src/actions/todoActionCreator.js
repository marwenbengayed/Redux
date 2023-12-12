import { ADD_TASK, EDIT_TASK } from "./todoActionTypes";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const editTask = (editedTask) => {
  return {
    type: EDIT_TASK,
    payload: editedTask,
  };
};