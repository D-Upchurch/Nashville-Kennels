import React from 'react'
import './Location.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export const LocationCard = ({location, handleDeleteLocation, isAuthenticated={isAuthenticated}}) => {
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="location__name">{location.name}</h3>
                <address className="location__address">{location.address}</address>
                <Link to={`/locations/${location.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button"
                    disabled={isAuthenticated ? false : true}
                    onClick={() => history.push(`/locations/${location.id}/edit`)}>
                    Edit
                </button>
                <button type="button" disabled={isAuthenticated ? false : true} onClick={() => handleDeleteLocation(location.id)}>Remove Location</button>
            </div>
        </div>
    )
}
    