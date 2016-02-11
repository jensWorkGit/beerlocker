var http = require("http");

var options = {
    "method": "GET",
    "hostname": "localhost",
    "port": "3000",
    "path": "/api/beers",
    "headers": {
        "authorization": "Bearer OTWI8v8nNC3EyeoU7JuvS7B4JMUnmKA8VRsdKQW2j28ndf7vg17aGNUDvfbX7KNwYDA1sj7N8QCUS2E4tXXo8l4kLvRaM6m5ZK85rZogpPAA2TspeR7OmUrlnCVpliHzNkgoI37Ocz0DWOopwejm9fnXFwRokrqaepPFl5FnH13NVS0csm7a3nAY8JNxDq6TiXAXc0e7gqswmbBrMK9zx6pfgTetlzhuiCEGNF4z3AU0qyh0o7YchJx3pKEKvMZT",
        "cache-control": "no-cache",
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();