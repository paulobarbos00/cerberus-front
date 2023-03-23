import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const isUserLogged = req.cookies.get('isUserLogged');
  const url = req.url;
  const baseUrl = 'http://localhost:3000';

  if (!isUserLogged && url.includes('/home')) {
    return NextResponse.redirect(`${baseUrl}/`);
  }

  if (isUserLogged && url === `${baseUrl}/`) {
    return NextResponse.redirect(`${baseUrl}/home`);
  }
}
