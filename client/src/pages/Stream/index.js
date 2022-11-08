import React, {useState, useEffect} from 'react'
import { Grid } from '@mui/material'
import RecomendationSection from './components/RecomendationSection'
import StreamingSection from './components/StreamingSection'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { api } from '../../constants'

const Stream = () => {
  const [video, setVideo] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${api}/videos/${id}`).then((res) => {
      setVideo(res.data)
    })
  }, [id])

  return (
    <Grid container spacing={2}>
      <StreamingSection video={video}/>
      <RecomendationSection />
    </Grid>
  )
}

export default Stream