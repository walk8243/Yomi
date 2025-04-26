import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const csaUrl = url.searchParams.get('url');
	if (!csaUrl) return Response.error();
	const response = await fetch(csaUrl);
	if (!response.ok) {
		return Response.error();
	}
	return new Response(await response.text());
}
