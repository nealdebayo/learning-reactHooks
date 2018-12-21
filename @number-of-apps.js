const express = require('express')
const app = express()
const PORT = 4000
const fs = require('fs');
 
 //process.argv is the script written in the CLI or console
 //proceedural until it meets something asynchronous and will wait for the other functions or other actions continue without blocking
if (process.argv.length <= 2) {
    process.exit(-1);
}
const path = process.argv[2];

const readApps = async () => {
	let allApps
	await new Promise (resolve => {
		fs.readdir(path, function(err, items) {
			if (err) {
				console.log(err)
			}
			allApps = items.filter(item => item !== 'index.js')
			resolve()
		});
	})


	app.use(function(req, res, next) {
   		res.header("Access-Control-Allow-Origin", "*");
   		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  		next();
	 });

	app.get('/', (req, res) => {
		res.status(200).send({
			apps : allApps
		})
	})

	app.listen(PORT, () => console.log('get number of apps at ', PORT))
} 


readApps()