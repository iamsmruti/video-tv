import { Button, Stack, Typography, CircularProgress, Backdrop } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/Header'

import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'
import { api } from '../../constants'

const Upload = () => {
  const [thumbnail, setThumbnail] = useState('')
  const [video, setVideo] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [progress, setProgress] = useState(false)

  const navigate = useNavigate()

  const customInput = {
    padding: '1rem',
    fontSize: '1.2rem',
    outline: 'none',
    border: '1px solid black',
    width: '100%',
    maxWidth: '700px',
    marginBottom: '1rem',
  }

  function handleUploadVideo() {
    window.cloudinary.openUploadWidget({
      cloudName: "dftw7onwl",
      uploadPreset: "smrutify",
      sources: [
        "local",
        "url",
        "image_search",
        "google_drive",
        "facebook",
        "dropbox",
        "instagram",
        "camera",
        "unsplash",
        "istock",
        "getty",
        "shutterstock"
      ],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: false,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#FCC509",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#FCC509",
          action: "#FF620C",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1"
        },
        fonts: {
          default: null,
          "'Josefin Sans', sans-serif": {
            url: "https://fonts.googleapis.com/css2?family=Josefin+Sans",
            active: true
          }
        }
      }
    },
      (err, info) => {
        if (info.event === "success") {
          setVideo(info.info.secure_url)
        } else {
          return err
        }
      }
    );
  }

  function handleUploadThumbnail() {
    window.cloudinary.openUploadWidget({
      cloudName: "dftw7onwl",
      uploadPreset: "smrutify",
      sources: [
        "local",
        "url",
        "image_search",
        "google_drive",
        "facebook",
        "dropbox",
        "instagram",
        "camera",
        "unsplash",
        "istock",
        "getty",
        "shutterstock"
      ],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: false,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#FCC509",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#FCC509",
          action: "#FF620C",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1"
        },
        fonts: {
          default: null,
          "'Josefin Sans', sans-serif": {
            url: "https://fonts.googleapis.com/css2?family=Josefin+Sans",
            active: true
          }
        }
      }
    },
      (err, info) => {
        if (info.event === "success") {
          setThumbnail(info.info.secure_url)
        } else {
          return err
        }
      }
    );
  }

  const handleSubmit = () => {
    setProgress(true)
    axios.post(`${api}/videos/`, {
      title: title,
      description: description,
      thumbnailUrl: thumbnail,
      videoUrl: video
    }).then(res => {
      console.log(res)
      setProgress(false)
      navigate("/")
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
    <Stack>
      <Header title={"Upload"} subtitle={"let the world see your creation"} />
      <input onChange={(e) => setTitle(e.target.value)} style={customInput} type="text" placeholder='Title' />
      <Stack onClick={handleUploadThumbnail} justifyContent={"center"} alignItems={"center"} sx={{ width: '100%', maxWidth: '700px', border: '1px dashed black', mb: '1rem', height: 'auto', minHeight: '100px', cursor: 'pointer', overflow: 'hidden' }}>
        {thumbnail ? <img style={{ width: '100%' }} src={thumbnail} /> : <Typography style={{ textAlign: 'center', padding: '1rem' }}>Click to upload your thumbnail</Typography>}
      </Stack>
      <textarea onChange={(e) => setDescription(e.target.value)} style={customInput} type="text" placeholder='Description' />
      <Stack onClick={handleUploadVideo} justifyContent={"center"} alignItems={"center"} sx={{ width: '100%', maxWidth: '700px', border: '1px dashed black', mb: '1rem',minHeight: 100, height: 'auto', cursor: 'pointer' }}>
        {video ? <video width="100%" height="auto" controls>
          <source src={video} type="video/mp4" />
        </video> : <Typography style={{ textAlign: 'center', padding: '1rem' }}>Click to upload your Video</Typography>}
      </Stack>

        <Button onClick={handleSubmit} variant='contained' sx={{ width: 'fit-content', borderRadius: 0 }}>Submit</Button>
    </Stack>
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={progress}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div key={"ad-unit-3"} id="container-0852199bfd2b4eeb91bb09d1d9b764a1"></div>
    </>
  )
}

export default Upload