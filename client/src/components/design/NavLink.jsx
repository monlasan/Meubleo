import { Link } from 'react-router-dom';

function NavLink({ text, page }) {
  return (
    <li>
      <Link
        className='text-gray-400 transition-all px-3 py-4 hover:underline hover:decoration-4 hover:underline-offset-[19px]'
        to={`${page}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default NavLink;
