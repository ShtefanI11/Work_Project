import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isLogged }) {
    return isLogged ? <Outlet /> : <Navigate to='/Login' />
}
export default PrivateRoute