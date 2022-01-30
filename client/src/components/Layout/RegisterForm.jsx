import RegisterLogic from '../../views/Register/RegisterLogic';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import * as Yup from 'yup';
import { FaRedo } from 'react-icons/fa';
import Barline from '../../assets/images/bar-line.jpg';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, '15 caractères au plus')
      .required('Champ requis'),
    lastName: Yup.string()
      .max(20, '20 caractères au plus')
      .required('Champ requis'),
    email: Yup.string()
      .email("Cet email n'est pas valide")
      .required("L'email est requis"),
    password: Yup.string()
      .min(6, "Le mot de passe doit être d'au moins 6 caractères")
      .required('Mot de passe requis'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent concordés')
      .required('Confirmation de mot de passe requise'),
  });

  let navigate = useNavigate();
  async function RegisterLogic(userInfo) {
    const firstName = userInfo.firstName;
    const lastName = userInfo.lastName;
    const username = `${firstName} ${lastName}`;
    const email = userInfo.email;
    const password = userInfo.password;
    //2:29:00 privateData
    const serverURL = 'http://localhost:5000';
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        `${serverURL}/api/auth/register`,
        { username, email, password },
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        RegisterLogic(values);
      }}
    >
      {({ isSubmitting }) => (
        <div className='bg-white relative w-fit border overflow-hidden rounded-md shadow-md'>
          <h1 className='text-3xl absolute left-[50%] font-bold drop-shadow top-6 -translate-x-[50%] text-white'>
            S'inscrire
          </h1>
          <img src={Barline} className='object-cover w-full h-20' alt='' />
          <div className='p-4'>
            <Form>
              <TextField label='Nom' name='firstName' type='text' />
              <TextField label='Prénom' name='lastName' type='text' />
              <TextField label='Email' name='email' type='email' />
              <TextField label='Mot de passe' name='password' type='password' />
              <TextField
                label='Confirmer mot de passe'
                name='confirmPassword'
                type='password'
              />
              <div className='flex mt-6 items-center justify-between gap-2'>
                <button
                  type='submit'
                  className='bg-gray-800 border-2 border-gray-900 text-white py-1 px-3 rounded-md'
                >
                  S'inscrire
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
