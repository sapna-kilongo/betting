import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return ( 
  <Routes>
        <Route path="/"><Home /></Route>  



  </Routes>



  );
}

export default App;
