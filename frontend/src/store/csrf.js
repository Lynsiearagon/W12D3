import csrfFetch from "../csrf";




export async function restoreCSRF() {
    const res = await csrfFetch('/api/session')
    storeCSRFToken(res);
    return res
}
    