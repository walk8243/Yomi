import { NextRequest } from "next/server";
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const filename = url.searchParams.get('filename');
	if (!filename) return Response.error();
	const filepath = resolve(__dirname, '_csa', filename);

	try {
		return new Response(await readFile(filepath));
	} catch (error) {
		console.error(error);
		return Response.error();
	}
}
