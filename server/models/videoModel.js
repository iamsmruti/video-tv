import mongoose from 'mongoose'

const VideoSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'Untitled'
    },
    description: {
        type: String, 
        default: 'No description'
    },
    thumbnailUrl: {
        type: String,
        default: ''
    },
    videoUrl: {
        type: String,
        default: ''
    }
}, {timestamps: true})

const Video = mongoose.model('Video', VideoSchema)
export default Video