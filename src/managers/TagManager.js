export const getTags = () => {
  return fetch("http://localhost:8088/tags", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`,
      "Accept": "application/json"
    }
  }).then(res => res.json())
}
