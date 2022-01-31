import { Link } from 'react-router-dom';

function DesignCard({ productInfos }) {
  return (
    <div className='grid max-w-[260px] sm:max-w-full bg-white p-4 border border-gray-200 rounded-md'>
      <Link
        to={`/product/${productInfos._id}`}
        className='bg-indigo-700 rounded-md overflow-hidden'
      >
        <img
          src={`http://localhost:5000/${productInfos.pictureURI}`}
          alt='Image'
          className='h-40 object-cover bg-indigo-600 hover:opacity-80 transition-opacity duration-300'
        />
      </Link>
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
        {productInfos.productName}
      </span>
      <span className='text-sm tracking-wider text-gray-800'>
        {productInfos.price}Fcfa
      </span>
      <div className='w-full grid'>
        <button className='bg-black text-white font-medium text-sm w-fit justify-self-end px-2 py-1 rounded-md'>
          Acheter
        </button>
      </div>
    </div>
  );
}

export default DesignCard;
