var User = require('./models/user');
//var Attachment = global.gridfs.model
var bcrypt = require('bcrypt-nodejs');


module.exports = function (app) {

  /*  app.post('/user/uploadprofileimage/', function(req,res){
        const readStream = fs.createReadStream('/some/path/sample.txt');
        const options = ({ filename: 'sample.txt', contentType: 'text/plain' });
        Attachment.write(options, readStream,function(err,attchment){
            if(err)throw err;
            if(!attachment){
                res.json({success: false, message:"Attachment not found."})
            }else{
                res.json({success: true, message:"Attachment uploaded "+ options.filename})
            }
        })
    })*/
    app.get('/users/getprofileimage/:id', function(req,res){
        File.findOne({_id:req.params.id},function(err,file){
            if(err)throw err;
            if(!file){
                res.json({success: false, message:"filenot found"})
            }else{
                res.json({success: true, message: "File found", file:file})
            }
        })
    })
    app.post('/users/create', function (req, res) {

        var user = new User();
        user.username = req.body.userName;
        user.phonenumber = req.body.phonenumber;
        user.password = req.body.password.toString(),
            user.email = req.body.email;
        console.log(req.body)


        if ( req.body.password == null || req.body.password == "" ||

            req.body.email == null || req.body.email == "") {

            res.json({ success: false, message: "Ensure username, email, name and password are provided" });

        } else {

            console.log("Here i am")

            user.save(function (err) {
                console.log(err)

                if (err) {

                    res.json({ success: false, message: "Save Failed..." })

                } else {

                    res.json({ success: true, message: "Save Successful,", user: user })

                }



            })

        }
        })
    return app;
}
