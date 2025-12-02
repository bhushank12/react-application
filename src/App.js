import './App.css';
import { Routes, Route } from "react-router-dom";
import Settings from './components/Settings';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import NotFound from './components/NotFound';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserInfo />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
      </Routes>
    </div>
  );
}

export default App;
