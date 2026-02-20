import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/header.jsx";
import Net from "./components/Net.jsx";
import Footer from "./components/footer.jsx";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Header />
    {/* <App /> */}
    <Net />
    <Footer />
  </StrictMode>,
);
