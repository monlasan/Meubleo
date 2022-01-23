import { ErrorMessage, useField } from 'formik';

function TextAreaField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='mb-2'>
      <label htmlFor={field.name} className='text-gray-700'>
        {label}
      </label>
      <br />

      <textarea
        className={`bg-gray-50 focus:outline-none w-full p-1.5 rounded-md border ${
          meta.touched && meta.error && 'border-red-500'
        } `}
        {...field}
        {...props}
      ></textarea>
      <ErrorMessage
        component='div'
        name={field.name}
        className='text-red-600 font-mono mt-2 text-xs'
      />
    </div>
  );
}

export default TextAreaField;
