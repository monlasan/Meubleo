import Navbar from '../../components/Navbar';
import RegisterForm from '../../components/Layout/RegisterForm';

function RegisterPage() {
  return (
    <div className='bg-gray-100/80 min-h-screen'>
      <Navbar />
      <main className='pt-4 p-4 '>
        <div className='container mt-10 grid place-items-center'>
          <RegisterForm />
        </div>
      </main>
    </div>
  );
}

export default RegisterPage;
