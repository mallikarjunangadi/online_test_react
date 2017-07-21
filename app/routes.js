var dbconfig = require('../dbconfig/db');
var path = require('path');

var quizQuestions = {
    paperId : "2",
    questions: [
        {
            question: "What franchise would you rather play a game from?",
            options: [
                "Microsoft",
                "Micromax",
                "Sony",
                "Hallo"
            ],
            answer: "Micromax"
        }, 
        {
            question: "Which one is correct team name in NBA?",
            options: [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            answer: "Huston Rocket"
        },
        {
            question: "5 + 7 = ?",
            options: [
                "10",
                "11",
                "12",
                "13"
            ],
            answer: "12"
        },
        {
            question: "12 - 8 = ?",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            answer: "4"
        },
        {
            question: "12 - 8 = ?",
            options: [
                "Entomology is the science that studies",
                "Behavior of human beings",
                "Insects",
                "The origin and history of technical and scientific terms",
                "The formation of rocks"
            ],
            answer: "Behavior of human beings"
        }

    ]
}

module.exports = function (app, db, rootPath) {
    console.log('enterd routes');
    

    app.post('/addQuestionPaper', function (req, res) {
        var newQuestionPaper = req.body;
        db.collection(dbconfig.collection_name).insert(quizQuestions, function (err, result) {
            if (err) {
                console.log(err);
                res.send({ 'message': 'unable to add question paper', done: false });
            } else {
                console.log(result);
                res.send({ 'message': 'question paper added successfully', done: true });
            }
        })
    })

    app.get('/getAllQuestionPapers', function (req, res) {
 
        db.collection(dbconfig.collection_name).find().toArray(function (err, result) {
            if (err) {
                console.log(err);
                
            } else {
                console.log(result);
                res.send({"data":result, done:true})
            }
        })
    })

    app.get('/paper/:id', function(req, res) {
        var id = req.params.id;
        console.log('entered api')
        var details = { "paperId": id };
        db.collection(dbconfig.collection_name).findOne(details, function (err, result) {
            if (err) {
                res.send({ 'message': 'An error has occurred', done: false });
            } else {
                res.send(result);
            } 
        });  
    })

    app.get('/*', function(req, res) { 
        console.log(rootPath +'/src/client/app/index.html');
        res.sendFile(path.resolve(rootPath +'/src/client/index.html'));
    });    
}