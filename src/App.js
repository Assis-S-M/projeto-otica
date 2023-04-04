import "./App.css"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./Components/Pages/Home/Home";
import { Header } from "./Components/Layout/Header/Header";

function App() {
  return (
    <div>
      <Router>

        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;