import React from 'react';
import PlantList from './PlantList';

const PlantCollection = () => {
    //have state and set state to plant results from API

    return (
        <div className="ui segment">
            <div className="ui list">
                
                <PlantList />
                <PlantList />
                <PlantList />
            </div>
        </div>
        
    );
};

export default PlantCollection;