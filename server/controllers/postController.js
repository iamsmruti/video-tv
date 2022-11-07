import Video from '../models/videoModel.js'

export const getVideos = async (req, res) => {
    try {
        const videos = await Video.find()
        res.status(200).json(videos)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const uploadVideo = async (req, res) => {
    try {
        const newVideo = new Video({
            title: req.body.title,
            description: req.body.description,
            thumbnailUrl: req.body.thumbnailUrl,
            videoUrl: req.body.videoUrl
        })

        await newVideo.save()
        res.status(201).json(newVideo)
    } catch(err) {
        res.status(409).json({message: err.message})
    }
}

export const getVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
