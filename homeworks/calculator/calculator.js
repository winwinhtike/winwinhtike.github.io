const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/calculator.html");
});

app.post('/', function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var operation = req.body.operation;
    var result = 0;

    switch(operation){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="calculator.css" type="text/css">
        <title>Calculator</title>       
    </head>
    <body>
        <h1>Simple Calculator</h1>
        <p>The Answer is : <strong>${result}</strong><p>
        <a href='/'>Another calculation</a>
    </body>
    </html>`);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});