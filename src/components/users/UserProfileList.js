import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getProfiles, deactivateUser, reactivateUser } from "../../managers/UserManager"

export const UserProfileList = () => {
  const [profiles, setProfiles] = useState([])
  const [showDeactivated, setShowDeactivated] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const loadProfiles = () => getProfiles().then(data => setProfiles(data))

  useEffect(() => {
    loadProfiles()
  }, [])

  const handleDeactivate = (e, profile) => {
    e.stopPropagation()
    if (window.confirm(`Deactivate ${profile.username}? They will no longer be able to log in.`)) {
      deactivateUser(profile.id).then(res => {
        if (res.ok) {
          setError(null)
          loadProfiles()
        } else {
          res.json().then(data => setError(data.error))
        }
      })
    }
  }

  const handleReactivate = (e, profile) => {
    e.stopPropagation()
    reactivateUser(profile.id).then(() => loadProfiles())
  }

  const displayed = profiles.filter(p => showDeactivated ? !p.active : p.active)

  return (
    <div className="container">
      {error && (
        <div className="notification is-danger">
          {error}
        </div>
      )}
      <div className="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <h1 className="title mb-0">User Profiles</h1>
        <button
          className="button is-light"
          onClick={() => setShowDeactivated(!showDeactivated)}
        >
          {showDeactivated ? "View Active" : "View Deactivated"}
        </button>
      </div>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Display Name</th>
            <th>User Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayed.map(profile => (
            <tr
              key={profile.id}
              onClick={() => navigate(`/profiles/${profile.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{profile.full_name}</td>
              <td>{profile.username}</td>
              <td>{profile.user_type}</td>
              <td>
                <div className="buttons are-small">
                  {!showDeactivated && (
                    <button
                      className="button is-info"
                      onClick={(e) => { e.stopPropagation(); navigate(`/profiles/${profile.id}/edit-type`) }}
                    >
                      Edit
                    </button>
                  )}
                  {showDeactivated ? (
                    <button
                      className="button is-success"
                      onClick={(e) => handleReactivate(e, profile)}
                    >
                      Reactivate
                    </button>
                  ) : (
                    <button
                      className="button is-danger"
                      onClick={(e) => handleDeactivate(e, profile)}
                    >
                      Deactivate
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
