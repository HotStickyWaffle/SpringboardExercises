// async function getUsers() {
//     const res = await axios.get('https://reqres.in/api/users');
//     console.log(res)
// }

// async function createUsers() {
//     const res = await axios.post('https://reqres.in/api/users', { username: 'Butters', email: 'butters@gmail', age: 1 });
//     console.log(res);
// }

// createUsers();



async function getUsers() {
    const res = await axios.get('https://hack-or-snooze.herokuapp.com/users');
    console.log(res)
}

async function signUp(username, password, name) {
    const res = await axios.post('https://hack-or-snooze.herokuapp.com/auth', { user: { name, username, password } })
    console.log(res);
}

signUp('ButtersTheChicken', 'peeword', 'Butters');

