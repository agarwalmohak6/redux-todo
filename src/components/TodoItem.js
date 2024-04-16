import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(index));
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-2">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span>{todo.text}</span>
      </div>
      <button onClick={handleDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
