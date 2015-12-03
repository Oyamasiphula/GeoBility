exports.show =function (req, res, next){
    req.getConnection(function(err, connection){
        if (err) return next(err);
		//connection.query('SELECT Qty AS AmtSold ,Sales_date, Sales_price,  product_name from Sales s INNER JOIN Products p ON s.Product_Id = p.Id ORDER BY Sales_date DESC',[], function(err, results){
        //connection.query('SELECT Sales.Id,Products.product_name,Sales.Qty,DATE_FORMAT(Sales.Sales_date, "%d/%m/%Y") as Sales_date,Sales.qty,Sales.Sales_price FROM Sales INNER JOIN Products ON Sales.Product_Id = Products.Id ORDER BY Sales.Sales_date DESC',[],function(err, results){
            connection.query('SELECT * from Issues',[], function(err, issues){
            	if (err) return next(err);
            	res.render('issues',{
            	no_issues : results.length === 0,
            	//sales : results,
            	issues : issues
            	});
            });
        });
	});
//};