import React from 'react';
import PlantList from './PlantList';

const PlantCollection = () => {
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