import React from 'react'
import './Modal.css';

const Modal = ( {showModal, children }) => {
    return (
       <div style={{height: "auto", top: "auto",
       left: "auto",
       bottom: "auto",
       right: "auto"}}>
        <div className={`ui ${showModal} modal `}>
            <div className="header">Upload Photo</div>
            <i className="close icon"></i>
            <div className="content">
            <form className="ui form">
                    <div className="field">
                        <label>Upload file</label>
                        <input placeholder="Photo"/>
                    </div>
                    <div className="field">
                        <label>Title</label>
                        <input placeholder="Title"/>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <input placeholder="Description"/>
                    </div>
                    <button type="submit" className="ui button">Submit</button>
                </form>
                </div>
            </div>
        </div>
       
    );
};

export default Modal;
