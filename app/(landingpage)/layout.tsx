import ContactContent from './ContactContent';
import Footer from './Footer';
import Navbar from './Navbar';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '../api/auth/AuthOptions';
import Provider from '@/components/Provider';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(AuthOptions);
  return (
    <section className="min-h-screen flex flex-col w-screen">
      <section className="mb-[5rem]">
        <Provider session={session}>
          <Navbar session={session} />
        </Provider>
      </section>
      {children}
      <section className=" mt-auto">
        <ContactContent />
        <Footer />
      </section>
    </section>
  );
}
