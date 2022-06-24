import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import {
    Login,
    SignUp,
    Active,
    ViewClosedOrder,
    ViewFreeOrder,
    ViewAcceptedOrder,
    NewNote,
    ConfirmOrder,
    ViewProfile,
    CreateOrder,
    ViewOrder,
    Profile,
    AuthContext,
} from '../index';

const Navigation = () => {
    const { auth } = useContext(AuthContext);

    const userStorage = JSON.parse(localStorage.getItem('users'))
    const isExistUser = userStorage?.find(item => item?.email === auth)

    const userLocation = () => {
        if (isExistUser?.type === 'customer') {
            return <Route path="/main/" element={<Profile />} />;
        } else if (isExistUser?.type === 'volunteer') {
            return <Route path="/main/" element={<Active />} />;
        } else return <Route path="/main/" element={<Profile />} />;
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
            <Route path="/Notes/" element={<NewNote />} />
            <Route path="/VolunteerInterface/ViewAcceptedOrder" element={<ViewAcceptedOrder />} />
            <Route path="/VolunteerInterface/ViewFreeOrder" element={<ViewFreeOrder />} />
            <Route path="/VolunteerInterface/ViewClosedOrder" element={<ViewClosedOrder />} />

        </Routes>
    )
}

export default Navigation