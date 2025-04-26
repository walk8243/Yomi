import { NextRequest } from "next/server";
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const filename = url.searchParams.get('filename');
	if (!filename) return Response.error();
	const filepath = resolve(__dirname, '_csa', `${filename}.csa`);

	try {
		return new Response(await readFile(filepath));
	} catch (error) {
		console.error(error);
		return Response.error();
	}
}
