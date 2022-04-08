import { Routes, Route } from "react-router-dom";
import { Home, Users, About, Error } from "./Pages";
import "./app.scss";
import { Menu } from "./components";
const App = () => (
  <div className="app">
    <h1>Random Users</h1>
    <div className="app_menu">
      <Menu />
    </div>
    <div className="app__body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  </div>
);

export default App;
