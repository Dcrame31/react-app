import React, { useState } from 'react'

const PopupContainer = () => {
    
    const [isVisible, setIsVisible ] = useState(false);

    const toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };
        

    const showModal = () => {
        setIsVisible( true, () => {
            this.closeButton.focus();
            this.toggleScrollLock();
        });
    };

    const closeModal = () => {
        setIsVisible( false );
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };

    const onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };
        
    const onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return
        this.closeModal();
    };

    return (
        <div>
            Popup Container
        </div>
    );
};

export default PopupContainer;