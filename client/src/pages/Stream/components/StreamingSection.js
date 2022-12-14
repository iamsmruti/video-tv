import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'

import ReactPlayer from 'react-player/lazy'

const StreamingSection = ({ video }) => {
  return (
    <Grid item xs={12} md={8}>
      {video.videoUrl ?
        <ReactPlayer url={video.videoUrl} controls="true" width={"100%"} height="auto" playing="true" /> :
        <Box sx={{ bgcolor: 'black', width: '100%', height: 450 }}>
          <Typography sx={{ color: 'white' }}>Video Unavailable</Typography>
        </Box>}

      <Stack sx={{ mt: 2 }}>
        <Typography variant='h6'>{video.title}</Typography>
        <Typography variant='body2'>{video.description}</Typography>
      </Stack>
    </Grid>
  )
}

export default StreamingSection
