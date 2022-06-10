import { BrowserRouter } from "react-router-dom";
import AuthContext, { AuthProvider } from "./commponents/context/AuthProvider";
import HomePage from "./commponents/HomePage/HomePage";
import Navigation from "./commponents/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
