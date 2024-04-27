import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loader) {
    return (
      <>
        <div className="flex items-center justify-center h-[400px]">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </>
    );
  }
  return (
    <div>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  );
}

export default PrivateRoute;
