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
import PublicNavigation from "./commponents/ComanderInterface/Main/PublicNavigation";
import VoulenteerNavigation from "./commponents/VolunteerInterface/VoulenteerNavigation";
import Available from "./commponents/VolunteerInterface/Available";
import Closed from "./commponents/VolunteerInterface/Closed";
import NewNote from "./commponents/VolunteerInterface/Notes/NewNote";
import ViewAcceptedOrder from "./commponents/VolunteerInterface/ViewOrder/ViewAcceptedOrder";
import ViewFreeOrder from "./commponents/VolunteerInterface/ViewOrder/ViewFreeOrder";
import ViewClosedOrder from "./commponents/VolunteerInterface/ViewOrder/ViewClosedOrder";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<PrivateRoute isLogged={true} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Main" element={<Profile />} />
          <Route path="/ViewOrder" element={<ViewOrder />} />
          <Route path="/CreateOrder" element={<CreateOrder />} />
          <Route path="/ViewProfile" element={<ViewProfile />} />
          <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
          <Route path="/VolunteerInterface/Active" element={<Active />} />
          <Route path="/VolunteerInterface/Available" element={<Available />} />
          <Route path="/VolunteerInterface/Closed" element={<Closed />} />
          <Route path="/PublicNavigation" element={<PublicNavigation />} />
          <Route path="/VoulenteerNavigation" element={<VoulenteerNavigation />} />
          <Route path="/VolunteerInterface/Active/Notes/" element={<NewNote />} />
          <Route path="/VolunteerInterface/ViewAcceptedOrder" element={<ViewAcceptedOrder />} />
          <Route path="/VolunteerInterface/ViewFreeOrder" element={<ViewFreeOrder />} />
          <Route path="/VolunteerInterface/ViewClosedOrder" element={<ViewClosedOrder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
