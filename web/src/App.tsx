import "./styles/globals.css";
import { useState } from "react";
import { Habit } from "./components/Habit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
    </>
  );
}

export default App;
