import { FaTrashAlt, FaPen } from 'react-icons/fa';

function Product({ productInfos }) {
  return (
    <div className='bg-white border flex items-center justify-between rounded-md p-2'>
      <div className='flex items-center gap-4'>
        <table>
          <tbody>
            <tr>
              <td className=' w-16'>
                <img
                  src={`http://localhost:5000/${productInfos.pictureURI}`}
                  alt='Product image thumbnail'
                  className='rounded-md w-12 h-10 object-cover border'
                />
              </td>
              <td className=' w-32'>
                <div>{productInfos.productName}</div>
              </td>
              <td className=' w-32'>
                <div className=''> {productInfos.price} fcfa</div>
              </td>
              <td>
                <div className='text-xs bg-indigo-100/80 p-1 px-2 rounded border border-indigo-200'>
                  <span className='text-indigo-500'>En Stock:</span>
                  <span className='ml-2 text-indigo-600 font-medium'>
                    {productInfos.quantity}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <form action='' className='grid'>
          <select
            name='cars'
            className='p-1 x-4 rounded-md border border-gray-300'
            id='cars'
          >
            <option value='volvo'>1</option>
            <option value='saab'>2</option>
            <option value='opel'>3</option>
            <option value='audi'>4</option>
          </select>
        </form> */}
      </div>
      <div className='flex gap-1'>
        <button className='p-2 text-white rounded-md bg-blue-800 hover:bg-blue-900'>
          <FaPen />
        </button>

        <button className='p-2 text-white rounded-md bg-red-600 hover:bg-red-700'>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Product;
