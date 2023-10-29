import { get } from '$lib/db';

export async function load() {
    return {
        movieArray: await get("http://localhost:4000/movie/all?pageNumber=1&pageSize=10")
    }
}