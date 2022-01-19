import Navbar from '../../components/Navbar';
import ImgTest from '@/assets/images/product_img.jpg';
import { FaTrashAlt } from 'react-icons/fa';

function CartPage() {
  return (
    <div className='bg-gray-100/80 min-h-screen'>
      <Navbar />
      <main className='pt-4 p-4 '>
        <div className='container grid gap-3 mt-10'>
          <div className='flex gap-3 items-center'>
            <span>Total (2)</span>
            <div className='w-10 h-0.5 rounded bg-gray-700'></div>
            <span>85051 FCFA</span>
          </div>
          <div className='bg-white border flex items-center justify-between rounded-md p-2'>
            <div className='flex items-center gap-4'>
              <img
                src={ImgTest}
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
            <button className='p-2 text-white rounded-md bg-red-600'>
              <FaTrashAlt className='' />
            </button>
          </div>

          <div className='bg-white border flex items-center justify-between rounded-md p-2'>
            <div className='flex items-center gap-4'>
              <img
                src={ImgTest}
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
            <button className='p-2 text-white rounded-md bg-red-600'>
              <FaTrashAlt className='' />
            </button>
          </div>

          <button className='p-3 px-4 mt-1.5 w-fit justify-self-end rounded-md hover:bg-indigo-100 hover:border-indigo-300 hover:text-indigo-800 text-sm border-2 border-gray-500 text-black'>
            Procéder au paiement
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartPage;
