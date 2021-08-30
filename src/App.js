import React from "react";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

import "./App.css";

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
