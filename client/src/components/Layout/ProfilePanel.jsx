import { FaRedo } from 'react-icons/fa';
import Barline from '../../assets/images/bar-line.jpg';

function ProfilePanel() {
  return (
    <div className='bg-white relative w-96 border overflow-hidden rounded-md shadow-md'>
      <div className='absolute translate-y-[50%] translate-x-[-50%] left-[50%]'>
        <img
          src={Barline}
          alt='Profile Picture'
          className='w-20 border-white border-4 my-0 mx-auto h-20 object-cover rounded-full'
        />
      </div>
      <img src={Barline} className='object-cover w-full mb-10 h-20' alt='' />
      <div className='p-4'>
        <table className='w-full'>
          <tbody>
            <tr>
              <td className='text-indigo-800 font-medium pr-16'>Nom</td>
              <td>Akoutey</td>
            </tr>
            <tr>
              <td className='text-indigo-800 font-medium'>Prénom</td>
              <td>Sedaltan</td>
            </tr>
            <tr>
              <td className='text-indigo-800 font-medium'>Email</td>
              <td>akouteysedal@gmail.com</td>
            </tr>
            <tr>
              <td className='text-indigo-800 font-medium'></td>
              <td className='grid mt-6'>
                <button className='text-xs w-fit justify-self-end hover:text-indigo-500 font-medium p-2 text-gray-700 rounded-md bg-indigo-50'>
                  Changer mot de passe
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfilePanel;
