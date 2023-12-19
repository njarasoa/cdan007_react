import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./store/taskSlice";
import { addUser, deleteUser } from "./store/userSlice";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.tasks);
  const users = useSelector((state) => state.users);  
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const text = prompt("Enter a new todo:");
    if (text) {
      dispatch(addTask(text))
    }
  };

  const handleAddUser = () => {
    const text = prompt("Enter a new user:");
    if (text) {
      dispatch(addUser(text));
    }
  };

  return (
    <>
      <div>
        <button onClick={handleAddTodo}>add todo</button>
      </div>
      <hr />
      <ul>
        {todos.map((todo) => (
          <p key={todo.id}>
            {todo.name}{" "}
            <button onClick={() => dispatch(deleteTask(todo.id))}>X</button>
          </p>
        ))}
      </ul>
      <hr></hr>
      <div>
        <button onClick={handleAddUser}>add user</button>
      </div>
      <hr />
      <ul>
        {users.map((user) => (
          <p key={user.id}>
            {user.name}{" "}
            <button onClick={() => dispatch(deleteUser(user.id))}>X</button>
          </p>
        ))}
      </ul>
    </>
  );
}

export default App;