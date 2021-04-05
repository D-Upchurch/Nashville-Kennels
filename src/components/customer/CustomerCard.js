import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer, handleDeleteCustomer}) => {
    return (
    <div className="card">
        <div className="card-content">
            <h3 className="customer__name">{customer.name}</h3>
            <address className="customer__address">Address: {customer.address}</address>
            <p className="customer__phoneNumber">Phone Number: {customer.phoneNumber}</p>
            <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove from Customer List</button>
        </div>
    </div>
    );
};