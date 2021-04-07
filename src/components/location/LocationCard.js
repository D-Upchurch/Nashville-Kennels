import React from 'react'
import './Location.css'
import { Link } from "react-router-dom"

export const LocationCard = ({location, handleDeleteLocation}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="location__name">{location.name}</h3>
                <address className="location__address">{location.address}</address>
                <Link to={`/locations/${location.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => handleDeleteLocation(location.id)}>Remove Location</button>
            </div>
        </div>
    )
}
    