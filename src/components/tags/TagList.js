import { useEffect, useState } from "react"
import { getTags } from "../../managers/TagManager"

export const TagList = () => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    getTags().then(setTags)
  }, [])

  return (
    <section className="section">
      <h1 className="title">Tag Management</h1>
      <ul>
        {tags.map(tag => (
          <li key={tag.id}>{tag.label}</li>
        ))}
      </ul>
    </section>
  )
}
