import NavLink from './design/NavLink';
import Barline from '../assets/images/bar-line.jpg';
import CartButton from '@/components/CartButton/CartButton';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar() {
  // const [showCartModal, setShowCartModal] = useState(false);

  return (
    <div>
      <nav className='bg-white shadow-sm shadow-gray-120 p-2'>
        <div className='container flex items-center justify-between'>
          <div className='flex gap-4'>
            <Link to='/'>
              <div className='bg-gray-900 text-slate-50 text-2xl w-11 text-center font-bold px-1.5 py-1 rounded-[3px]'>
                <div className='-rotate-45'>M</div>
              </div>
            </Link>
            {/* <div className='hidden md:flex items-center relative'>
              <input
                type='text'
                placeholder='Search...'
                className='py-1.5 px-2 rounded-md outline-none w-80 border-2'
              />
              <div className='absolute w-7 h-7 pointer-events-none bg-white translate-y-[50%] bottom-5 right-5'></div>
              <FaSearch className='text-gray-400 pointer-event-none -translate-x-6' />
            </div> */}
          </div>
          <div className='flex gap-2 items-center'>
            <button className='hover:bg-indigo-50 px-2 py-1.5 text-gray-700 rounded-md'>
              <Link to='/register'>S'inscrire</Link>
            </button>
            <button className='text-indigo-800 py-1 px-2 w-30 md: rounded-md border border-indigo-800'>
              <Link to='/login'>Se connecter</Link>
            </button>
            <CartButton />
          </div>
          {/* <ul className='hidden lg:flex'>
            <NavLink text='Accueil' page='/' />
            <NavLink text='Services' page='/services' />
            <NavLink text='A propos de nous' page='/aboutus' />
            <NavLink text='Contact' page='/contact' />
          </ul> */}
        </div>
      </nav>
      <img src={Barline} className='h-2 w-full object-cover' alt='' />
      <ul className='hidden lg:flex justify-center'>
        QuickLinks:
        <NavLink text='Profile' page='/profile' />
        <NavLink text='Panier' page='/cart' />
        <NavLink text='DescProduit' page='/product' />
        <NavLink text='ADMIN-PANEL' page='/dashboard' />
      </ul>
    </div>
  );
}
export default Navbar;
