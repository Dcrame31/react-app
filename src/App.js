import React from "react";
import PhotosContainer from "./components/Photos/PhotosContainer";
import PlantContainer from './components/Plants/PlantContainer';

function App() {
  return (
    <div className="ui container" >
      <h1 style={{ textAlign: "center"}}>Welcome to plant app!</h1>

      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <PhotosContainer />
          </div>
          <div className="six wide column">
            <PlantContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
