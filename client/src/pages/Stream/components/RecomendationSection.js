import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import CardHorizontal from './CardHorizontal'

import axios from 'axios'
import { api } from '../../../constants'

const RecomendationSection = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios.get(`${api}/videos/`).then((res) => {
      setVideos(res.data)
    })
  }, [])

  return (
    <Grid item xs={12} md={4}>
        {videos?.map((video, index) => (
          <CardHorizontal key={index} video={video}/>
        ))}
    </Grid>
  )
}

export default RecomendationSection