import React, { useState, useEffect } from 'react';
import { LocationCard } from './LocationCard';
import { getAllLocations, deleteLocation } from '../../modules/LocationManager';
import { useHistory } from 'react-router-dom'

export const LocationList = ({setAuthUser={setAuthUser}, isAuthenticated={isAuthenticated}}) => {
    const [locations, setLocations] = useState([]);

    const history = useHistory();

    const handleDeleteLocation = id => {
        deleteLocation(id)
            .then(() => getAllLocations().then(setLocations));
    };

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    disabled={isAuthenticated ? false : true}
                    onClick={() => { history.push("/locations/create") }}>
                    Add Location
                </button>
            </section>
            <div className="container-cards">
                {locations.map(location =>
                    <LocationCard
                        key={location.id}
                        location={location}
                        handleDeleteLocation={handleDeleteLocation}
                        isAuthenticated={isAuthenticated} />)}
            </div>
        </>
    );
};