import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddItemComponent from "./AddItemComponent";
import DeleteItemComponent from "./DeleteItemComponent";
import ItemsList from "./ItemsList";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    // event.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const inputIsEmpty = () => value === "";

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <AddItemComponent value={value} handleChange={handleChange} addItem={addItem} inputIsEmpty={inputIsEmpty}/>
      <DeleteItemComponent deleteLastItem={deleteLastItem} noItemsFound={noItemsFound}/>
      <ItemsList items={items}/>
    </div>
  );
};

export default App;
