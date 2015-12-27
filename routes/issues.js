exports.issueSearch = function(req, res, next){
    req.getConnection(function(error, connection){
                if(error) return next(error);
        
        var searchVar = req.params.query;
        searchVar = "%" + searchVar + "%";
        console.log(searchVar);

        connection.query('SELECT * FROM Ranks WHERE rank_name LIKE ?',searchVar, function(error, results) {
            if (error) return next(error);
                res.render( 'search', {
                    issues : results,
                    layout : false
                });
        });
    }); 
};

exports.show =function (req, res, next){
    req.getConnection(function(err, connection){
        if (err) 
                return next(err);
        connection.query('SELECT Issues.Id, Issues.description, speed, reg_number ,DATE_FORMAT(Issues.date, "%d/%m/%Y") as Date FROM Issues ORDER BY Issues.date DESC',[],function(err, issuesresults){

                if (err) return next(err);
            connection.query('SELECT * from Ranks',[], function(err, results){
                console.log(results)
            	if (err) return next(err);
                // console.log(issues.length);
                res.render('home',{
                    issues:issuesresults,
                    ranks:results
                    });
            });
        });
    });
}

exports.getIssues =function (req, res, next){
    req.getConnection(function(err, connection){
        if (err) 
                return next(err);
    
        connection.query('SELECT Issues.id,Issues.description,Issues.speed, Issues.reg_number, Taxi_associations.taxiAssociation_name, Ranks.Rank_name,DATE_FORMAT(Issues.date, "%d/%m/%Y") as Date, Issues.rank_id FROM Issues INNER JOIN Taxi_associations ON Issues.association_id = Taxi_associations.association_id INNER JOIN Ranks ON Issues.rank_id = Ranks.rank_id ORDER BY Issues.date ASC',[],function(err, issuesresults){
        if (err) 
                return next(err);

            res.render('issuesHist',{
                issues : issuesresults
            	});
            });
        });
    
}

exports.add = function (req, res, next) {
    req.getConnection(function(err, connection){

        if (err) return next(err);
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            description : input.description,
            date :input.date,
            rank_id:input.rank_id,
            reg_number:input.reg_number,
            speed : input.speed,
            association_id : input.association_id
        };      
             
        connection.query('insert into Issues set ?', data, function(err, results){
            if (err) {
                console.log("Error inserting : %s ", err.stack );
                return next(err);
            }

            res.redirect('/issues');
        });
    });
}

exports.update = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function(err, connection){
            connection.query('UPDATE Issues SET ? WHERE id = ?',[data, id], function(err, rows){
                if (err) return next(err);
                res.redirect('/issues');
            });

    });
}

exports.get = function(req, res, next){
    var Id = req.params.Id;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM Issues WHERE Id = ?', [Id], function(err,rows){
            //connection.query('SELECT * FROM Taxi_associations', [], function(err, results) {   
                if(err) return next(err);
                //console.log(results);
                res.render('edit',{page_title:"Edit Issues - Node.js", 
                data : rows[0],
                //associations : results
                //});
            });
        });
    });
}

exports.delete = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('DELETE FROM Issues WHERE id = ?', [id], function(err,rows){
            if(err) return next(err);
            res.redirect('/issues');
        });
    });
}