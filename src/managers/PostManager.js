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

export const createPost = (post) => {
  return fetch(`${API}/posts`, {
    method: "POST",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
}

export const getSubscribedPosts = () => {
  return fetch(`${API}/subscribedposts`, {
    headers: authHeader()
  }).then(res => res.json())
}

export const getMyPosts = () => {
  return fetch(`${API}/myposts`, {
    headers: authHeader()
  }).then(res => res.json())
}

export const updatePost = (postId, post) => {
  return fetch(`${API}/posts/${postId}`, {
    method: "PUT",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
}

export const deletePost = (postId) => {
  return fetch(`${API}/posts/${postId}`, {
    method: "DELETE",
    headers: authHeader()
  })
}

export const getPostsByUser = (userId) => {
  return fetch(`${API}/profiles/${userId}/posts`, {
    headers: authHeader()
  }).then(res => res.json())
}

export const getUnapprovedPosts = () => {
  return fetch(`${API}/unapprovedposts`, {
    headers: authHeader()
  }).then(res => res.json())
}

export const approvePost = (postId) => {
  return fetch(`${API}/posts/${postId}/approve`, {
    method: "PUT",
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
