import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { menuItems } from '../utils/MenuItems'

import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const Navbar = () => {
    const location = useLocation()
  return (
    <Stack direction={"row"} justifyContent="space-between" alignItems={"center"} sx={{px: {md: 3, xs: 1.5}, py: 1}}>
        <Link to="/">
            <img style={{width: 140}} src={logo}/>
        </Link>
        
        <Stack direction={"row"}>
            {menuItems?.map((item, index) => (
                    <Link key={index} to={item.path}>
                        {location.pathname === item.path ? 
                            <Box sx={{p: 1, bgcolor: '#fcc509', color: 'black', borderRadius: '5px'}}>
                                <Typography>{item.title}</Typography>
                            </Box> : 
                            <Box sx={{p: 1, color: 'black'}}>
                                <Typography>{item.title}</Typography>
                            </Box>}
                    </Link>
            ))}
        </Stack>
    </Stack>
  )
}

export default Navbar