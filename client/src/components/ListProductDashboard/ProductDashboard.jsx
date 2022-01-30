import ImgProduct from '@/assets/images/product_img.jpg';
import { FaTrashAlt, FaPen } from 'react-icons/fa';

function ProductDashboard() {
  return (
    <div className='bg-white border flex items-center justify-between rounded-md p-2'>
      <div className='flex items-center gap-4'>
        <img
          src={ImgProduct}
          alt='Product image thumbnail'
          className='rounded-md w-12 h-10 object-cover border'
        />
        <div>Ramen Ichiraku</div>
        <div className=''>2000fcfa</div>
        <form action='' className='grid'>
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
        </form>
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

export default ProductDashboard;
