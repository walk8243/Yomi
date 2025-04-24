import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const csaUrl = url.pathname.replace('/kif', 'http://wdoor.c.u-tokyo.ac.jp/shogi/LATEST/');
	const response = await fetch(csaUrl);
	if (!response.ok) {
		return Response.error();
	}
	return new Response(await response.text());
}
