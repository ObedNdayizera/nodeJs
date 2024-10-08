import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Jim Doe" }
];


// Logger Middleware
const Logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}


//JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}


//Route Handle For Get /api/users
const getUsersHandle = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
}

// Route Handle For Get By Id /api/users/:id
const getUserByIdHandle = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader('Content-Type', 'application/json');
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "User not found" }));
    }
    res.end();
}


//Route Handle For Post /api/users
const createUserHandle = (req, res) => {
    let body = '';
    // Listen For Data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        let newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}


// Not Found Handle
const notFoundHandle = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
}


const server = createServer((req, res) => {
    Logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === "GET") {
                getUsersHandle(req, res);
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
                getUserByIdHandle(req, res);
            } else if (req.url === '/api/users' && req.method === "POST") {
                createUserHandle(req, res);
            } else {
                notFoundHandle(req, res);
            }
        })
    })
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
