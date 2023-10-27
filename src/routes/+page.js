export async function load() {
    return {
        movieArray: await fetchData("http://localhost:4000/movie/all?pageNumber=1&pageSize=10"),
    }
}

async function fetchData(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()

        if (!res.ok) {
            return { error: res.statusText + ": " + data.msg }
        }

        return { data: data }
    } catch (error) {
        return { error: "Internal Server Error: " + error.message }
    }
}