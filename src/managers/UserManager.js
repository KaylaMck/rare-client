export const getProfiles = () => {
  return fetch("http://localhost:8088/profiles", {
    headers: {
      "Authorization": `Token ${localStorage.getItem('auth_token')}`,
      "Accept": "application/json"
    }
  }).then(res => res.json())
}
