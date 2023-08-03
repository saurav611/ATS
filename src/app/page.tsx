import Navbar from '@/components/Common/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar customClass={'mt-7'} />
    </main>
  );
}
