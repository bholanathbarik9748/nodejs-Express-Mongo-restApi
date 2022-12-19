// Create A server using express Js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/', (req, res) => { //get is a method which we user CRUD operation (create Read Update Delete)
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post('/api/v1/login', (req, res) => {
    res.send(`present User Name: ${req.body.Name} && Email: ${req.body.Email} && Password: ${req.body.Password}`);
    console.log(req.body);
});

app.get('/api/v1/login', (req, res) => {
    res.json({
        name: "abi",
        email: "a@gmail.com"
    })
});

app.post('/api/v1/register', (req, res) => {
    const username = req.body.Name;
    const useremail = req.body.Email;
    const userpass = req.body.Password;

    res.json({
        success: true,
        name: username,
        email: useremail,
        Password: userpass,
    })
});




app.get('/page1', (req, res) => {
    res.send("page1");
});

app.get('/page2', (req, res) => {
    res.send("page2");
});

app.listen(port, () => {
    console.log(`server online in PORT ${port}`);
})