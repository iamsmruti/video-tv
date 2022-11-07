import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <Box>
        <Navbar />
        <Container>
          {children}
        </Container>
    </Box>
  )
}

export default Layout