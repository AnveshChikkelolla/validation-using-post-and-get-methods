let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let fs = require('fs');
var expressValidator = require('express-validator');
app.use(bodyParser());
app.use(expressValidator());
app.get('/',function(req,res)
{
    res.sendFile('index.html',{root: './'});
});
app.post('/usingpost', function(req, res) {
       req.check('uname', 'Invalid email address').isLength({min: 4});
       var errors = req.validationErrors();
       if (errors) {
          res.send("Name should be empty or atleast 4 letters ");
	     }
       else {
   
               res.send("Successfully name vlidation completed using post method");
            }
	
});
app.get('/usingget', function(req, res) {
       req.check('uname', 'Invalid email address').isLength({min: 4});
       var errors = req.validationErrors();
       if (errors) {
          res.send("Name should be empty or atleast 4 letters ");
	     }
       else {
   
               res.send("Successfully name vlidation completed using get method");
            }
	
});
app.listen(8081, function () {
  console.log("Listening port 8081");
  });