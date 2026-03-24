import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPost } from "../../managers/PostManager"

export const PostDetail = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
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
          {post.publication_date && <> &middot; {post.publication_date}</>}
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
          <button
            className="button is-warning"
            onClick={() => navigate(`/posts/${postId}/tags`)}
          >
            Manage Tags
          </button>
        )}
      </div>
    </section>
  )
}
