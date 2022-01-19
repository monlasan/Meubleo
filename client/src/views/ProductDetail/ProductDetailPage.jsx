import Navbar from '@/components/Navbar';
import ImgTest from '@/assets/images/product_img.jpg';

function ProductDetailPage() {
  return (
    <div className='bg-gray-100/80 min-h-screen'>
      <Navbar />
      <main className='pt-4 p-4 '>
        <div className='container items-center justify-center md:items-start gap-4 mt-10 flex md:flex-row flex-col'>
          <img
            src={ImgTest}
            alt='Product Detail Image'
            className='object-cover max-w-sm rounded-md'
          />
          <div className='flex w-fit flex-col gap-2'>
            <div className='bg-white text-indigo-800 border rounded-md p-2'>
              Ramen Ichiraku
            </div>
            <div className='bg-white border rounded-md p-2'>
              <span className='font-semibold'>Prix: </span>
              2000fcfa
            </div>
            <div className='bg-white max-w-[40ch] flex-1 border rounded-md p-2'>
              <p>
                <span className='font-semibold'>Description : </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis architecto suscipit ea maiores distinctio impedit
                dolore, hic quas obcaecati in consequuntur ipsa facilis eaque
                nesciunt maxime ullam dolor dolorum, at amet ad consectetur a
                numquam?
              </p>
            </div>
          </div>
          <div className='bg-white w-full md:w-auto max-w-[40ch]  border rounded-md p-2'>
            <span>Prix: 200fcfa</span>
            <hr className='my-2' />
            <div>
              <span>Status:</span>
              <span className='ml-1 font-medium text-indigo-800'> Fini</span>
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
                <button className='w-fit justify-self-center mt-8 p-2 px-4 bg-black rounded-md text-white'>
                  Acheter
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetailPage;
