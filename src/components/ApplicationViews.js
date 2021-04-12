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
import { useState } from 'react';

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
    
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                {isAuthenticated ? <Home /> : <Redirect to="/login" />}
                
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">   
            {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                {isAuthenticated ? <AnimalDetail /> : <Redirect to="/login" />}
            </Route>

            <Route path="/animals/create">
                {isAuthenticated ? <AnimalForm /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/locations">
                <LocationList setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
            </Route>

            <Route exact path="/locations/:locationId(\d+)">
                {isAuthenticated ? <LocationDetail /> : <Redirect to="/login" />}
            </Route>

            <Route path="/locations/:locationId(\d+)/edit">
                {isAuthenticated ? <LocationEditForm />  : <Redirect to="/login" />}
            </Route>

            <Route path="/locations/create">
                {isAuthenticated ? <LocationForm /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/customers">
                {isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/customers/create">
                {isAuthenticated ? <CustomerForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/customers/:customerId(\d+)/edit">
                {isAuthenticated ? <CustomerEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/employees">
                {isAuthenticated ? <EmployeeList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/employees/:employeeId(\d+)/edit">
                {isAuthenticated ? <EmployeeEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/employees/create">
                {isAuthenticated ? <EmployeeForm /> : <Redirect to="/login" />}
            </Route>
        </>
    )
}