const baseURL = (category) =>
    `https://api.themoviedb.org/3/${category}/550?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export const getMovies = (category) =>
    fetch(baseURL(category), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
