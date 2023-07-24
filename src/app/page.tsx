
import Jobs from '@/components/Common/Jobs';
import Navbar from '@/components/Common/Navbar';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen ">
      <Navbar customClass={'mt-7'} />
      <Jobs customClass={'mt-7 ml-44'}/>
      
    </main>
  );
}
