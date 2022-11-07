import express from 'express'
const router = express.Router()

import { getVideos, uploadVideo, getVideo } from '../controllers/postController.js'

router.post('/', uploadVideo)
router.get('/', getVideos)
router.get('/:id', getVideo)

export default router