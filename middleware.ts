import { NextResponse } from 'next/server';
import { verifyToken } from './lib/utils';

export async function middleware(
	req: {
		cookies: { get: (arg0: string) => any };
		nextUrl: { clone?: any; pathname?: any };
	},
	ev: any
) {
	const token = req ? req.cookies.get('token') : null;
	const userId = await verifyToken(token);
	const { pathname } = req.nextUrl;

	if (
		pathname.startsWith('/_next') ||
		pathname.includes('/api/login') ||
		userId ||
		pathname.includes('/static')
	) {
		return NextResponse.next();
	}

	if ((!token || !userId) && pathname !== '/login') {
		const url = req.nextUrl.clone();
		url.pathname = '/login';
		return NextResponse.rewrite(url);
	}
}
