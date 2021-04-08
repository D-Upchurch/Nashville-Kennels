import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Home } from './home/Home';
import { AnimalList } from './animal/AnimalList';
import { LocationList } from './location/LocationList';
import { EmployeeList } from './employee/EmployeeList';
import { CustomerList } from './customer/CustomerList';
import { AnimalDetail } from './animal/AnimalDetail';
import { LocationDetail } from './location/LocationDetail';
import { AnimalForm } from './animal/AnimalForm';
import { CustomerForm } from './customer/CustomerForm';
import { EmployeeForm } from './employee/EmployeeForm';
import { LocationForm } from './location/LocationForm';
import { Register } from './auth/Register';
import { Login } from './auth/Login';
import { AnimalEditForm } from './animal/AnimalEditForm';
import { CustomerEditForm } from './customer/CustomerEditForm';
import { EmployeeEditForm } from './employee/EmployeeEditForm';
import { LocationEditForm } from './location/LocationEditForm';


export const ApplicationViews = () => {
    const isAuthenticated = () => sessionStorage.getItem("kennel_customer") !== null;
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                {(isAuthenticated()) ?
                    <AnimalList /> : <Redirect to="/login" />
                }
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route exact path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/locations/:locationId(\d+)/edit">
                <LocationEditForm />
            </Route>

            <Route path="/locations/create">
                <LocationForm />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            <Route path="/customers/:customerId(\d+)/edit">
                <CustomerEditForm />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/:employeeId(\d+)/edit">
                <EmployeeEditForm />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}