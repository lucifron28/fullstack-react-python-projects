import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Auth/Login.jsx';
// import Register from './components/Auth/Register.jsx';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace/>} />
        <Route path="/login" element={<Login />} />
        {/*<Route path="/register" element={<Register />} />*/}
      </Routes>
  );
}

export default App;
