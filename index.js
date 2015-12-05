'use strict';

 var express = require('express'),
 	exphbs = require('express-handlebars'),
 	mysql = require('mysql'),
 	myConnection = require('express-myconnection'),
 	bodyParser = require('body-parser'),
    compression = require('compression'),	
 	issues = require('./routes/issues');
    
    
 	//http = require('http');
 	// session = require('express-session'),	 

var app = express();
//var httpServer = http.Server(app);

var dbOptions = {
      host: 'localhost',
      user: 'geo',
      password: 'password',
      port: 3306,
      database: 'geo_get'
};

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
 app.use(bodyParser.json())

 function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
app.get('/', issues.show);
// app.use(session({secret: "Haha haha", saveUninitialized : false, resave: true, cookie : {maxAge : 5*60000}}));
// app.set("xTers-powered-by", false);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public'));
app.get('/issues', issues.show); 
app.get('/',issues.show)
app.post('/issues/add',issues.add);
app.get('/issues/edit/:Id', issues.get);
app.post('/issues/update/:Id', issues.update);
app.get('/issues/search/:query', issues.issueSearch);
app.get('/issues/delete/:Id', issues.delete);

app.get('/issues/getIssues', issues.getIssues);
// app.get('/issues/delete/:Id', issues.delete);


// app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())

app.get('/', function(req, res){
	res.render('home')
}); 

app.post('/api/issues', function(req, res, next){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {

      		description : input.description,
      		date :input.date,
      		//start_location_latitude : input.latitude,
      		//start_location_longitude :input.longitude,
      		//start_location_time:input.time
      		
      		//end_location_latitude:input.latitude,
      		//end_location_longitude: input.longitudes,
      		//end_location_time: input.time,
            //start_location_longitude : input.latitude, 
            //end_location_id : input.latitude,
            //taxiAssociation_name : input.taxiAssociation_name,
            //Rank_name: input.Rank_name

  	    };      
		connection.query('insert into Issues set ?', data, function(err, results){
  		    if (err) return next(err);
  		    console.log("Error inserting : %s ",err );
	        res.send({
				issue_id : results.insertId
			});
    		
      });
   });
});


app.post('/issues/add', function(req,res,next){
	var issue_id = req.params.id;
	var input = req.body;
	//update using issue_id
    
    var data = {
      		end_location_latitude : input.latitude,
      		end_location_longitude : input.longitude,
      		end_location_time:input.time
  	    };

	req.getConnection(function(err, connection){
		connection.query('UPDATE Issues SET ? WHERE id = ?',[data, issue_id], function(err, rows){
			if (err) return next(err);

			console.log(rows);

            res.send({

            });
		});
   	});

});

/*'/productCategories'is being used as our HTTP host name when you type eg this url name - url("http://localhost:2000/productCategories").end
 dont type "end" use text inside "quotes" then our function route  - "function res.render('productsCategories')" will work as an exception.
 for that matter "findProductCategories" function's results/output inside routes is being parsed as"findCatNames" will be rendered */

var port = process.env.port || 4001;

app.listen(port, function(){
	console.log('listening on *:' + port);
});