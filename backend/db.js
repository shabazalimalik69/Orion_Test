const mongoose = require("mongoose");
mongoose.set("strictQuery",false)

const connectDb = ()=>{
    return mongoose.connect("mongodb+srv://shabaz:7051@cluster0.7eljt4l.mongodb.net/details?retryWrites=true&w=majority")
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log(err))
};
module.exports = connectDb;