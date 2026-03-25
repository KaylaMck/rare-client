import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../managers/PostManager"
import { getCategories } from "../../managers/CategoryManager"

export const PostList = () => {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    getAllPosts().then(setPosts)
    getCategories().then(setCategories)
  }, [])

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category && post.category.id === parseInt(selectedCategory))
    : posts

  return (
    <div className="container">
      <h2 className="title is-4 mt-4">Posts</h2>
      <div className="field mb-4" style={{ maxWidth: "300px" }}>
        <div className="control">
          <div className="select">
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(post => (
            <tr key={post.id}>
              <td>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.user.username}</td>
              <td>{post.category ? post.category.label : "—"}</td>
              <td>{post.publication_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
