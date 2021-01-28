import React from 'react';
import PlantDetail from './PlantDetail';
import SearchBar from './SearchBar';

const PlantContainer = () => {
    return (
        <div className="ui relaxed divided list">
            <SearchBar />
            <PlantDetail />
            <PlantDetail />
            <PlantDetail />
            
        </div>
    );
};

export default PlantContainer;