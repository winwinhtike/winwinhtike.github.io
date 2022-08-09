const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3030;

var questions = ["1, 1, 2, 3, 5", "1, 4, 9, 16, 25", "2, 3, 5, 7, 11", "1, 2, 4, 8, 16"];
var answers = [9, 8, 36, 13, 32];

app.set("view engine", "pug")

app.get('/', function(req, res) {
    res.locals = { question: "3, 1, 4, 1, 5", count: 0, score: 0 };
    res.render('numberquizindex');
});

app.post('/', urlencodedParser, function(req, res) {
    var count = parseInt(req.body.count);
    var score = parseInt(req.body.score);
    

    if (answers[count] == req.body.answer)
        score += 1;

    if (count < 4) {
        var newCount = count + 1;
        res.render('numberquizindex', { question: questions[count], score: score, count: newCount });
    } else
        res.send(`<h1>The Number Quiz </h1>
                <p>Your current score is ${score}. </p>
                <p>You have completed the Number Quiz, with a score of ${score} out of 5.</p>`);
});

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});