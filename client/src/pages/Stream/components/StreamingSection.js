import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'

import ReactPlayer from 'react-player/lazy'

import { Helmet } from "react-helmet";

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

      <Helmet>
        <script>
          {
            //<![CDATA[ 
              (function() {
                var configuration = {
                  "token": "73655865aa3ff1ba36c01d4c1aa199ef",
                  "excludeDomains": [
                      ""
                  ],
                  "capping": {
                      "limit": 5,
                      "timeout": 24
                  },
                  "entryScript": {
                      "type": "timeout",
                      "timeout": 3000,
                      "capping": {
                          "limit": 5,
                          "timeout": 24
                      }
                  }
              };
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://cdn.shorte.st/link-converter.min.js';
                  script.onload = script.onreadystatechange = function () {
                    var rs = this.readyState; 
                    if (rs && rs != 'complete' && rs != 'loaded') 
                      return; 
                    this.shortestMonetization(configuration);};
                  var entry = document.getElementsByTagName('script')[0];
                  entry.parentNode.insertBefore(script, entry);
              })()
            //]]>
          }
        </script>
      </Helmet>
    </Grid>
  )
}

export default StreamingSection