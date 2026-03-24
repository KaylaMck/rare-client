const API = "http://localhost:8088"

const authHeader = () => ({
  "Authorization": `Token ${localStorage.getItem("auth_token")}`,
  "Accept": "application/json"
})

export const subscribeToUser = (authorId) => {
  return fetch(`${API}/profiles/${authorId}/subscribe`, {
    method: "POST",
    headers: authHeader()
  }).then(res => res.json())
}
