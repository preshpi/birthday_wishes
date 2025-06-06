import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Picture, Card, Cake, Present } from "./components";
import "./index.css";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<Picture />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/present" element={<Present />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
