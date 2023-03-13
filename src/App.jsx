import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import Library from "./Components/Library";
import Home from "./Home";
import Mostplayed from "./Components/Mostplayed";
import Recentlyadded from "./Components/Recentlyadded";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mostplayed" element={<Mostplayed/>}/>
        <Route path="/recentlyadded" element={<Recentlyadded/>}/>
        <Route path="/library" element={<Library/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
