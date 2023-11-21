import { get } from '$lib/db';

export async function load({ params }) {
    return await get("http://localhost:4000/movie?movieId=" + params.titleId)
} 