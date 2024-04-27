import { useContext } from "react"
import { AuthContext } from "../Services/AuthProvider"
import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext)
    if (user) {
        return children
    }
  return (
    <div>
      <Navigate state={location.pathname} to='/login'></Navigate>
    </div>
  )
}

export default PrivateRoute
