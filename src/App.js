import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";

function App() {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
