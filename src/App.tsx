// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Home from "./pages/home";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoute from "./router";
// import Loading from "./components/loader";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <CustomRoute />
        {/* <Home /> */}
        {/* <Loading/> */}
        {/* <p className="bg-green-300">okay let's see</p> */}
      </Router>
    </>
  );
}

export default App;

{
  /* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="">Heree</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.tsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */
}
