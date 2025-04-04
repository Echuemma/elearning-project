import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import DashboardPage from '../pages/DashboardPage';
import FpasswordPage from '../pages/FpasswordPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';



const BaseRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="Fpassword" element={<FpasswordPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<RegistrationPage />} />
      
    </Routes>
  );
};

export default BaseRouter;