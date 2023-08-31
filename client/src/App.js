import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./containers/Public";
import path from "./utils/constant";

function App() {
  return (
    <div className="bg-red-500">
      <Routes>
        <Route path={path.HOME} element={<Home />}></Route>
        <Route path={path.LOGIN} element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
