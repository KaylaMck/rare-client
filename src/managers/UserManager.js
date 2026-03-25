export const getProfiles = () => {
  return fetch("http://localhost:8088/profiles", {
    headers: {
      "Authorization": `Token ${localStorage.getItem('auth_token')}`,
      "Accept": "application/json"
    }
  }).then(res => res.json())
}

export const getProfile = (id) => {
  return fetch(`http://localhost:8088/profiles/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem('auth_token')}`,
      "Accept": "application/json"
    }
  }).then(res => res.json())
}

export const deactivateUser = (id) => {
  return fetch(`http://localhost:8088/profiles/${id}/deactivate`, {
    method: "PUT",
    headers: {
      "Authorization": `Token ${localStorage.getItem('auth_token')}`
    }
  })
}
