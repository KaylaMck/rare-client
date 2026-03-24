const API = "http://localhost:8088"

const authHeader = () => ({
  "Authorization": `Token ${localStorage.getItem("auth_token")}`,
  "Accept": "application/json"
})

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    headers: authHeader()
  }).then(res => res.json())
}
