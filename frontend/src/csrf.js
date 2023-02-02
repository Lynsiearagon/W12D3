async function csrfFetch(url, options = {}) {

    if (typeof options.headers === 'undefined') {
        options.headers = {}
    } else if (typeof options.method === 'undefined') {
        options.method = 'GET'
    };

    if (options.method.toUpperCase() !== 'GET') {
        let headers = options.headers 
        headers['Content-Type'] = headers['Content-Type'] || 'application/json'; 
        headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }; 

    const res = await fetch(url, options); 

    if (res.status >= 400) throw res; 

    return res;

}   

export default csrfFetch