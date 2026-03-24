import { useEffect, useState } from "react"
import { getProfiles } from "../../managers/UserManager"

export const UserProfileList = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    getProfiles().then(data => setProfiles(data))
  }, [])

  return (
    <div className="container">
      <h1 className="title">User Profiles</h1>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Display Name</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr key={profile.id}>
              <td>{profile.full_name}</td>
              <td>{profile.username}</td>
              <td>{profile.user_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
