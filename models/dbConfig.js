const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/node-js",
    {useNewUrlParser: true, useUnifiedTopology: true},
     console.log("connexion mongoose reussi")
    // (err) => {
    //     if(!err)console.log("connexion a la bd reussi");
    //     else console.log("connexion echoue :" + err);
    // }

).
catch(error => handlerError(Error));
