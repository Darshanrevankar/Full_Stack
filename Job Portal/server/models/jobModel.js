import mongoose  from  "mongoose";

const jobSchema = new mongoose.Schema({
    company:{
        type: String,
        required: [true, "Company name is required"]
    },
    position:{
        type: String,
        required: [true, "Job Position is required"],
        maxlength: 100,
    },
    status:{
        type: String,
        enum: ["pending", "reject", "interview"],
        default: "pending",
    },
    workLoction:{
        type: String,
        default:'Karnataka',
        required: [true, "Work Location is required"]
    },
    workType:{
        type: String,
        enum: ["full-time", "part-time", "intership","contaract"],
        default: "full-time",
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    jobType:{
        type: String,
        default: "Development",
        required: [true, "Work location is required "]
    }
},
{
    timestamps:true
}
)

export default mongoose.model('Job',jobSchema)