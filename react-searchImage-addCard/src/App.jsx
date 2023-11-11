import "./App.css";
import Nav from "./Components/Navbar/Nav";
import CardForm from "./Components/Form/CardForm";
import SearchForm from "./Components/Form/SearchForm";
import { useState } from "react";
function App() {
  const [value,setValue]=useState(false);
  return (
    <div className="App">
      <Nav setValue={setValue}></Nav>
      <div className="App2">
        {value===true ? <SearchForm></SearchForm> : <CardForm></CardForm>}
      </div>
    </div>
  );
}

export default App;
