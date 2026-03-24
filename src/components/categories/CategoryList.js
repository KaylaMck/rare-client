import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCategories } from "../../managers/CategoryManager"

export const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return (
    <section className="section">
      <h1 className="title">Category Management</h1>
      <button
        className="button is-primary mb-4"
        onClick={() => navigate("/categories/new")}
      >
        Create Category
      </button>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.label}
            <button
              className="button is-small is-warning ml-3"
              onClick={() => navigate(`/categories/${category.id}/edit`)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
