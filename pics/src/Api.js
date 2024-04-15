import axios from 'axios'

const searchImages = async (term) => {
    console.log("api got : " + term)
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID XzVQszY2xC13sY-Uwl6kJRvTIhcuqCz3J331OpREVm0',
        },
        params: {
            query: term,
        },
    });

    console.log(response.data.results)
    return response.data.results;
};


export default searchImages;