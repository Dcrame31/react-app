import React, { useState } from 'react';
import Modal from './Modal';

const ModalContainer = ({showModal}) => {

    const [ photo, setPhoto ] = useState({
        file: '',
        title: '',
        description: ''
    });

    const onChange = (e) => {
        setPhoto({...photo, [e.target.name]: e.target.value})
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(photo)
    };

    
    return (
        <>
            <Modal onSubmit={onSubmit} onChange={onChange} showModal={showModal} />
        </>
    );
};

export default ModalContainer;