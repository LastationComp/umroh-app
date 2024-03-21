import dynamic from 'next/dynamic';
import ContactContent from './ContactContent';
import Footer from './Footer';
import Navbar from './Navbar';

// const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex flex-col">
      <section className="mb-[5rem]">
        <Navbar />
      </section>
      {children}
      <section className=" mt-auto">
        <ContactContent />
        <Footer />
      </section>
    </section>
  );
}
