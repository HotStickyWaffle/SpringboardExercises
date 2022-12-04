// async function getData() {
//     const response = await axios.get('https://swapi.py4e.com/api/planets/');
//     const { next, results } = response.data
//     for (let planet of results) {
//         console.log(planet.name)
//     }
//     const response2 = await axios.get(next);
//     const results2 = response2.data.results;
//     for (planet of results2) {
//         console.log(planet.name)
//     }
// }

// getData();
// console.log('I happen after getData');

async function getLaunches() {
    const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
    renderLaunches(res.data)
}

function renderLaunches(launches) {
    const launchesUL = document.querySelector('#launches')
    for (let launch of launches) {
        launchesUL.append(makeLaunchLI(launch))
    }
}

function makeLaunchLI(launch) {
    const missionName = document.createElement('li');
    missionName.innerText = launch.mission_name;
    const rocketUl = document.createElement('ul')
    const rocketName = document.createElement('li');

    rocketName.innerText = launch.rocket.rocket_name;
    rocketUl.append(rocketName);
    missionName.append(rocketUl);
    return missionName
}

const button = document.querySelector('#getLaunches')

button.addEventListener('click', getLaunches)