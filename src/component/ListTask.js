import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import Task from "./Task";
import * as message from "../actions/todoInfo";

const ListTask = ({ todoDiscFilter, todoIsDoneFilter }) => {
  const todoList = useSelector((state) => state.todos);

  const todoAllFilterResult = todoList.filter(
    (task) =>
      task.description
        .toLowerCase()
        .includes(todoDiscFilter?.toLowerCase().trim()) &&
      task.isdone === todoIsDoneFilter
  );

  const todoDiscFilterResult = todoList.filter((task) =>
    task.description
      .toLowerCase()
      .includes(todoDiscFilter?.toLowerCase().trim())
  );

  const EmpltyList = ({ msg }) => <span className="emptyDataMsg">{msg} </span>;

  return (
    <div className="todoListContenair">
      {!todoList.length ? (
        <EmpltyList msg={message.EMPTY_TODO_TASK} />
      ) : typeof todoIsDoneFilter === "boolean" ? (
        !todoAllFilterResult.length ? (
          <EmpltyList
            msg={
              todoIsDoneFilter
                ? message.EMPTY_DONE_TASK
                : message.EMPTY_NOT_DONE_TASK
            }
          />
        ) : (
          todoAllFilterResult.map((task) => <Task todo={task} />)
        )
      ) : !todoDiscFilterResult.length ? (
        <EmpltyList msg={message.EMPTY_TODO_TASK} />
      ) : (
        todoDiscFilterResult.map((task) => <Task todo={task} />)
      )}
    </div>
  );
};

export default ListTask;