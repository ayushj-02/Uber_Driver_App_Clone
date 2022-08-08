import { Route, Routes} from "react-router-dom";
import Home from "./components1/Home";
import Login from "./components1/Login";
import Signup from "./components1/Signup";
import AccountForgot from "./components1/AccountForgot";
import OtpPage from "./components1/OtpPage";
import SignCity from "./components1/SignCity";
import UberVehicle from "./components1/UberVehicle";
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login1" element={<Login/>} />
        <Route path="/account-forgot" element={<AccountForgot/>} />
        <Route path="/otp" element={<OtpPage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signupcity" element={<SignCity/>} />
        <Route path="/uber_vehicle" element={<UberVehicle/>} />
      </Routes>
    </div>
  );
}

export default App;