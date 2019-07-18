var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

var hdb = require('@sap/hana-client');

var conn_params = {
    serverNode  : 'myserver:30015',
    uid         : 'system',
    pwd         : 'manager'
};

app.get('/', function (req, res) {
    try {
    	conn.connect(conn_params, function(err) {
            if (err)
                throw err;
            
            conn.exec('SELECT Name, Description FROM Products WHERE id = ?', [1], function (err, result) {
                if (err)
                    throw err;

                res.send(JSON.stringify(result));

                conn.disconnect();
            });
        });
    }
    catch(err) {
        res.status(500).send(String(err));
    }
})

app.listen(port, function () {
  console.log(`Listening on port ${port}...`)
})
