import mongoose from "mongoose";
const taskShema = mongoose.Schema({
    title: {type:String, required:true},
    description: {type: String, required: true},
    dueDate: {type: String, required: true}
})
const userShema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required: true},
    tasks: [ taskShema ]
})

const User = mongoose.model('User', userShema)

export default User;