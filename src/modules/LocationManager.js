const remoteURL = "http://localhost:5002"

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(result => result.json())
};

export const getLocationById = (id) => {
  //be sure your locations have good data and related to a location and customer
 return fetch(`${remoteURL}/locations/${id}`)
  .then(res => res.json())
}

export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }