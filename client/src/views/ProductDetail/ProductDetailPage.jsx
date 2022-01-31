import Navbar from '@/components/Navbar';
import { useParams } from 'react-router-dom';
import ImgTest from '@/assets/images/product_img.jpg';
import { useProductStore } from '@/stores/products.store';

function ProductDetailPage() {
  let params = useParams();
  let findid = useProductStore((state) => state.getProductById);
  findid(params.id);
  let productid = useProductStore((state) => state.product);
  // console.log(productid);

  return (
    <div className='bg-gray-100/80 min-h-screen'>
      <Navbar />
      <main className='pt-4 p-4 '>
        <div className='container items-center justify-center md:items-start gap-4 mt-10 flex md:flex-row flex-col'>
          <div>
            <img
              src={`http://localhost:5000/${productid.pictureURI}`}
              alt='Product Detail Image'
              className='object-cover max-w-sm rounded-md'
            />
            <br />
            {/* start max-w-[40ch] */}
            <div className='bg-white w-full md:w-auto  border rounded-md p-2'>
              <span>{productid.price}fcfa</span>
              <hr className='my-2' />
              <div>
                <span>Status:</span>
                <span className='ml-1 font-medium text-indigo-800'>
                  {productid.quantity === 0 ? 'Fini' : 'En stock'}
                </span>
              </div>
              <hr className='my-2' />
              <div>
                <form action='' className='grid'>
                  <label htmlFor='cars'>Quantité:</label>
                  <select
                    name='cars'
                    className='mt-2 p-2 x-4 rounded-md border border-gray-300'
                    id='cars'
                  >
                    <option value='volvo'>1</option>
                    <option value='saab'>2</option>
                    <option value='opel'>3</option>
                    <option value='audi'>4</option>
                  </select>
                  <br />

                  <br />
                  <button className='w-fit justify-self-end mt-2 p-2 px-4 bg-black rounded-md text-white'>
                    Acheter
                  </button>
                </form>
              </div>
            </div>
            {/* end */}
          </div>
          <div className='flex w-fit flex-col gap-2'>
            <div className='bg-white text-indigo-800 border rounded-md p-2'>
              {productid.productName}
            </div>
            <div className='bg-white border rounded-md p-2'>
              <span className='font-semibold'>Prix: </span>
              {productid.price}fcfa
            </div>
            <div className='bg-white max-w-[40ch] flex-1 border rounded-md p-2'>
              <p>
                <span className='font-semibold'>Description : </span>
                {productid.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetailPage;
