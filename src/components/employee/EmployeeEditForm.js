import React, { useState, useEffect } from "react"
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager"
import "./EmployeeForm.css"
import { useHistory, useParams } from 'react-router-dom'
import { getAllLocations } from '../../modules/LocationManager'

export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({name:""});
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {employeeId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee }
    let selectedVal = event.target.value
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
    }
    /* Employee is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = selectedVal
    // update state
    setEmployee(newEmployee)
}

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: employee.id,
      name: employee.name,
      locationId: employee.locationId
    };

  updateEmployee(editedEmployee)
    .then(() => history.push("/employees")
    )
  }

  useEffect(() => {
    //load location data and setState
    getAllLocations()
    .then(locationsFromAPI => {
        setLocations(locationsFromAPI)
    })
}, []);

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
			    <option value="0">Select a location</option>
					{locations.map(l => (
                        <option key={l.id} value={l.id}>
							{l.name}
						</option>
					))}
			</select>
            <label htmlFor="location">Assign to location: </label>

          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}