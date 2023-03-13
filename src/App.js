import "./App.css";

import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./routes/AboutPage";
import Menu from "./routes/Menu";
import OrderOnline from "./routes/OrderOnline";
import Login from "./routes/Login";
import Reservations from "./routes/Reservations";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutpage" element={<AboutPage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/orderonline" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
