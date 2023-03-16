import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const SITE_URL = 'https://cerberus-front.vercel.app';

  const verifyUserLogged = req.cookies.get('isUserLogged');
  const url = req.url;

  if (!verifyUserLogged && url.includes('/private')) {
    return NextResponse.redirect(`${SITE_URL}/`);
  }

  if (verifyUserLogged && url === `${SITE_URL}/`) {
    return NextResponse.redirect(`${SITE_URL}/home`);
  }
}