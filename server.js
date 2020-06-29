//Express.js, or simply Express, is a web application framework for Node.js,
// released as free and open-source software under the MIT License.
// It is designed for building web applications and APIs.

var a1=require('./docs/data1.json');

var express=require('express');

// to init express we will declared a variable, now app variable have lot of property and methods
var app=express();

app.use(express.static("docs"));

//Middleware functions are functions that have access to the request object (req), the response object (res)
//The middleware function.
//HTTP response argument to the middleware function
//HTTP request argument to the middleware function
app.get("/extraRunConcededByEachTeam",function(req,res){
    var season=req.query.year;
    var result=a1.extraRunConcededByEachTeam[season];
    res.json(result);
})
//listen--we need to use to actually run the webserver we want to listen on a port
app.listen(process.env.PORT || 3000,()=> console.log('Gator app listening on port'));
