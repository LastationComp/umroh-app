import ContactContent from './ContactContent';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
      <ContactContent />
      <Footer />
    </section>
  );
}
