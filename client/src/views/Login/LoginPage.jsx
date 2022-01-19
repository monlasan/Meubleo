import Navbar from '../../components/Navbar';
import LoginForm from '../../components/Layout/LoginForm';

function LoginPage() {
  return (
    <div className='bg-gray-100/80 min-h-screen'>
      <Navbar />
      <main className='pt-4 p-4 '>
        <div className='container mt-10 grid place-items-center'>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
