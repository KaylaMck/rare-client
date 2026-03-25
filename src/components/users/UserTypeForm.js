import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProfile, changeUserType } from "../../managers/UserManager"

export const UserTypeForm = () => {
  const { userId } = useParams()
  const userTypeRef = useRef()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    getProfile(userId).then(profile => {
      userTypeRef.current.value = profile.user_type
    })
  }, [userId])

  const handleSave = (e) => {
    e.preventDefault()
    changeUserType(userId, userTypeRef.current.value).then(res => {
      if (res.ok) {
        navigate("/profiles")
      } else {
        res.json().then(data => setError(data.error))
      }
    })
  }

  return (
    <section className="section">
      <h1 className="title">Edit User Type</h1>
      {error && (
        <div className="notification is-danger">
          {error}
        </div>
      )}
      <form onSubmit={handleSave}>
        <div className="field">
          <label className="label">User Type</label>
          <div className="control">
            <div className="select">
              <select ref={userTypeRef}>
                <option value="Author">Author</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="button is-primary" type="submit">Save</button>
          <button className="button" type="button" onClick={() => navigate("/profiles")}>Cancel</button>
        </div>
      </form>
    </section>
  )
}
