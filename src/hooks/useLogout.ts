import { useRouter } from 'next/navigation';

export default function useLogout() {
  const router = useRouter();

  function deleteLoginCookie() {
    document.cookie = 'isUserLogged=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  const logOut = () => {
    if (typeof window !== 'undefined') {
      deleteLoginCookie();
      localStorage.clear();
    }

    router.push('/');
  };

  return { logOut };
}
