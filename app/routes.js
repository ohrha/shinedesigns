var User = require('./models/user');
var bcrypt = require('bcrypt-nodejs');


module.exports = function (app) {

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
