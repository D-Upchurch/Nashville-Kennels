import React from "react"
import "./Employee.css"
import { useHistory } from 'react-router-dom'

export const EmployeeCard = ({employee, handleDeleteEmployee }) => {
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-name">{employee.name}</span></h3>
                {/* <div className="employee__location">{employee.locationId}</div> */}
                <button type="button"
                onClick={() => history.push(`/employees/${employee.id}/edit`)}>
                Edit
                </button>
                <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Remove Employee</button>
            </div>
        </div>
    )
}
    
  
