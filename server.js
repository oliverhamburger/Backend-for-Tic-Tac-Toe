const User = require('./user.js');
const express = require('express');
const url = require('url');

const app = express();

const portNumber = 8000;

let user1 = new User("user1", "test");
let user2 = new User("user2", "moretest");

let users = [user1, user2]

app.listen(portNumber, () => {
    console.log('Server started on port ' + portNumber);
});

//takes two parameters, one for username and one for password
//example: http://localhost:8000/login/?username=user1&password=test
app.route('/login').get((req, res) => {
    let query = url.parse(req.url,true).query;
    let successfull = false;
    users.forEach(user => {if(user.login(query.username, query.password)){successfull = true;}});
    res.header("Access-Control-Allow-Origin", "*");
    res.send(successfull.toString());
    console.log(users);
});

//takes one parameter, one for username
//example: http://localhost:8000/login/?username=user1
app.route('/logout').get((req, res) => {
    let query = url.parse(req.url,true).query;
    let successfull = false;
    users.forEach(user => {if(user.userName == query.username){user.logout(); successfull = true;}});
    res.header("Access-Control-Allow-Origin", "*");
    res.send(successfull.toString());
    console.log(users);
});

//takes one parameter, one for username
//example: http://localhost:8000/addXwins/?username=user1
app.route('/addXwins').get((req, res) => {
    let query = url.parse(req.url,true).query;
    let successfull = false;
    users.forEach(user => {if(user.userName == query.username){user.addXwin(); successfull = true;}});
    res.header("Access-Control-Allow-Origin", "*");
    res.send(successfull.toString());
    console.log(users);
});

//takes one parameter, one for username
//example: http://localhost:8000/addXwins/?username=user1
app.route('/addOwins').get((req, res) => {
    let query = url.parse(req.url,true).query;
    let successfull = false;
    users.forEach(user => {if(user.userName == query.username){user.addOwins(); successfull = true;}});
    res.header("Access-Control-Allow-Origin", "*");
    res.send(successfull.toString());
    console.log(users);
});

//takes one parameter, one for username
//example: http://localhost:8000/getXwins/?username=user1
app.route('/getXwins').get((req, res) => {
    let query = url.parse(req.url,true).query;
    let xWin = -1;
    users.forEach(user => {if(user.userName == query.username){xWin = user.getXwins();}});
    res.header("Access-Control-Allow-Origin", "*");
    console.log(users);
    res.send({ value: xWin });
});

//takes one parameter, one for username
//example: http://localhost:8000/getXwins/?username=user1
app.route('/getOwins').get((req, res) => {
    let query = url.parse(req.url,true).query;
    let oWin = -1;
    users.forEach(user => {if(user.userName == query.username){oWin = user.getOwins();}});
    res.header("Access-Control-Allow-Origin", "*");
    console.log(users);
    res.send({ value: oWin });
});