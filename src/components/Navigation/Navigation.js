import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import {
    Login,
    SignUp,
    PrivateRoute,
    Active,
    Available,
    VoulenteerNavigation,
    Closed,
    ViewClosedOrder,
    ViewFreeOrder,
    ViewAcceptedOrder,
    NewNote,
    ConfirmOrder,
    ViewProfile,
    CreateOrder,
    ViewOrder,
    PublicNavigation,
    Profile,
    AuthContext,
} from '../index';

const Navigation = () => {
    const { auth } = useContext(AuthContext);

    const mainRoute = localStorage.getItem('userType');

    const userLocation = () => {
        if (mainRoute === 'commander') {
            return <Route path="/main/" element={<Profile />} />;
        } else if (mainRoute === 'volunteer') {
            return <Route path="/main/" element={<Active />} />;
        }
    }
    return (
        <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {userLocation()}
            <Route path="/ViewOrder" element={<ViewOrder />} />
            <Route path="/CreateOrder" element={<CreateOrder />} />
            <Route path="/ViewProfile" element={<ViewProfile />} />
            <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
            <Route path="/VolunteerInterface/Available" element={<Available />} />
            <Route path="/VolunteerInterface/Closed" element={<Closed />} />
            <Route path="/PublicNavigation" element={<PublicNavigation />} />
            <Route path="/VoulenteerNavigation" element={<VoulenteerNavigation />} />
            <Route path="/Notes/" element={<NewNote />} />
            <Route path="/VolunteerInterface/ViewAcceptedOrder" element={<ViewAcceptedOrder />} />
            <Route path="/VolunteerInterface/ViewFreeOrder" element={<ViewFreeOrder />} />
            <Route path="/VolunteerInterface/ViewClosedOrder" element={<ViewClosedOrder />} />

        </Routes>
    )
}

export default Navigation