import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SubHeader = ({title}) => {
  return (
    <Box sx={{mb: 2}}>
        <Typography variant='caption' sx={{textTransform: 'Capitalize', fontWeight: 700, bgcolor: '#fcc509', width: 'fit-content', px: 1, py: 0.5}}>{title}</Typography>
    </Box>
  )
}

export default SubHeader