import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Styles/Footer.css'

export default function () {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/><XIcon/><FacebookIcon/><LinkedInIcon/>
        </div>
        <p>&copy; 2024 MYA Productions</p>
    </div>
  )
}
