import Navbar from '../../components/Navbar';
import ProfilePanel from '../../components/Layout/ProfilePanel';

function ProfilePage() {
  return (
    <div className='bg-gray-100/80 min-h-screen'>
      <Navbar />
      <main className='pt-4 p-4 '>
        <div className='container mt-10 grid place-items-center'>
          <ProfilePanel />
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
