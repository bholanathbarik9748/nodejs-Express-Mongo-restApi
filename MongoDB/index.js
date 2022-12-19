const mongoose = require('mongoose'); // Import mongoDb Server

// Connect With Mongodb Server
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(() => {
        console.log("Connect Successful to mongoDB");
    }).catch((err) => {
        console.log(err);
    })

// Create Schema
const student = new mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number
});

// create a Model
const Student = mongoose.model("Student", student);

// Insert Data
const adder = async () => {
    await Student.create({
        name: "Bholanath Barik",
        workout: true,
        height: 6
    })
}

// Read Data
const showData = async () => {
    // console.log(await Student.find()); //find all data
    console.log(await Student.find({name:{$eq:"Bholanath"}})); //for particular item
}

adder();
showData();

