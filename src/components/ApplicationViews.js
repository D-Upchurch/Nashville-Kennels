import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from './animal/AnimalForm'
import { CustomerForm } from './customer/CustomerForm'
import { EmployeeForm } from './employee/EmployeeForm'
import { LocationForm } from './location/LocationForm'

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>
            
            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
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

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}