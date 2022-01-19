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

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
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
                  className='bg-gray-800 text-white py-1.5 px-3 rounded-md'
                >
                  Se connecter
                </button>
                <button
                  type='reset'
                  className='text-white bg-red-600 p-2.5 rounded-md'
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
