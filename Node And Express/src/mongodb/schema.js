const mongoose = require('mongoose')
const Joi = require('joi')
const connection = require('./connection')
connection()

// a mongoose schema defines the structure of the document
// default values , validators etc

const playlistSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minlength: [2, 'minimum 2 letter needed honey'],
        maxlength: 30
        // uppercase:true
    },
    ctype: {
        type: String,
        lowercase: true,
        enum: ['frontend', 'backend', 'database']
    },
    videos: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Videos counts should not be negative")
            }
        }
    },
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})


// JOI VALIDATION
// const playlistSchema = Joi.object()
//     .keys({
//         name: Joi.string().custom((value, msg) => {
//             if (value.match(/^[a-zA-Z]+$/)) {
//                 return true;
//                 //return true if you want to pass validation
//             } else {
//                 return msg.message("Only alphabet is allowed");
//                 // return msg.messge if you want to through custom error
//             }
//         }),
//         ctype: Joi.string().required().valid('frontend', 'backend', 'database').lowercase(),
//         videos: Joi.number().min(0).required(),
//         author: Joi.string().required(),
//         active: Joi.boolean().required(),
//         date: Joi.date()
//     }).unknown(false)

// a mongoose model is a wrapper on the mongoose schema
// a mongoose schema defines the structure of the document , default values , validators etc., whereas a mongoose model
// provides an interface to the database for creating , updating ,deleting records
// model must be a class with first letter capital

// Creating a collection
const Playlist = new mongoose.model("Playlist", playlistSchema)

// Creating a document
const createDocument = async () => {
    try {
        // const reactPlaylist = new Playlist({
        //     name: 'Node Js',
        //     ctype: 'Backend',
        //     videos: 70,
        //     author: 'Itachi Uchiha',
        //     active: true
        // })
        // const jsPlaylist = new Playlist({
        //     name: 'Java script',
        //     ctype: 'Front end',
        //     videos: 100,
        //     author: 'Itachi Uchiha',
        //     active: true
        // })
        // const mongoPlaylist = new Playlist({
        //     name: 'MongoDB',
        //     ctype: 'Database',
        //     videos: 70,
        //     author: 'Itachi Uchiha',
        //     active: true
        // })
        // const mongoosePlaylist = new Playlist({
        //     name: 'Mongoose Js',
        //     ctype: 'Database',
        //     videos: 70,
        //     author: 'Itachi Uchiha',
        //     active: true
        // })
        // const expressPlaylist = new Playlist({
        //     name: 'Express Js',
        //     ctype: 'Backend',
        //     videos: 70,
        //     author: 'Itachi Uchiha',
        //     active: true
        // })
        const mernPlaylist = new Playlist({
            name: 'hsfsef',
            ctype: 'Frontend',
            videos: 5,
            author: 'Itachi Uchiha',
            active: true
        })

        // const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist, mernPlaylist])
        const result = await Playlist.insertMany([mernPlaylist])
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
}
createDocument()


const getDocument = async () => {
    try {

        // COMPARISON QUERY OPERATOR IN MONGODB
        // gt = greater than
        // gte = greater than equal to
        // lt = less than
        // lte = less than equal to
        // $in is use for search the specific field in an array
        // $nin is used for search the sepecific field not in an array
        let result = await Playlist
            .find({ author: 'Itachi Uchiha' })


            // COMPARISON QUERY OPERATOR IN MONGODB
            // .find({ videos: { $lte: 60 } }
            // .find({ ctype: { $nin: ['Backend', 'Database'] } })

            // LOGICAL QUERY OPERATOR IN MONGOOSE
            // .find({ $or: [{ ctype: 'Backend' }, { author: 'Itachi Uchiha' }] })
            // .find({ $and: [{ ctype: 'Backend' }, { author: 'Itachi Uchiha' }] })

            // SORTING AND COUNT QUERY METHOD IN MONGOOSE

            // .select("name ctype author videos -_id")
            .select({ name: 1 })
            // .countDocuments()
            // .sort('name :1')
            .sort({ name: -1 }) // -1 for descending order , 1 is for ascending order use curly brackets {}
        // .limit(1)
        console.log(result)

    } catch (e) {
        console.log(e.message)
    }
}

// getDocument()

// UPDATE THE DOCUMENT
const updateDocument = async (id) => {
    try {
        // const result = await Playlist.updateOne({ _id })
        // const result = await Playlist.updateOne({ _id: id }, { $set: { name: 'Mern Stack' } })
        // if we pass only id instead of _id then we need to use {_id:id} but the both is same so help of object destructuring no need to type we can only use {_id}

        const result = await Playlist.findByIdAndUpdate(
            { _id: id },
            { $set: { name: 'MERN Stack' } },
            { new: true }
        )
        console.log(result)
    }
    catch (e) {
        console.log(e.message)
    }
}
// updateDocument('6424499c09087791d1d61385')

const deleteDocument = async (id) => {
    try {
        // const result = await Playlist.deleteOne({ _id: id })
        const result = await Playlist.findByIdAndDelete({ _id: id })
        console.log(result)
    }
    catch (e) {
        console.log(e.message)
    }
}
// deleteDocument('641ee2d42f27ad50109520e1')

