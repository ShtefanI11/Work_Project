import { Route, Routes } from "react-router-dom";
import Login from "../Authorization/Login";
import SignUp from "../Authorization/SignUp";
import PrivateRoute from "../Authorization/PrivateRoute";
import Active from "../VolunteerInterface/Active";
import VoulenteerNavigation from "../VolunteerInterface/VoulenteerNavigation";
import Closed from "../VolunteerInterface/Closed";
import Available from "../VolunteerInterface/Available";
import ViewClosedOrder from "../VolunteerInterface/ViewOrder/ViewClosedOrder";
import ViewFreeOrder from "../VolunteerInterface/ViewOrder/ViewFreeOrder";
import ViewAcceptedOrder from "../VolunteerInterface/ViewOrder/ViewAcceptedOrder";
import NewNote from "../VolunteerInterface/Notes/NewNote";
import HomePage from "../HomePage/HomePage";
import ConfirmOrder from "../ComanderInterface/Main/ConfirmOrder";
import ViewProfile from "../ComanderInterface/Main/ViewProfile";
import CreateOrder from "../ComanderInterface/Main/CreateOrder";
import ViewOrder from "../ComanderInterface/Main/ViewOrder";
import PublicNavigation from "../ComanderInterface/Main/PublicNavigation";
import Profile from '../ComanderInterface/Main/Profile'
const Navigation = () => {
    return (
        <div>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route element={<PrivateRoute isLogged={true} />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/signup' element={<SignUp />} />
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
    )
}

export default Navigation