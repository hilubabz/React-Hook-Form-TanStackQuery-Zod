const mongoose=require('mongoose')

const formSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

const Form = mongoose.model("Form", formSchema);

module.exports=Form