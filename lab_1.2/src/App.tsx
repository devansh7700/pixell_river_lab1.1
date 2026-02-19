import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Employees from "./pages/Employees";
import Organization from "./pages/Organization";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/organization">Organization</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="*" element={<Employees />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
