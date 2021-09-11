const mongoose = require('mongoose')
const validator = require("validator")
//this will create the new db if it doesn't exist 
//if db already it will write in it
mongoose.connect("mongodb://localhost:27017/mohit", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true } )
    // it is the promise give  that it will return the data

    .then(() => console.log("connection successful...."))
    .catch((err) => console.log(err))

// Schema defines the strucure of document and get the default value
// validators etc.
const playlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            // unique: true,
            lowercase: true,
            trim: true,
            minlength: [2, "too minimum"],
            maxlength:30,
        },
        ctype: {
           type: String,
           required: true,
           lowercase:true,
           enum: ["frontend","backend","database"]
        },
        videos:{
            type: Number,
            validate(value){
                if(value<0)
                {
                    throw new Error("videos cant be in negative")
                }
            }
            // validate :{
            //     validator: function(value)
            //     {
            //         return value.length() < 0
            //     }, message:"videos cant be in negative"
            // }
        },
        author: String,
        email:
        {
                type:String,
                required: true,
                unique: true,
             validate(value)
            { if(!validator.isEmail(value))
             {
                throw new Error("Email is invalid")
             }}
        },
        active: Boolean,
        date: {
            type: Date,
            default: Date.now
        }
    }
)

const Playlist = new mongoose.model("Playlist", playlistSchema)

const creatDocument = async () => {

    try {
        // const jsPlaylist = new Playlist(
        //     {
        //         name: "Javascript",
        //         ctype: "Front End",
        //         videos: 150,
        //         author: "Mohit",
        //         active: true,

        //     }
        // )
        // const mongoPlaylist = new Playlist(
        //     {
        //         name: "Mongo DB",
        //         ctype: "Database",
        //         videos: 10,
        //         author: "Mohit",
        //         active: true,

        //     }
        // )
        const mongoosePlaylist = new Playlist(
            {
                name: "jimmys",
                ctype: "Database",
                videos: 5,
                author: "Mohit",
                email: "mihv@fj",
                active: true,
                

            }
        )
        // const ExpressPlaylist = new Playlist(
        //     {
        //         name: "Express JS",
        //         ctype: "Backend End",
        //         videos: 20,
        //         author: "Mohit",
        //         active: true,
               
        //     }
        // )
        const result = await Playlist.insertMany(
            [
                // jsPlaylist,
                //  mongoPlaylist,
                 mongoosePlaylist,
                // ExpressPlaylist
            ]
        )
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }

}

creatDocument()

const getDocument = async () => {
    try {
        const result = await Playlist
            .find({
                author:"Mohit" },
                //  ctype: { $and: ["Backend End", "Database"] } },
                  { _id: 0 })
            .select({ name: 1 })
            .sort({name:1})
            // .countDocuments()
            


        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
// getDocument();

const updateDocument= async(_id)=>{
    try {
const result= await Playlist.findByIdAndUpdate({_id},{  //we can use updateOne
    $set: {
        name:"JavaScript Mohit"
    }
    
},{
    new:true,
    useFindAndModify : false})
console.log(result)
    }
    catch(err){
     console.log(err)
    }

}

// updateDocument("611c9dd945c73e420833de87")

// delete document

const deleteDocument = async(_id)=>{
try{
const result= await Playlist.findByIdAndDelete({_id})  // we can  also use delete one or many
console.log(result)
}
catch(err){
    console.log(err)
}
}

// deleteDocument("611c9dd945c73e420833de87")
