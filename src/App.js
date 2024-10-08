import './App.css';
import Main from './components/main';
import Login from './components/login';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // return (
  //   <div className="container">
  //     <Main/>
  //   </div>
  // );
  return (
    <div style={{width: '400px', height: "400px"}}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
