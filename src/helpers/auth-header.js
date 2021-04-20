export function authHeader() {
    /*
        Cette methode sera utiliser dans les headers des requêtes API
     */
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return { 'Authorization': 'Bearer ' + user };
    } else {
        return {};
    }
}

