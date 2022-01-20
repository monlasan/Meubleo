import ProductImage from '@/assets/images/product_img.jpg';
import { FaHeart } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

function DesignCard() {
  return (
    <div className='grid max-w-[260px] sm:max-w-full bg-white p-4 border border-gray-200 rounded-md'>
      <img
        src={ProductImage}
        alt='Image'
        className=' h-40 rounded-md object-cover'
      />
      <br className='mb-2' />
      {/* <div className='flex gap-2 items-center'>
        <img
          src={ProductImage}
          alt='profile_pic'
          className='object-cover w-10 h-10 rounded-md'
        />
        <div className='text-xs'>
          <span className='font-medium'>Abdoulaye Yari</span>
          <br />
          <span className='text-gray-400'>11 Janvier</span>
        </div>
      </div>
      <br className='mb-2' /> */}

      <span className='text-md tracking-wider text-indigo-800 font-medium'>
        Ramen Ichiraku
      </span>
      <span className='text-sm tracking-wider text-gray-800'>2000Fcfa</span>
      <div className='w-full grid'>
        <button className='bg-black text-white font-medium text-sm w-fit justify-self-end px-2 py-1 rounded-md'>
          Acheter
        </button>
      </div>
    </div>
  );
}

export default DesignCard;
