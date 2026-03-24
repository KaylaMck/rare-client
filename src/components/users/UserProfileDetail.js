import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProfile } from "../../managers/UserManager"

const DEFAULT_AVATAR = "https://bulma.io/assets/images/placeholders/128x128.png"

export const UserProfileDetail = () => {
  const { userId } = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    getProfile(userId).then(data => setProfile(data))
  }, [userId])

  if (!profile) return null

  return (
    <div className="container">
      <div className="box mt-5" style={{ maxWidth: 480 }}>
        <div className="has-text-centered mb-4">
          <figure className="image is-128x128 is-inline-block">
            <img
              className="is-rounded"
              src={profile.profile_image_url || DEFAULT_AVATAR}
              alt={profile.username}
            />
          </figure>
        </div>
        <table className="table is-fullwidth">
          <tbody>
            <tr>
              <th>Full Name</th>
              <td>{profile.full_name || "—"}</td>
            </tr>
            <tr>
              <th>Display Name</th>
              <td>{profile.username}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <th>Member Since</th>
              <td>{profile.created_on}</td>
            </tr>
            <tr>
              <th>User Type</th>
              <td>{profile.user_type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
