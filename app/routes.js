var db = require('./app/config/db');

module.exports = function(app, db) {
    
    app.post('/addQuestionPaper', function(req, res) {
      var newQuestionPaper = req.body;
      db.collection(db.collection_name).insert(newQuestionPaper, function(err, result) {
          if(err) {
              console.log(err);
              res.send({'message':'unable to add question paper', done:false});
          } else {
              res.send({'message':'question paper added successfully', done:true});
          }
      }) 
    })

    app.get('/getAllQuestionPapers', function(req, res) {
        db.collection(db.collection_name).find()
    })

    app.get('*', function(req, res) {
       res.sendFile('./public/index.html')
    })
}