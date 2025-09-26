const mongoose=require('mongoose')

const formSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Array,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    dateOfExperience:{
        type:String, 
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    rateQuality:{
        type:String,
        required:true
    },
    rateSupport:{
        type:String,
        required:true
    },
    recommend:{
        type:String,
        required:true
    },
    like:{
        type:String, 
        required:true
    },
    improvement:{
        type:String,
        required:true
    },
    contactFollowUp:{
        type:Boolean,
        required:true
    },
    shareFeedback:{
        type:Boolean,
        required:true
    },
    subscription:{
        type:String,
        required:true
    },
    period:{
        type:String, 
        required:false
    },
    card:{
        type:Number,
        required:false
    },
    social:{
        type:Object,
        required:true
    }
}, { timestamps: true })

const Form = mongoose.model("Form", formSchema);

module.exports=Form