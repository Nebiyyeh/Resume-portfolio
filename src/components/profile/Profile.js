import { Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <div className='profile container_shadow'>
       <div className='profile_name'>
       <Typography className='name'>Nebiyyeh Dagdeviren</Typography>
       <Typography className='title'>Full Stack Java Developer</Typography>
       </div>

       <figure className='profile_image'>
          <img src='' alt=''/>
       </figure>

       <div className='profile_information'>
         Insert Timeline
         <br/>
         <button>The button</button>

       </div>
       
    </div>
  )
}

export default Profile