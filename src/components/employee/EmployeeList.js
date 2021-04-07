import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees, deleteEmployee } from '../../modules/EmployeeManager';
import { useHistory } from 'react-router-dom';
import { EmployeeForm } from './EmployeeForm';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const history = useHistory();

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
            .then(() => getAllEmployees().then(setEmployees));
    };

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/employees/create") }}>
                    Add Employee
                </button>
            </section>
            <div className="container-cards">
                {employees.map(employee =>
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        handleDeleteEmployee={handleDeleteEmployee} />)}
            </div>
        </>
    );
};