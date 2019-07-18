var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	console.log(req.db);
    res.send('Hello World!')
})

app.listen(port, function () {
  console.log(`Listening on port ${port}...`)
})
