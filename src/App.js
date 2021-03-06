import React, { useState } from "react";
import PhotosContainer from "./components/Photos/PhotosContainer";
import PlantContainer from './components/Plants/PlantContainer';
import ModalContainer from './components/Popup/ModalContainer';

function App() {
  const [ showModal, setShowModal ] = useState('');

  const onClick = () => {
    setShowModal('active')
  };
 
  return (
    <div className="ui container" >
      <ModalContainer showModal={showModal} />
      <h1 style={{ textAlign: "center"}}>Welcome to plant app!</h1>

      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">

            <PhotosContainer />
            <button 
              className="ui icon button"
              onClick={onClick}
            >
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
