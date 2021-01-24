import React from 'react';
import PhotoList from './PhotoList';

const PhotosContainer = () => {
    //have state and set state to plant results from API

    return (
        <div className="ui segment">
            <div className="ui list">
                
                <PhotoList />
                <PhotoList />
                <PhotoList />
            </div>
        </div>
        
    );
};

export default PhotosContainer;