import './App.css';
import { Routes, Route } from "react-router-dom";
import Settings from './components/Settings';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
      </Routes>
    </>
  );
}

export default App;
