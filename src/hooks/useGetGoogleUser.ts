'use client';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  Auth
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { app } from '@/services/firebaseConfig';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useRouter } from 'next/navigation';
import API from '@/services/axiosConfig';

export interface ICreateGoogleUserProps {
  displayName: string | null;
  email: string | null;
  googleUid: string | null;
  photoURL: string | null;
}

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export declare function signOut(auth: Auth): Promise<void>;

function useGetGoogleUser() {
  const { setUserInfo } = useGlobalContext();
  const router = useRouter();

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        const { displayName, email, photoURL, uid } = user;

        // Log in user to our database
        API.post('/user', { displayName, email, googleUid: uid, photoURL })
          .then(({ data }) => {
            const { displayName, email, photoURL, userName, id } = data.data;

            const storageUser = {
              displayName,
              email,
              photoURL,
              userName,
              id
            };

            if (typeof window !== 'undefined') {
              document.cookie = `isUserLogged=true`;

              data &&
                localStorage.setItem(
                  'userLoggedInfo',
                  JSON.stringify(storageUser)
                );
              id && localStorage.setItem('userLoggedId', id);
            }

            setUserInfo(storageUser);
            router.push('/home');
          })
          .catch((error) => console.log(error));
      })
      .catch((error: FirebaseError) => {
        GoogleAuthProvider.credentialFromError(error);
      });
  };

  return { signInGoogle };
}

export default useGetGoogleUser;
