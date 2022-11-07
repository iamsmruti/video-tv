import { Stack, Typography } from '@mui/material'
import React from 'react'

import { Link } from 'react-router-dom'

const Card = ({ video }) => {
    const customCard = {
        width: '100%',
        marginBottom: '2rem',
        border: '1px solid lightgray',
        borderRadius: '15px',
        paddingBottom: '1rem',
    }
    return (
        <Link to={`/${video._id}`}>
            <Stack style={customCard}>
                <img style={{ borderRadius: '15px', height: '170px' }} src={video.thumbnailUrl} />

                <Stack sx={{ mt: 2, px: 1 }}>
                    <Typography sx={{
                        lineHeight: '1.2rem', fontSize: '17px', fontWeight: 700, color: 'black', overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical'
                    }}>{video.title}</Typography>
                    <Typography sx={{
                        color: 'gray', fontSize: '13px', mt: 1, overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical'
                    }}>{video.description}</Typography>
                </Stack>
            </Stack>
        </Link>
    )
}

export default Card