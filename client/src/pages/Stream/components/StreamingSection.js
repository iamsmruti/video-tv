import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'

const StreamingSection = ({video}) => {
  return (
    <Grid item xs={12} md={8}>
        {video.videoUrl ? 
        <video width="100%" autoplay="autoplay" controls>
          <source src={video?.videoUrl} type="video/mp4" />
        </video> : 
        <Box sx={{bgcolor: 'black', width: '100%', height: 450}}>
          <Typography sx={{color: 'white'}}>Video Unavailable</Typography>
        </Box>}

        <Stack sx={{mt: 2}}>
            <Typography variant='h6'>{video.title}</Typography>
            <Typography variant='body2'>{video.description}</Typography>
        </Stack>
    </Grid>
  )
}

export default StreamingSection