import Navbar from '@/components/Navbar';
import ProductDashboard from '@/components/ListProductDashboard/ProductDashboard';
import AddProductModal from '@/components/ListProductDashboard/AddProduct';
import { FaPlus } from 'react-icons/fa';
function DashboardPage() {
  return (
    <div className='bg-gray-100/80 min-h-screen'>
      <AddProductModal />

      <Navbar />
      <main className='pt-4 p-4 '>
        <div className='container grid gap-3 mt-10'>
          <button className='p-1.5 place-self-end w-fit flex items-center gap-3 bg-indigo-700 px-3 text-white rounded-md'>
            <FaPlus className='text-sm' />
            Ajouter produit
          </button>
          <ProductDashboard />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
