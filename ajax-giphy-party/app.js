console.log("Let's get this party started!");



async function getGif(searchTerm) {

    const params = {
        q: searchTerm,
        api_key: 'LRHEtoKl6lsI8LBpqzu9uPgivxtNixon',
        limit: 1,
    }
    const response = await axios.get('api.giphy.com/v1/gifs/search', params);
    console.log(response)
}

// async function getGif() {
//     const response = await axios.get('http://api.giphy.com/v1/gifs/search?q=cheeseburgers&api_key=LRHEtoKl6lsI8LBpqzu9uPgivxtNixon&limit=5');
//     console.log(response)
// }