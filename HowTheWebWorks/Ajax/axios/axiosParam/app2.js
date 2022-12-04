// async function getJoke() {
//     const joke = await axios.get('https://api.chucknorris.io/jokes/random'
//     );
//     // console.log(joke.data.value)
//     const categories = await axios.get('https://api.chucknorris.io/jokes/categories'
//     );
//     const cat  = categories.data[Math.round(Math.random() * 16 + 1)];

//     console.log()
// }
async function getCat() {
    const cats = await axios.get('https://api.chucknorris.io/jokes/categories');
    console.log(cats.data)
}

getCat()


async function getJoke(categories) {
    const joke = await axios.get('https://api.chucknorris.io/jokes/categories=', { params: { categories } }
    );


}

