const mongoose = require('mongoose');

const PostsModel = mongoose.model(
    //nom base de donne
    "node-js",
    //premier parametre objet json
    {
        author:{
            type: String,
            require: true
        },
        message:{
            type:String,
            require: true
        },
        date:{
            type: Date,
            default: Date.now
        }

    },
    //contenu
    "posts"
);

module.exports = {PostsModel};