var express = require('express');
var router = express.Router();
const mongo = require('mongodb-curd');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/list',function(req,res){
  let data = req.body;
  mongo.find('lfs','stu',data,function(result){
    if(!result){
       res.send({
           code:0,
           mes:"error"
        })
    }else{
        res.send({
           code:1,
           mes:"success",
           data:result
        })
    }
})
});

module.exports = router;
