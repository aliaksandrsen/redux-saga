import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncIncrementCreator,
  asyncDecrementCreator,
} from "./store/countReducer";
import { fetchUsers } from "./store/userReducer";

const App = () => {
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="count">{count}</div>
      <div className="btns">
        <button
          className="btn"
          onClick={() => dispatch(asyncIncrementCreator())}
        >
          ИНКРЕМЕНТ++
        </button>
        <button
          className="btn"
          onClick={() => dispatch(asyncDecrementCreator())}
        >
          ДЕКРЕМЕНТ--
        </button>
        <button className="btn" onClick={() => dispatch(fetchUsers())}>
          ПОЛУЧИТЬ ЮЗЕРОВ
        </button>
      </div>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
