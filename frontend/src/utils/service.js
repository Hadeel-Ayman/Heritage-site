
export const postRequset = async (url, body) => {
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body
    })
    const data = await resp.json()

    if (!resp.ok) {
        let message;
        if (data?.message) {
            message = data.message;
        } else {
            message = data
        }
        return { error: true, message }
    }
    return data;
}

export const getRequset = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()

    if (!resp.ok) {
        let message = 'An error occured';
        if (data?.message) {
            message = data.message;
        }
        return { error: true, message }
    }
    return data;


}