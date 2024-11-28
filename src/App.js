import WebApp from "@twa-dev/sdk";
import "./App.css";
import Home from "./Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    WebApp.ready();
  }, []);
  return <Home />;
}

export default App;
