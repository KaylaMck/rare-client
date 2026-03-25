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

export const reactivateUser = (id) => {
  return fetch(`http://localhost:8088/profiles/${id}/reactivate`, {
    method: "PUT",
    headers: {
      "Authorization": `Token ${localStorage.getItem('auth_token')}`
    }
  })
}

export const changeUserType = (id, userType) => {
  return fetch(`http://localhost:8088/profiles/${id}/type`, {
    method: "PUT",
    headers: {
      "Authorization": `Token ${localStorage.getItem('auth_token')}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user_type: userType })
  })
}
