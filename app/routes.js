var db = require('../config/db');

module.exports = function (app, db) {

    app.post('/addQuestionPaper', function (req, res) {
        var newQuestionPaper = req.body;
        db.collection(db.collection_name).insert(newQuestionPaper, function (err, result) {
            if (err) {
                console.log(err);
                res.send({ 'message': 'unable to add question paper', done: false });
            } else {
                res.send({ 'message': 'question paper added successfully', done: true });
            }
        })
    })

    app.get('/getAllQuestionPapers', function (req, res) {
        db.collection(db.collection_name).find({}, function (err, result) {
            if (err) {
                console.log(err);
                res.send()
            }
        })
    })

    app.get('/notes/:id', (req, res) => {
        var id = req.params.id;
        var details = { '_id': new ObjectID(id) };
        db.collection(db.collection_name).findOne(details, function(err, result) {
            if (err) {
                res.send({ 'message': 'An error has occurred', done:false });
            } else {
                res.send(result);
            }
        });
    });

    app.get('*', function(req, res) {
		res.sendFile(__dirname +'/src/index.html');
	});   
}