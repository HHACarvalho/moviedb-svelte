export async function load({ fetch }) {

    try {
        const res = await fetch("http://localhost:4000/movie/all?pageNumber=1&pageSize=50")
        const resData = await res.json()

        if (!res.ok) {

            return {
                movieArray: {
                    message: res.statusText + ": " + resData.msg
                }
            }
        }

        return {
            movieArray: {
                data: resData
            }
        }
    } catch (error) {

        return {
            movieArray: {
                message: error
            }
        }
    }
}