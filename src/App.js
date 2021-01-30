import React, { useState } from "react";
import PhotosContainer from "./components/Photos/PhotosContainer";
import PlantContainer from './components/Plants/PlantContainer';
import PopupWindow from './components/Photos/PopupWindow';

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const onHandleClick = () => {
    setIsPopUpVisible(!isPopUpVisible);
  }

  const toggleWindow = isPopUpVisible ? <PopupWindow /> : '';
  

  return (
    <div className="ui container" >
      <h1 style={{ textAlign: "center"}}>Welcome to plant app!</h1>

      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
          {toggleWindow}

            <PhotosContainer />
            <button 
              className="ui icon button"
              onClick={() => setIsPopUpVisible(!isPopUpVisible)
              }>
              <i className="plus icon"></i>
            </button>
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
