import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import RecoveryPassword from "./pages/RecoveryPassword"
import NotFound from "./pages/NotFound"
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return ( 
  <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/account/login" element={<Login/>}/> 
        <Route exact path="/account/signUp" element={<SignUp/>}/> 
        <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/>



  </Routes>



  );
}

export default App;
