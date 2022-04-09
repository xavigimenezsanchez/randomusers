import { Routes, Route } from "react-router-dom";
import { Home, Users, About, Error } from "./Pages";
import "./app.scss";
import { Menu } from "./components";
const App = () => {
  const baseRoute = window.location.pathname;
  debugger;
  return (
    <div className="app">
      <div className="app_menu">
        <Menu />
      </div>
      <div className="app__body">
        <Routes>
          <Route path={baseRoute} element={<Home />} />
          <Route path={`${baseRoute}users`} element={<Users />} />
          <Route path={`${baseRoute}about`} element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
