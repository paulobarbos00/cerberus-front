import { GroupContextProvider } from '@/contexts/GroupContext';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GroupContextProvider>{children}</GroupContextProvider>
    </>
  );
}
