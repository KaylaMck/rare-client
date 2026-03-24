const API = "http://localhost:8088"

const authHeader = () => ({
  "Authorization": `Token ${localStorage.getItem("auth_token")}`,
  "Accept": "application/json"
})

export const getAllPosts = () => {
  return fetch(`${API}/posts`, {
    headers: authHeader()
  }).then(res => res.json())
}

export const getPost = (postId) => {
  return fetch(`${API}/posts/${postId}`, {
    headers: authHeader()
  }).then(res => res.json())
}

export const updatePostTags = (postId, tagIds) => {
  return fetch(`${API}/posts/${postId}/tags`, {
    method: "PUT",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ tag_ids: tagIds })
  }).then(res => res.json())
}
