import axios from 'axios';

export async function get(url) {
    try {
        const res = await axios.get(url, {
            validateStatus: function (status) {
                return status < 500;
            }
        })

        if (res.status !== 200) {
            return { error: res.statusText + ": " + res.data.error }
        }

        return { data: res.data }
    } catch (error) {
        return { error: "Internal Server Error: Network Error" }
    }
}