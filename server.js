// Dependencies
var http = require("http");
var fs = require("fs");

// PORT
var PORT = 5000;

// Create server
var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    fs.readFile(__dirname + "/index.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}

server.listen(PORT, function () {
    console.log("Listening on " + PORT);
})