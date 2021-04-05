import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="customer__address">Address: {customer.address}</address>
        <p className="customer__phoneNumber">Phone Number: {customer.phoneNumber}</p>
    </section>
)