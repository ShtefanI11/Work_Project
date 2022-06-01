import { Route, Routes } from "react-router-dom";
import Login from "./commponents/Authorization/Login";
import SignUp from "./commponents/Authorization/SignUp";
import Profile from "./commponents/ComanderInterface/Main/Profile";
import ViewOrder from "./commponents/ComanderInterface/Main/ViewOrder";
import CreateOrder from "./commponents/ComanderInterface/Main/CreateOrder";
import ViewProfile from "./commponents/ComanderInterface/Main/ViewProfile";
import ConfirmOrder from "./commponents/ComanderInterface/Main/ConfirmOrder";
import PrivateRoute from "./commponents/Authorization/PrivateRoute";
import HomePage from "./commponents/HomePage/HomePage";
import Active from "./commponents/VolunteerInterface/Active";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute isLogged={true} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Profile />} />
          <Route path="/vieworder" element={<ViewOrder />} />
          <Route path="/createorder" element={<CreateOrder />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/volunteerinterface/active" element={<Active />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
