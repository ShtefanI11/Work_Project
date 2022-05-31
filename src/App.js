import { Route, Routes } from "react-router-dom";
import Login from "./commponents/Authorization/Login";
import SignUp from "./commponents/Authorization/SignUp";
import Profile from "./commponents/ComanderInterface/Main/Profile";
import ViewOrder from "./commponents/ComanderInterface/Main/ViewOrder";
import CreateOrder from "./commponents/ComanderInterface/Main/CreateOrder";
import ViewProfile from "./commponents/ComanderInterface/Main/ViewProfile";
import ConfirmOrder from "./commponents/ComanderInterface/Main/ConfirmOrder";
import BootstrapDatePickerComponent from "./commponents/Bootstrap/Bootstrap";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Profile />} />
        <Route path="/vieworder" element={<ViewOrder />} />
        <Route path="/createorder" element={<CreateOrder />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
      </Routes>
    </div>
  );
}

export default App;
