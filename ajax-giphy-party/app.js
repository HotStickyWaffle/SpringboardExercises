async function getGif(searchTerm) {

    const params = {
        q: searchTerm,
        api_key: 'LRHEtoKl6lsI8LBpqzu9uPgivxtNixon',
        limit: 50,
    }
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', { params });

    let randomNum = Math.round(Math.random() * params.limit + 1);

    return response.data.data[randomNum].url
    // console.log(response.data.data[randomNum].url)
}

const searchButton = document.querySelector('#searchButton')
const gifDiv = document.querySelector('#gifDiv')


searchButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    const searchTerm = document.querySelector('#searchTerm')
    console.log(searchTerm.value)
    const gifUrl = getGif(searchTerm.value)
    console.log(gifUrl)
    appendGif(gifUrl)

})

function appendGif(url) {
    const newGif = document.createElement('img');
    newGif.setAttribute('src', url);
    gifDiv.append(newGif)
}



























// class Gify {
//     constructor(searchTerm) {
//         this.searchTerm = searchTerm;
//         this.api_key = 'LRHEtoKl6lsI8LBpqzu9uPgivxtNixon';
//         this.limit = 1;

//         this.addGif();
//     }

//     async getGif() {
//         const params = {
//             q: this.searchTerm,
//             api_key: this.api_key,
//             limit: this.limit,
//         }

//         const response = await axios.get('http://api.giphy.com/v1/gifs/search', { params });
//         return response.data.data[0].url
//     }

//     addGif() {
//         let self = this;

//         let gifUrl = self.getGif()
//         console.log(gifUrl)
//     }
// }

// let newGifyRequest = new Gify('burgers');
// newGifyRequest.getGif();