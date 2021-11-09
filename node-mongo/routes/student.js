var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var objId = mongo.ObjectId;  //to convert normal id into object id

router.post('/insert', function (req, res, next) {
    var data = req.body.datas;

    var mongoClient = mongo.MongoClient;
    var url = 'mongodb://localhost:27017';

    mongoClient.connect(url, function (err, dbServerobj) {
        if (err) {
            res.send('db conn error');
        } else {
            var db = dbServerobj.db('school');
            var collection = db.collection('student');
            collection.insertOne(data, function (err, succ) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(succ);
                }
            })
            
        }
    })


});

router.get('/get-data',function(req,res){
    var mongoClient = mongo.MongoClient;
    var url = 'mongodb://localhost:27017';

   mongoClient.connect(url,function(err,dbServerobj){
        if(err){
            res.send('db conn error');
        }else{
            let db = dbServerobj.db('school');
            let collection = db.collection('student');
            collection.find({}).toArray(function(e,s){
                 if(e){
                     res.send(e);
                 }else{
                     res.send(s);
                 }
            })
        }
   })
})

router.post('/update-data',function(req,res){
       
        let data = req.body.datas; //getting data from req.body
        let id = req.query.id;  //getting id from query string parameter

        let mongoClient=mongo.MongoClient;
        let url='mongodb://localhost:27017';

        mongoClient.connect(url,function(e,dbServerobj){
              if(e){
                  res.send('db conn error');
              }else{
                  let db = dbServerobj.db('school');
                  let collection = db.collection('student');

                  collection.updateOne({_id:objId(id)},{$set:data},function(e,s){
                        if(e){
                            res.send(e);
                        }else{
                            res.send(s);
                        }
                  })
              }
        })

})

router.get('/delete-std',function(req,res){
    var id = req.query.id;
    var mongoClient = mongo.MongoClient;
    var url = 'mongodb://localhost:27017';

    mongoClient.connect(url,function(e,dbServerobj){
        if(e){
            res.send('db conn error');
        }else{
            var db = dbServerobj.db('school');
            var collection = db.collection('student');

            collection.deleteOne({_id:objId(id)},function(e,s){
                     if(e){
                         res.send(e);
                     }else{
                         res.send(s);
                     }
            })
        }
    })
})

module.exports = router;
