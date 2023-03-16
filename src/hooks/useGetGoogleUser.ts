'use client';

// import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { app } from '@/services/firebaseConfig';
import API from '@/services/axiosConfig';
import { useGlobalContext } from '@/contexts/GlobalContext';

export interface ICreateGoogleUserProps {
  displayName: string | null;
  email: string | null;
  googleUid: string | null;
  photoURL: string | null;
}

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

function useGetGoogleUser() {
  const { setUserInfo } = useGlobalContext();

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

            document.cookie = `isUserLogged=true`;
            data &&
              localStorage.setItem(
                'userLoggedInfo',
                JSON.stringify(storageUser)
              );
            id && localStorage.setItem('userLoggedId', id);

            setUserInfo(storageUser);
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
