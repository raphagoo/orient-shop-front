export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(sessionStorage.getItem('token'));
    if (user) {
        return { 'Authorization': 'Bearer ' + user, 'Accept' : 'application/json' };
    } else {
        return {};
    }
}
