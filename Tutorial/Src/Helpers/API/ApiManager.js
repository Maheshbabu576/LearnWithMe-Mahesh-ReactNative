
export const BuildRequest = async (url, method, body = null, header = {}) => {
    const endpoint = url
    const reqbody = body ? JSON.stringify(body) : null
    const fetchParms = { method, header }
    if ((method == 'POST' || method == 'PUT') && !reqbody) {
        throw new Error("Body is required for POST & PUT requests")
    }
    if (reqbody) {
        fetchParms.body = reqbody
        fetchParms.header['Content-Type'] = 'application/json'

    }

    try {

        const fecthPromise = fetch(endpoint, fetchParms)
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Request Timedout")
            }, 3000);
        });

        const response = await Promise.race([fecthPromise, timeoutPromise])

        return response
    } catch (error) {
        return error
    }


}

export const DoFetchRequest = async (url, method, body = null) => {

    try {

        const headers = {}
        const result = {
            success: false,
            response: null
        }
        headers['Content-Type'] = 'application/json'

        const response = await BuildRequest(url, method, body, headers)

        if (response.status && (response.status == '200' || response.status == '201')) {
            result.success = true
            let json = await response.json();
            result.response = json

            return result
        }

        const errortext = response.message

        return errortext


    } catch (error) {

        return error.message
    }



}