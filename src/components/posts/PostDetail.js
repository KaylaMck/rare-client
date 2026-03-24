import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPost, deletePost } from "../../managers/PostManager"

export const PostDetail = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const navigate = useNavigate()

  const currentUserId = parseInt(localStorage.getItem("auth_token"))

  useEffect(() => {
    getPost(postId).then(setPost)
  }, [postId])

  if (!post) return <p className="p-4">Loading...</p>

  const isAuthor = post.user.id === currentUserId

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{post.title}</h1>
        <p className="subtitle">
          By {post.user.username}
          {post.category && <> &middot; {post.category.label}</>}
          {post.publication_date && (
            <> &middot; {new Date(post.publication_date.replace(/-/g, '/')).toLocaleDateString("en-US", { month: '2-digit', day: '2-digit', year: 'numeric' })}</>
          )}
        </p>

        {post.image_url && (
          <figure className="image mb-4">
            <img src={post.image_url} alt={post.title} />
          </figure>
        )}

        <div className="content mb-5">
          <p>{post.content}</p>
        </div>

        <div className="tags mb-4">
          {post.tags.length > 0
            ? post.tags.map(tag => (
                <span key={tag.id} className="tag is-info">{tag.label}</span>
              ))
            : <span className="has-text-grey">No tags</span>
          }
        </div>

        {isAuthor && (
          <div className="buttons">
            <button
              className="button is-info"
              onClick={() => navigate(`/posts/${postId}/edit`)}
            >
              Edit Post
            </button>
            <button
              className="button is-warning"
              onClick={() => navigate(`/posts/${postId}/tags`)}
            >
              Manage Tags
            </button>
            {confirmDelete ? (
              <>
                <button
                  className="button is-danger"
                  onClick={() => deletePost(postId).then(() => navigate("/posts"))}
                >
                  Confirm Delete
                </button>
                <button
                  className="button"
                  onClick={() => { setConfirmDelete(false); navigate(`/posts/${postId}`) }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="button is-danger is-light"
                onClick={() => setConfirmDelete(true)}
              >
                Delete Post
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
