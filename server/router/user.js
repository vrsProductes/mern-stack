var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
router.post('/sigin',(req,res) =>{
    console.log("sdssd",req);
    // db.user.findOne({"email":req.query.email},(err,doc) => {
    //     res.json(doc);
    // })
});

module.exports = router;


