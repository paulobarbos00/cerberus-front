import { useRouter } from 'next/navigation';

export default function useLogout() {
  const router = useRouter();

  const logOut = () => {
    if (typeof window !== 'undefined') {
      document.cookie = `isUserLogged=`;
      localStorage.removeItem('userLoggedInfo');
      localStorage.removeItem('userLoggedId');
    }

    router.push('/');
  };

  return { logOut };
}
