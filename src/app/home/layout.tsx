import '../../global-styles/globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { ModalContextProvider } from '@/contexts/ModalContext';
import Alert from '@/components/subcomponents/Alert/Alert';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ModalContextProvider>
        <Header />
        <main className="main">{children}</main>
        <Alert />
        <Footer />
      </ModalContextProvider>
    </>
  );
}
