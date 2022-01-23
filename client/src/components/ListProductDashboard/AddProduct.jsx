import { Formik, Form } from 'formik';
import { FaRedo } from 'react-icons/fa';
import TextField from '@/components/TextField';
import TextareaField from '@/components/TextareaField';
import * as Yup from 'yup';

function AddProduct() {
  const validate = Yup.object({
    productName: Yup.string()
      .max(50, '50 caractères au plus')
      .required('Champ requis'),
    productDescription: Yup.string().required('Champ requis'),
    productPrice: Yup.number().required('Champ requis'),
    numberInStock: Yup.number().required('Champ requis'),
  });

  return (
    <div className='w-full min-h-screen z-[1000] absolute bg-black/60 grid place-items-center'>
      <div className='p-3 bg-white relative border pointer-events-auto shadow-md rounded-md'>
        <h3 className='font-medium absolute text-white -translate-y-9 translate-x-[-50%] left-[50%] text-d p-3 px-6 shadow-md shadow-indigo-500/50 rounded-md bg-indigo-500 w-[max-content]'>
          Ajouter produit
        </h3>
        <br />
        <Formik
          initialValues={{
            productName: '',
            productDescription: '',
            productPrice: 0,
            numberInStock: 0,
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(
              values.productName +
                `\n` +
                values.productDescription +
                `\n` +
                values.productPrice +
                `\n` +
                values.numberInStock +
                `\n` +
                'Product Added with success'
            );
          }}
        >
          {() => (
            <Form className='grid w-64 sm:max-w-lg'>
              <br className='mb-2' />
              <TextField label='Nom' name='productName' type='text' />
              <TextField label='Prix' name='productPrice' type='number' />
              <TextField label='En stock' name='numberInStock' type='number' />
              <TextareaField name='productDescription' label='Description' />
              <label htmlFor='file' className='text-gray-700'>
                Image du produit
              </label>
              <input
                type='file'
                name=''
                id='file'
                className='file:bg-indigo-500 overflow-hidden file:border-0 file:p-2 pb-2 file:rounded-md file:text-white file:shadow-sm file:shadow-indigo-500/80'
              />
              <br className='mb-3' />
              <div className='place-self-end gap-2 flex items-center'>
                <button
                  type='submit'
                  className='shadow-indigo-500/50 border-2 border-indigo-500 rounded-md bg-indigo-500 shadow-md pointer-events-auto hover:bg-indigo-600 text-white py-1 px-3'
                >
                  Ajouter
                </button>
                <button
                  type='reset'
                  className='text-white border-2 border-red-700 bg-red-600 p-2 rounded-md'
                >
                  <FaRedo />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddProduct;
