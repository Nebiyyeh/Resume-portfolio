import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material';
import resumeData from "../../utils/resumeData"

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer_left">
          <Typography className="foofter_name">{resumeData.name}</Typography>
        </div>
        <div className="footer_right">
          <Typography className="footer_copyright">
            Developed by <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">{resumeData.name} </a><br />
            Idea from <a href="https://themeforest.net/user/tavonline" target="_blank" rel="noreferrer" >Tavonline</a>
          </Typography>
        </div> 
        </div>
    )
}

export default Footer