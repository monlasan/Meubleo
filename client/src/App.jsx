import Navbar from './components/Navbar';
import ProductCard from '@/components/ProductCard';
import PresentationCard from '@/components/PresentationCard';
import { useState, useEffect } from 'react';
import { useProductStore } from '@/stores/products.store';

function App() {
  let productsList = useProductStore((state) => state.products);

  const [userInfo, setUserInfo] = useState('');

  useEffect((userInfo) => {
    if (!localStorage.getItem('authToken')) {
      return;
    }
    setUserInfo(localStorage.getItem('authToken'));
  }, []);

  return (
    <div className='bg-gray-100/80 min-h-screen'>
      {userInfo}
      <Navbar />
      <main className='pt-4 p-4'>
        <div className='container flex gap-3 items-center flex-col sm:flex-row sm:items-start sm:justify-center'>
          <PresentationCard bottom={false} />
          {productsList.length === 0 ? (
            <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
              <span></span>
              <div className='bg-white border text-gray-600 rounded-md p-2'>
                <p>Il n'y a aucun produit...</p>
              </div>
            </div>
          ) : (
            <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
              {productsList.map((p) => (
                <ProductCard key={p._id} productInfos={p} />
              ))}
            </div>
          )}
          <PresentationCard bottom={true} />
        </div>
      </main>
    </div>
  );
}

export default App;
