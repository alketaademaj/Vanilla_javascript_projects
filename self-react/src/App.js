import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import FunctionPractice from "./components/functionPractice";
//import Counter from "./components/Counter";
// import Axios from "./components/axios";
// import Navbar from "./components/navbar";
// import PopUpOpener from "./components/PopUpOpener";

function App() { //they can not store any value, because it doesn't have state 
  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<Axios />*/}
      <FunctionPractice/>
    </div>
  );
}

export default App;
