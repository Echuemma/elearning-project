import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import CoursePage from '../pages/CoursePage';
// import DashboardPage from '../pages/DashboardPage';
import FpasswordPage from '../pages/FpasswordPage';
import LoginPage from '../pages/LoginPage';
// import LearningPage from '../pages/LearningPage';
// import NotificationPage from '../pages/NotificationPage';
// import SettingPage from '../pages/SettingPage';
// import CoursecompletionPage from '../pages/CoursecompletionPage';
import RegistrationPage from '../pages/RegistrationPage';
// import CourseviewPage from '../pages/CourseviewPage';


const BaseRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="course" element={<CoursePage />} /> */}
      {/* <Route path="dashboard" element={<DashboardPage />} /> */}
      <Route path="Fpassword" element={<FpasswordPage />} />
      <Route path="login" element={<LoginPage />} />
      {/* <Route path="learning" element={<LearningPage />} /> */}
      {/* <Route path="notification" element={<NotificationPage />} /> */}
      {/* <Route path="progress" element={<ProgressTrackPage />} /> */}
      {/* <Route path="setting" element={<SettingPage />} /> */}
      {/* <Route path="coursecompletion" element={<CoursecompletionPage />} /> */}
      {/* <Route path="courseview" element={<CourseviewPage />} /> */}
      <Route path="register" element={<RegistrationPage />} />
    </Routes>
  );
};

export default BaseRouter;
