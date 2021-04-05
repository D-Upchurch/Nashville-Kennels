import React from 'react'
import './Location.css'

export const LocationCard = ({location}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="location__name">{location.name}</h3>
                <address className="location__address">{location.address}</address>
            </div>
        </div>
    )
}
    