import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Outfit from "./Pages/Outfit";
import HomeDecor from "./Pages/HomeDecor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Outfit" element={<Outfit/>} />
        <Route path="/HomeDecor" element={<HomeDecor/>} />
      </Routes>
    </>
  );
}

export default App;
