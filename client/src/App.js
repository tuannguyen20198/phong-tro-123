import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./containers/Public";
import path from "./utils/constant";

function App() {
  return (
    <div className="bg-red-500">
      <Routes>
        <Route path={path.HOME} element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
