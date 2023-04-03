import { ModalContextProvider } from '@/contexts/ModalContext';
import { GroupContextProvider } from '@/contexts/GroupContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Alert from '@/components/subcomponents/Alert/Alert';
import '../../global-styles/globals.css';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ModalContextProvider>
        <GroupContextProvider>
          <Header />
          <main className="main">{children}</main>
          <Alert />
          <Footer />
        </GroupContextProvider>
      </ModalContextProvider>
    </>
  );
}
