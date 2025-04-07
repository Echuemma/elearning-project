import NavBar from '../../components/NavBar';
import Login from '../../components/Login';

function LoginPage() {
  const navLinks = [
    { label: "Login", href: "/" },
    { label: "Home", href: "/courses" },
    { label: "Courses", href: "/#statistics" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <div>
      <NavBar navLinks={navLinks} showAuthButtons={false} />
      <Login />
    </div>
  );
}

export default LoginPage;
