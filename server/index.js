var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

var hana = require('@sap/hana-client');

var conn_params = {
    serverNode  : 'hxehost:39013',
    uid         : 'system',
    pwd         : '****' // sistem şifresi
};

var conn = hana.createConnection();

app.get('/', function (req, res) {
    try {
    	conn.connect(conn_params, function(err) {
            if (err) {
            	console.error(err);
            	throw err;
            }
            
            conn.exec('SELECT * FROM test_table', [], function (err, result) {
                if (err) {
                	console.error(err);
                    throw err;
                }

                res.send(JSON.stringify(result));

                conn.disconnect();
            });
        });
    }
    catch(err) {
        res.status(500).send(String(err));
    }
})

app.get('/add', function (req, res) {
	var id = +new Date()%10000;
	var name = String(new Date());
	
	try {
    	conn.connect(conn_params, function(err) {
            if (err) {
            	console.error(err);
            	throw err;
            }
            
            conn.exec('INSERT INTO test_table VALUES (?,?)', [id, name], function (err, result) {
                if (err) {
                	console.error(err);
                    throw err;
                }

                res.send();
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
