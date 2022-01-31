import axios from 'axios';
import Product from '@/components/ListProductDashboard/Product';
import { useProductStore } from '@/stores/products.store';

function ProductsDashboard() {
  let products = useProductStore((state) => state.products);

  return (
    <>
      {products.length === 0 ? (
        <div className='bg-white border text-gray-600 flex items-center justify-center rounded-md p-2'>
          Il n'y a aucun produit...
        </div>
      ) : null}
      {products.map((p) => (
        <Product key={p._id} productInfos={p} />
      ))}
    </>
  );
}

export default ProductsDashboard;
