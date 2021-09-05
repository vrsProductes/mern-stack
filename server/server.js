const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('GKF',['user','myprofile','sales']);
var cors = require('cors');
const api = require('./router/index');
const app = express();



app.listen('9090')

console.log("server start port number 9090")