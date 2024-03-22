import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  const [state, setstate] = useState(false);
  const [count, setCount] = useState(5);
  useEffect(() => {
    setInterval(() => {
      if (!state) setCount(count - 1);
    }, 1000);
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      setstate(true);
    }, 5000);
  }, []);

  return( 
  <div className="">
    {!state && <Landing count={count} />}
    <Home/>
    </div>
    );
}

export default App;
