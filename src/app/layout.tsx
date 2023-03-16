import '../global-styles/globals.css';
import { GlobalContextProvider } from '../contexts/GlobalContext';

export const metadata = {
  title: 'Cerberus Project',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
