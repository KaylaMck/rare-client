const API = "http://localhost:8088"

const authHeader = () => ({
  "Authorization": `Token ${localStorage.getItem("auth_token")}`,
  "Accept": "application/json"
})

export const getReactions = () => {
  return fetch(`${API}/reactions`, {
    headers: authHeader()
  }).then(res => res.json())
}

export const createReaction = (reaction) => {
  return fetch(`${API}/reactions`, {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(reaction)
  }).then(res => res.json())
}
