import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from './components/Card'
import Header from '../../components/Header'
import { api } from '../../constants'

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios.get(`${api}/videos/`).then((res) => {
      setVideos(res.data)
      console.log(res.data)
    })
  }, [])
  return (
    <>
    <div id="container-0852199bfd2b4eeb91bb09d1d9b764a1"></div>
    <Header title={"Have Fun !"} subtitle={"upload and share with your friends"}/>
    <Grid container spacing={2}>
      {videos?.map((video, index) => (
        <Grid key={index} item xs={12} md={3}>
          <Card video={video}/>
        </Grid>
        ))
      }
    </Grid>
    </>
  )
}

export default Home