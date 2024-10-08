import "./App.css";
import { AuthProvider } from "./context/authContext";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";

function App() {
  return (
    <AuthProvider>
      <div style={{ width: "400px", height: "400px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
