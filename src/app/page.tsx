import Navbar from "@/components/Common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar customClass={"mt-7"} />
    </main>
  );
}
