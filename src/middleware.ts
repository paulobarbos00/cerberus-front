import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  // const isUserLogged = req.cookies.get('isUserLogged');
  // const url = req.url;
  // const baseUrl = 'http://localhost:3000';
  // if (!isUserLogged && url.includes('/teste')) {
  //   return NextResponse.redirect(`${baseUrl}/home`);
  // }
  // if (isUserLogged && url === `${baseUrl}/`) {
  //   return NextResponse.redirect(`${baseUrl}/home`);
  // }
}
