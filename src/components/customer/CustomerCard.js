import React from "react"
import "./Customer.css"
import { useHistory } from 'react-router-dom'

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="customer__name">{customer.name}</h3>
                <address className="customer__address">Address: {customer.address}</address>
                <p className="customer__phoneNumber">Phone Number: {customer.phoneNumber}</p>
                <button type="button"
                    onClick={() => history.push(`/customers/${customer.id}/edit`)}>
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove from Customer List</button>
            </div>
        </div>
    );
};