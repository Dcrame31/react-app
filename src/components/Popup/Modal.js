import React from 'react'
import './Modal.css';
import PhotoForm from './PhotoForm';

const Modal = ( { onSubmit, onChange, showModal, children }) => {
    return (
       <div style={{height: "auto", top: "auto",
            left: "auto",
            bottom: "auto",
            right: "auto"}}>
            <div className={`ui ${showModal} modal `}>
                <div className="header">Upload Photo</div>
                <i className="close icon"></i>
                <div className="content">
                    <PhotoForm onSubmit={onSubmit} onChange={onChange} />
                </div>
            </div>
        </div>
       
    );
};

export default Modal;
