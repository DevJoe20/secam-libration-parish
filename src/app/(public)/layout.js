
import Footer from "@/components/Homepage/Footer";
import Navbbar from "@/components/Homepage/Navbar";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbbar />

      <main>
        {children}
      </main>

      <Footer />

    </>
  );
}
