import React from "react";
import PhotosContainer from "./components/PhotosContainer";

function App() {
  return (
    <div className="ui container" >
      <h1 style={{ textAlign: "center"}}>Welcome to plant app!</h1>

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <PhotosContainer />
          </div>
        </div>
      </div>
      <div className="five wide column">
        <div>Hello</div>
      </div>
    </div>
  );
}

export default App;
