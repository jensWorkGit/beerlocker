var http = require("http");

var options = {
    "method": "GET",
    "hostname": "localhost",
    "port": "3000",
    "path": "/api/users",
    "headers": {
        "authorization": "Basic amVuczp0ZXN0",
        "cache-control": "no-cache"
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(JSON.parse(body));
    });
});

req.end();