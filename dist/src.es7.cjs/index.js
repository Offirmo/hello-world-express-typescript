"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express = require("express");
console.log('Hello world from express server!');
const PORT = process.env.PORT || 5000;
const app = express();
// trust first proxy
app.set('trust proxy', 1);
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public', {
    index: false,
    fallthrough: true
}));
// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function (req, res) {
    res.send('hello world!');
});
const server = http_1.createServer(app);
server.listen(PORT, err => {
    if (err)
        return console.error('something bad happened', err);
    console.info(`server is listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map