"use strict";

const $showsList = $('#shows-list');
const $episodesArea = $('#episodes-area');
const $searchForm = $('#search-form');
const $searchQuery = $('#search-query')


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


/** Given list of shows, create markup for each and to DOM */

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
             <button class='btn btn-outline-light btn-sm Show-getEpisodes'>
               Episodes
             </button>
           </div>
         </div>
         <button id='episodeButton'>Show Episodes</button>  
       </div>
      `);

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

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

async function getEpisodes(id) {
  const response = await axios(`https://api.tvmaze.com/shows/${id}/episodes`);

  console.log(response.data)

  let episodeObj = [];

  for (let i = 0; i < response.data.length; i++) {

    let { name, season, number } = response.data[i]
    episodeObj.push({ name, season, number })
  }

  return episodeObj
}

$('#shows-list').on('click', function (evt) {
  if (evt.target = $('#episodeButton')) {
    console.log(evt.target.parent())
  }
})


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

// async function getEpisodesOfShow(id) { }

/** Write a clear docstring for this function... */

// function populateEpisodes(episodes) { }
