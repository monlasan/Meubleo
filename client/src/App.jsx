import Navbar from './components/Navbar';
import DesignCard from '@/components/ProductCard';
import PresentationCard from '@/components/PresentationCard';

function App() {
  return (
    <div className='bg-gray-100/80 min-h-full'>
      <Navbar />
      <main className='pt-4 p-4'>
        <div className='container flex gap-3 items-center flex-col sm:flex-row sm:items-start sm:justify-center'>
          <PresentationCard bottom={false} />
          <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
            <DesignCard />
            <DesignCard />
            <DesignCard />
            <DesignCard />
            <DesignCard />
            <DesignCard />
            <DesignCard />
            <DesignCard />
            <DesignCard />
          </div>
          <PresentationCard bottom={true} />
        </div>
      </main>
    </div>
  );
}

export default App;
