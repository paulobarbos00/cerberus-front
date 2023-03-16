import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>
        Cerberus project é um Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quaerat accusantium nesciunt excepturi quos. Repudiandae rem
        distinctio perspiciatis fuga vero odio repellat consequatur deserunt
        rerum ad, sunt ea ut nemo maiores? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Soluta, optio. Fugit nobis nulla nemo
        cupiditate deserunt similique itaque ipsam natus ab vitae voluptatum
        officia maxime possimus quos, perspiciatis voluptate recusandae.
      </p>
      <br />
      <br />
      <Link href="/home" className="homeButton">
        Acessar a Home
      </Link>
    </div>
  );
}

export default Home;
