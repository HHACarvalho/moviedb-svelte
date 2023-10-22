export async function load({ fetch }) {

    const res = await fetch("http://localhost:4000/movie/all?pageNumber=1&pageSize=50")
    const data = await res.json()

    return {
        movieArray: data,
    }
}