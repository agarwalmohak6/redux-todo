import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/actions";
import TodoItem from "../components/TodoItem";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [addText, setAddText] = useState("");

  const handleAddTodo = () => {
    if (addText.trim() !== "") {
      dispatch(addTodo(addText.trim()));
      setAddText("");
    }
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo());
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Personal Todo List
      </h2>
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Add task..."
          value={addText}
          onChange={(e) => setAddText(e.target.value)}
          className="flex-grow p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-l-lg"
        />
        <button
          className="p-4 ml-4 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodo}
        >
          <RiAddLine />
        </button>
      </div>
      {todos.length !== 0 && (
        <ul className="divide-y divide-gray-300">
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))}
        </ul>
      )}
      {todos.length !== 0 && (
        <button
          className="mt-6 py-3 w-full bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
          onClick={handleRemoveTodo}
        >
          Delete List
        </button>
      )}
    </div>
  );
};

export default Todo;
