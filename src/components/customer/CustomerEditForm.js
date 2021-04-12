import React, { useState, useEffect } from "react"
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager"
import "./CustomerForm.css"
import { useHistory, useParams } from 'react-router-dom'
import { getAllLocations } from '../../modules/LocationManager'


export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({});
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {customerId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...customer };
    stateToChange[evt.target.id] = evt.target.value;
    setCustomer(stateToChange);
  };

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newCustomer = { ...customer }
    let selectedVal = event.target.value
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
    }
    /* Customer is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newCustomer[event.target.id] = selectedVal
    // update state
    setCustomer(newCustomer)
}

  const updateExistingCustomer = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedCustomer = {
      id: customer.id,
      name: customer.name,
      address: customer.address,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      locationId: customer.locationId
    };

  updateCustomer(editedCustomer)
    .then(() => history.push("/customers")
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
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
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
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={customer.address}
            />
            <label htmlFor="address">Address</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phoneNumber"
              value={customer.phoneNumber}
            />
            <label htmlFor="phoneNumber">Phone Number</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="email"
              value={customer.email}
            />
            <label htmlFor="email">Email</label>

			<select value={customer.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
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
              onClick={updateExistingCustomer}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}