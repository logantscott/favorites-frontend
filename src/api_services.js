import Request from 'superagent';

export const getGames = async(apiQuery) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = 'http://localhost:5000/api/games';
    const token = user ? user.token : '';
    console.log(`${url}?search=${apiQuery}`)
    let data = await Request.get(`${url}?search=${apiQuery}`)
        .set('Authorization', token);
    return data;
}

export const getFavorites = async() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = 'http://localhost:5000/api/favorites';
    const token = user ? user.token : '';
    let data = await Request.get(url)
        .set('Authorization', token);
    return data;
}

export const addFavorite = async(apiQuery) => {
    const user = JSON.parse(localStorage.getItem('user'));
    // const url = 'https://fierce-mesa-39439.herokuapp.com/api/favorites';
    const url = 'http://localhost:5000/api/favorites';
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    const token = user ? user.token : '';
    let data = await Request.post(url, apiQuery)
        .set('Authorization', token);
    return data;
}

export const deleteFavorite = async(apiQuery) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = 'http://localhost:5000/api/favorites';
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    const token = user ? user.token : '';
    let data = await Request.delete(url, apiQuery)
        .set('Authorization', token);
    return data;
}