import { ErrorMessage, useField } from 'formik';

function FileInputField({ label, name, type, reference, setImage }) {
  // const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={name} className='text-gray-700'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        ref={reference}
        onChange={(e) => setImage(e.currentTarget.files[0])}
        className='file:bg-indigo-500 overflow-hidden file:border-0 file:p-2 pb-2 file:rounded-md file:text-white file:shadow-sm file:shadow-indigo-500/80'
      />
      <ErrorMessage
        component='div'
        name={name}
        className='text-red-600 font-mono mt-2 text-xs'
      />
    </>
  );
}

export default FileInputField;
