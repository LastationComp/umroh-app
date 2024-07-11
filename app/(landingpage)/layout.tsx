import ContactContent from "./ContactContent";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getServerSession } from "next-auth";
import { AuthOptions } from "../api/auth/AuthOptions";
import Provider from "@/components/Provider";
import { getUserComparison } from "./action";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(AuthOptions);
  const comparison_count = await getUserComparison();
  return (
    <section className="min-h-screen flex flex-col bg-tacao">
      <section className="relative">
        <Provider session={session}>
          <Navbar session={session} comparison={comparison_count} />
        </Provider>
        <div className="my-3">{children}</div>
      </section>

      <section className=" mt-auto max-md:container-md max-md:mx-3">
        <ContactContent />
        <Footer />
      </section>
    </section>
  );
}
