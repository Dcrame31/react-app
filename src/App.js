import React from "react";
import PlantCollection from "./components/PlantCollection";

function App() {
  return (
    <div className="ui raised very padded text container segment" >
      <h1 style={{ textAlign: "center"}}>Welcome to plant app!</h1>
        <PlantCollection />
    </div>
  );
}

export default App;
