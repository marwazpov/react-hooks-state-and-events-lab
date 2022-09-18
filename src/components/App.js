import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

// replace 'false' with a state variable that can be toggled between true and false
// this will be used for the Dark Mode Toggle feature


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  function handleDarkModeClicked(){
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App" + ' ' + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClicked}>{isDarkMode ? 'dark' : 'light'} Mode</button>


      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
