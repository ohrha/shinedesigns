var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var path = require('path')

var router =  express.Router();

var appRoute = require('./app/routes.js')(router);
var Grid = require('gridfs-stream')
var fs = require('fs')
var image = path.join(__dirname,'./public/images/moon.png')
var mongoose = require('mongoose');



//var config = require('./config');



var database = require('./config/database');

Grid.mongo = mongoose.mongo;
var port = process.env.PORT || 8081;



mongoose.connect(database.url, function(err){

    if(err){

        console.log("Not connected to the database: " +err)

    }else{
      /*  var gfs = Grid(mongoose.connection.db)
        var writestream = gfs.createWriteStream({
            filename: 'profileImage.png'
        })
        fs.createReadStream(image).pipe(writestream)
        writestream.on('close',function(file){
            console.log(file.filename+" written to db.")
        })*/
        const gridfs = require('mongoose-gridfs')({
              collection: 'attachments',
              model: 'Attachment'
            });
            const Attachment = gridfs.model
        console.log("Successfully connected to Mlab/MongoDb @ "+ database.url)

    }

})

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded

app.use(bodyParser.json());   

app.use('/api',appRoute)

app.get('*', function (req, res) {



    res.sendFile(path.join(__dirname + '/public/index.html')); // this might need to be lower than the routes..

});

require('./app/routes.js')(app);

app.listen(port);

console.log("App listening on port : " + port);