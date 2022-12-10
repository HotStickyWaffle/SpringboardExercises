"use strict";

const $showsList = $('#shows-list');
const $episodesArea = $('#episodes-area');
const $searchForm = $('#search-form');
const $searchQuery = $('#search-query')
const $episodesList = $('#episodes-list')


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  const params = { q: term };
  const response = await axios.get('https://api.tvmaze.com/search/shows', { params });
  let showObj = []

  // Loop over array of objects of shows returned by API, pulling the required values from each object and pushing them as a new object into an array, which is returned 

  for (let i = 0; i < response.data.length; i++) {

    let { id, name, summary, image } = response.data[i].show
    showObj.push({ id, name, summary, image })
  }

  return showObj
}

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id='${show.id}' class='Show col-md-12 col-lg-6 mb-4'>
         <div class="media">
           <img 
              src='${show.image.medium}' 
              alt='${show.name}' 
              class='w-25 mr-3'>
           <div class='media-body'>
             <h5 class='text-primary'>${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button data-show-id='${show.id}' data-show-name='${show.name}' class='episodeButton btn btn-outline-dark btn-sm Show-getEpisodes'>Show Episodes</button> 
           </div>
         </div>
          
       </div>
      `);

    $showsList.append($show);
  }
}




async function searchForShowAndDisplay() {
  const term = $($searchQuery).val();

  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}


$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


async function getEpisodesOfShow(id) {
  const response = await axios(`https://api.tvmaze.com/shows/${id}/episodes`);

  let episodeObj = [];

  for (let i = 0; i < response.data.length; i++) {

    let { name, season, number } = response.data[i]
    episodeObj.push({ name, season, number })
  }

  console.log(episodeObj)
  return episodeObj
}


function populateEpisodes(name, episodes) {
  const $h3 = $(`<h3><u>${name}</u></h3>`)
  $episodesList.append($h3);

  for (let episode of episodes) {
    const $li = $(`<li>${episode.name} - Season ${episode.season}, Episode ${episode.number}</li>`)
    $episodesList.append($li)
  }
}


$('#shows-list').on('click', '.episodeButton', async function () {
  if ($episodesArea.css('display', 'none')) {
    $episodesArea.css('display', '')
  }

  const episodeButton = $(this);

  const episodeObj = await getEpisodesOfShow(episodeButton.data('showId'));

  populateEpisodes(episodeButton.data('showName'), episodeObj)

})

/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

// async function getEpisodesOfShow(id) { }

/** Write a clear docstring for this function... */

// 
