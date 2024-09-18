
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoute from "./router";

function App() {


  return (
    <>
      <Router>
        <CustomRoute />
      </Router>
    </>
  );
}

export default App;

