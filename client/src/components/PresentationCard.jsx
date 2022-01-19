import { Link } from 'react-router-dom';

function PresentationCard({ bottom }) {
  return (
    <div
      className={`${
        bottom ? 'grid sm:hidden' : 'hidden sm:grid'
      } max-w-[260px] h-fit bg-white p-4 border border-gray-200 rounded-md`}
    >
      <span className='text-xl font-medium text-gray-800'>
        <span className='font-bold text-indigo-800'>Bookeo Syndicate </span>
        est une communauté de fantastiques lecteurs
      </span>
      <br className='mb-4' />
      <span className='font-light text-md'>
        Nous sommes un endroit où les lecteurs peuvent partager et restez
        informez des livres que d’autres lecteurs lisent.
      </span>
      <br className='mb-4' />

      <Link
        to='/login'
        className='text-indigo-800 cursor-pointer text-center justify-self-center w-44 py-1.5 mx-6 rounded-md border border-indigo-800'
      >
        Se connecter
      </Link>
      <br className='mb-2' />
      <Link
        to='/register'
        className='hover:bg-indigo-50 cursor-pointer transition duration-150 text-gray-800 justify-self-center text-center py-1.5 w-44 rounded-md'
      >
        S'inscrire
      </Link>
    </div>
  );
}

export default PresentationCard;
