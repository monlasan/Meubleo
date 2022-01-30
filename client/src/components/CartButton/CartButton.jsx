import { FaShoppingCart } from 'react-icons/fa';

function CartButton({ props }) {
  return (
    <button
      {...props}
      className='text-white relative bg-black w-24 h-8 justify-between flex px-3 items-center rounded-md'
    >
      <div>
        <FaShoppingCart />
      </div>
      <div className='font-semibold'>229f</div>
      <div className='bg-white text-black top-0 right-0 border-2 mt-10 shadow-md absolute rounded-md '>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eius?
      </div>
    </button>
  );
}

export default CartButton;
