import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductsDashboard from '@/components/ListProductDashboard/ProductsDashboard';
import AddProductModal from '@/components/ListProductDashboard/AddProduct';
import { FaPlus } from 'react-icons/fa';

function DashboardPage() {
  const [ToggleModalAddProduct, setToggleModalAddProduct] = useState(false);

  return (
    <div className='bg-gray-100/80 min-h-screen'>
      {ToggleModalAddProduct && (
        <AddProductModal showMe={setToggleModalAddProduct} />
      )}

      <Navbar />
      <main className='pt-4 p-4 '>
        <div className='container grid gap-3 mt-10'>
          <button
            onClick={() => {
              setToggleModalAddProduct(!ToggleModalAddProduct);
            }}
            className='p-1.5 place-self-end w-fit flex items-center gap-3 bg-indigo-700 px-3 text-white rounded-md'
          >
            <FaPlus className='text-sm' />
            Ajouter produit
          </button>

          <ProductsDashboard />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
