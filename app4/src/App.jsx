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
      <h1>{message}</h1>
      <h2>Hey the 4th store works!</h2>
    </div>
  );
}

export default App;
