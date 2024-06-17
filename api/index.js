const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/user', (req, res) => {
    const users = [
        {
            id: "1",
            name: "User1",
            email: 'user1@gmail.com',
        },
        {
            id: "2",
            name: "User2",
            email: "user2@gmail.com",
        },
        {
            id: "3",
            name: "User3",
            email: "user3@gmail.com"
        },
    ];
    res.json(users).status(200);
});

app.post('/users', (req, res) => {
    const data = req.body;
    console.log(data); 
    res.json("success").status(200)

});

app.delete("/users/:id")

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;

