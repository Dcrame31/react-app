import React, { useState } from 'react';
import Modal from './Modal';

const ModalContainer = ({showModal}) => {

    const [ uploadPhoto, setUploadPhoto ] = useState({
        file: '',
        title: '',
        description: ''
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    };

    return (
        <>
            <Modal onSubmit={onSubmit} showModal={showModal} />
        </>
    );
};

export default ModalContainer;