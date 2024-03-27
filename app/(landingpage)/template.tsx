import { cookies } from 'next/headers';
import ContactContent from './ContactContent';
import Footer from './Footer';
import Navbar from './Navbar';

export default async function Template({ children }: { children: React.ReactNode }) {
  const data = cookies().get('auth');

  return (
    <section className="min-h-screen flex flex-col w-screen">
      <section className="mb-[5rem]">
        <Navbar auth={data?.value === 'true'} />
      </section>
      {children}
      <section className=" mt-auto">
        <ContactContent />
        <Footer />
      </section>
    </section>
  );
}
