export const getTags = () => {
  return fetch("http://localhost:8088/tags", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`,
      "Accept": "application/json"
    }
  }).then(res => res.json())
}

export const createTag = (label) => {
  return fetch("http://localhost:8088/tags", {
    method: "POST",
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ label })
  }).then(res => res.json())
}
