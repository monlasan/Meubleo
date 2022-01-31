import { useProductStore } from '@/stores/products.store';
import { useState, useRef } from 'react';
import { Formik, Form } from 'formik';
import { FaRedo } from 'react-icons/fa';
import TextField from '@/components/TextField';
import FileInputField from '@/components/FileInputField';
import TextareaField from '@/components/TextareaField';
import * as Yup from 'yup';
import axios from 'axios';

function AddProduct({ showMe }) {
  const [productImage, setproductImage] = useState('');
  const addNewProduct = useProductStore((state) => state.addProduct);

  const fileinputref = useRef();
  const validate = Yup.object().shape({
    productName: Yup.string()
      .max(50, '50 caractères au plus')
      .required('Champ requis'),
    productDescription: Yup.string().required('Champ requis'),
    productPrice: Yup.number().required('Champ requis'),
    numberInStock: Yup.number().required('Champ requis'),
  });

  return (
    <div
      onClick={(e) => {
        showMe();
      }}
      className='w-full min-h-screen z-[1000] absolute cursor-pointer bg-black/60 grid place-items-center'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='p-3 bg-white relative border my-10 pointer-events-auto shadow-md rounded-md'
      >
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
            photo: '',
          }}
          validationSchema={validate}
          onSubmit={async (values, { resetForm }) => {
            if (!productImage) {
              return console.error('Il faut une image');
            }
            let formData = new FormData();
            formData.append('productName', values.productName);
            formData.append('productDescription', values.productDescription);
            formData.append('productPrice', values.productPrice);
            formData.append('numberInStock', values.numberInStock);
            formData.append('photo', productImage);
            try {
              await axios
                .post('http://localhost:5000/api/products/', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                })
                .then((response) => {
                  console.log(response.data);
                  addNewProduct(response.data);
                })

                .catch((error) => {
                  console.log(error);
                });
              fileinputref.current.value = '';
              resetForm();
              console.info('FORM SUBMITTED');
            } catch (err) {
              console.error('Something Went Wrong', err);
            }
          }}
        >
          {() => (
            <Form className='grid w-64 sm:max-w-lg'>
              <br className='mb-2' />
              <TextField label='Nom' name='productName' type='text' />
              <TextField label='Prix' name='productPrice' type='number' />
              <TextField label='En stock' name='numberInStock' type='number' />
              <TextareaField name='productDescription' label='Description' />
              <FileInputField
                setImage={setproductImage}
                reference={fileinputref}
                label='Image produit'
                name='photo'
                type='file'
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
