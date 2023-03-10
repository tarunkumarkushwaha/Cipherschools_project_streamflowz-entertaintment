import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import Plans from "./Components/Plans";
import Signup from "./Components/Signup";
import Home from "./Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
