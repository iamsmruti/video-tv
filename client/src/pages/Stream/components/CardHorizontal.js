import { Stack, Typography, Box } from '@mui/material'
import React from 'react'

import { Link } from 'react-router-dom'

const CardHorizontal = ({video}) => {
    const customCard = {
        width: '100%',
        marginBottom: '2rem',
        flexDirection: 'row'
    }
    return (
        <Link to={`/${video._id}`}>
            <Stack style={customCard}>
                {(video?. thumbnailUrl && (video?. thumbnailUrl).substring(0,1) === "h" ) ? <img style={{ borderRadius: '15px', height: '80px' }} src={video.thumbnailUrl} /> : <Box sx={{width: '150px', height: '80px', bgcolor: 'lightgray', borderRadius: '15px'}}></Box>}

                <Stack sx={{ px: 1 }}>
                    <Typography sx={{
                        width: '100%',
                        lineHeight: '1.2rem',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'black',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical'
                    }}>
                        {video.title}
                    </Typography>

                    <Typography sx={{
                        color: 'gray',
                        fontSize: '13px',
                        mt: 0.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical'
                    }}>
                        {video.description}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    )
}

export default CardHorizontal