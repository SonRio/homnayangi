import WebApp from "@twa-dev/sdk";
import "./App.css";
import Home from "./Home";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Result from "./Result";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/result" element={<Result />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
