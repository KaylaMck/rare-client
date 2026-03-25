import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getProfiles } from "../../managers/UserManager"
import { deactivateUser } from "../../managers/UserManager"

export const UserProfileList = () => {
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getProfiles().then(data => setProfiles(data))
  }, [])

  const handleDeactivate = (e, profile) => {
    e.stopPropagation()
    if (window.confirm(`Deactivate ${profile.username}? They will no longer be able to log in.`)) {
      deactivateUser(profile.id).then(() => {
        navigate("/profiles")
        getProfiles().then(data => setProfiles(data))
      })
    }
  }

  return (
    <div className="container">
      <h1 className="title">User Profiles</h1>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Display Name</th>
            <th>User Type</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr
              key={profile.id}
              onClick={() => navigate(`/profiles/${profile.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{profile.full_name}</td>
              <td>{profile.username}</td>
              <td>{profile.user_type}</td>
              <td>{profile.active ? "Active" : "Inactive"}</td>
              <td>
                {profile.active && profile.user_type !== "Admin" && (
                  <button
                    className="button is-danger is-small"
                    onClick={(e) => handleDeactivate(e, profile)}
                  >
                    Deactivate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
