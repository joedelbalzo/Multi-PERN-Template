import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "./store";

function App() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  if (message) {
    console.log(message);
  }

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <div>
      <ul>
        {message.map((m) => {
          return (
            <li key={m.id}>
              {m.sport}: {m.city}
              {"  "}
              {m.mascot}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
