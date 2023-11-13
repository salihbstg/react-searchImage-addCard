import "./App.css";
import Nav from "./Components/Navbar/Nav";
import CardForm from "./Components/Form/CardForm";
import SearchForm from "./Components/Form/SearchForm";
import { useState } from "react";
import GitForm from "./Components/Form/GitForm";
function App() {
  const [value,setValue]=useState(false);
  return (
    <div className="App">
      <Nav setValue={setValue}></Nav>
      <div className="App2">
        {value==="card" ? <CardForm></CardForm> : null}
        {value==="search" ? <SearchForm></SearchForm> : null}
        {value==="git" ? <GitForm></GitForm> : null}
      </div>
    </div>
  );
}

export default App;
