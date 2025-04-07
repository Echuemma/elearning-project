import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DashboardLayout from '../pages/DashboardLayout';
import FpasswordPage from '../pages/FpasswordPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import DashboardHome from '../pages/DashboardHome';
// import CoursesPage from '../pages/CoursesPage';
// import CertificatesPage from '../pages/CertificatesPage';
// import LearningPathwaysPage from '../pages/LearningPathwaysPage';
// import BadgesPage from '../pages/BadgesPage';

const BaseRouter = () => {
  return (
    <Routes>
      {/* Public routes outside the dashboard */}
      <Route path="/" element={<HomePage />} />
      <Route path="Fpassword" element={<FpasswordPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<RegistrationPage />} />
      
      {/* Nested routes inside the dashboard layout */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        {/* <Route path="courses" element={<CoursesPage />} /> */}
        {/* <Route path="certificates" element={<CertificatesPage />} /> */}
        {/* <Route path="learning-pathways" element={<LearningPathwaysPage />} /> */}
        {/* <Route path="badges" element={<BadgesPage />} /> */}
      </Route>
    </Routes>
  );
};

export default BaseRouter;