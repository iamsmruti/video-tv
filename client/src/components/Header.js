import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <Box sx={{mb: 2}}>
        <Typography variant='h4' sx={{textTransform: 'uppercase', fontWeight: 700, mb: -1}}>{title}</Typography>
        <Typography variant='caption' sx={{textTransform: 'Capitalize', fontWeight: 700, bgcolor: '#fcc509', width: 'fit-content', px: 1, py: 0.5}}>{subtitle}</Typography>
    </Box>
  )
}

export default Header