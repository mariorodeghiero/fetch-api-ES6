document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);

// método text(), recupera a informação retornada pela requisição, no formato texto.

function getText() {
    fetch('/src/sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err));
}

//método json(), retorna uma promise.

function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Users</h2>';
            data.forEach(function (user) {
                output +=
                    `
                             <ul class="list-group mb-3">
                                <li class="list-group-item">ID: ${user.id}</li>
                                <li class="list-group-item">Name: ${user.name}</li>
                                <li class="list-group-item">Email: ${user.email}</li>
                            </ul>
                    `;
            });
            document.getElementById('output').innerHTML = output;
        })
}


function getPosts() {
    fetch('https://mariorodeghiero.herokuapp.com/')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Posts</h2>';
            data.forEach(function (post) {
                output +=
                    `
                            <div class="card card-body mb-3">
                                <h3>Name: ${post.name}</h3>
                                <p>Age: ${post.age}</p>
                                <p>CPF: ${post.cpf}</p>
                            </div>
                            `;
            });
            document.getElementById('output').innerHTML = output;
        })
}