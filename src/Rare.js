import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"


export const Rare = () => {
  const [token, setTokenState] = useState(localStorage.getItem('auth_token'))
  const [isAdmin, setIsAdminState] = useState(localStorage.getItem('is_admin') === 'true')

  const setToken = (newToken, newIsAdmin = false) => {
    localStorage.setItem('auth_token', newToken)
    localStorage.setItem('is_admin', newIsAdmin)
    setTokenState(newToken)
    setIsAdminState(newIsAdmin)
  }

  return <>
    <NavBar token={token} setToken={setToken} isAdmin={isAdmin} />
    <ApplicationViews token={token} setToken={setToken} isAdmin={isAdmin} />
  </>
}
