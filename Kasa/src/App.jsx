import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/Apropos" element={<Apropos />} />
    </Routes>
  );
}

export default App;
