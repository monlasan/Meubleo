import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import * as Yup from 'yup';
import { FaRedo } from 'react-icons/fa';
import Barline from '../../assets/images/bar-line.jpg';

function Register() {
  const validate = Yup.object({
    email: Yup.string()
      .email("Cet email n'est pas valide")
      .required("L'email est requis"),
    password: Yup.string()
      .min(6, "Le mot de passe doit être d'au moins 6 caractères")
      .required('Mot de passe requis'),
  });

  let navigate = useNavigate();

  async function LoginLogic(userInfo) {
    const email = userInfo.email;
    const password = userInfo.password;

    const serverURL = 'http://localhost:5000';
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        `${serverURL}/api/auth/login`,
        { email, password },
        config
      );

      localStorage.setItem('authToken', data.token);
      navigate(`/`, { replace: true });
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        LoginLogic(values);
      }}
    >
      {({ isSubmitting }) => (
        <div className='bg-white relative w-fit border overflow-hidden rounded-md shadow-md'>
          <h1 className='text-3xl absolute left-[50%] font-bold drop-shadow top-5 -translate-x-[50%] text-white'>
            Se connecter
          </h1>
          <img src={Barline} className='object-cover w-full h-20' alt='' />
          <div className='p-4'>
            <Form>
              <TextField label='Email' name='email' type='email' />
              <TextField label='Mot de passe' name='password' type='password' />

              <div className='flex mt-6 items-center justify-between gap-2'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-gray-800 border-2 border-gray-900 text-white py-1 px-3 rounded-md'
                >
                  Se connecter
                </button>
                <button
                  type='reset'
                  className='text-white border-2 border-red-700 bg-red-600 p-2 rounded-md'
                >
                  <FaRedo />
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Register;
