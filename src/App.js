import { Routes, Route, Link } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Collectionpage from "./pages/Collectionpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="collections" element={<Collectionpage />} />
    </Routes>
  );
};

export default App;
