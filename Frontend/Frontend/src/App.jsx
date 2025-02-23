import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Outfit from "./Pages/Outfit";
import HomeDecor from "./Pages/HomeDecor";
import SaveIdea from "./Components/SaveIdea";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Outfit" element={<Outfit/>} />
        <Route path="/HomeDecor" element={<HomeDecor/>} />
        <Route path="/saveIdeas" element={<SaveIdea/>} />
      </Routes>
    </>
  );
}

export default App;
