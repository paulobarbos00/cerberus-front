'use client';

import React from 'react';

import LoginButton from '@/components/subcomponents/LoginButton/LoginButton';
import { useGlobalContext } from '@/contexts/GlobalContext';
import LoginLoader from '@/components/subcomponents/LoginLoader/LoginLoader';

function Home() {
  const { isUserLogging } = useGlobalContext();
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta aperiam
        quidem nihil aut est fugiat, tempore odio ipsam voluptatem, quod
        pariatur eum consequatur consectetur natus laboriosam veritatis maxime
        laudantium earum! Rem aliquid ducimus sapiente quisquam itaque explicabo
        harum molestias sequi, iste fugiat, accusamus cum dolor numquam
        distinctio eaque vero, dolorum nobis recusandae ipsa? Libero ut, earum
        numquam saepe id dolor?
      </p>

      <LoginButton />

      {isUserLogging && <LoginLoader />}
    </div>
  );
}

export default Home;
