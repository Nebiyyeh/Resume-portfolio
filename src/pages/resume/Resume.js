import React from 'react'
import './Resume.css'
import resumeData from '../../utils/resumeData'
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import CustomTimeline, { CustomTimeLineSeparator } from '../../components/timeline/Timeline';
import { TimelineContent } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineItem } from '@mui/lab';


const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45 pt_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <br></br>
                    <h6 className="section_title_text"> About me</h6>   
                </Grid>
                
                <Grid item >
                    <Typography variant="body2" className="aboutme_text">
                     {resumeData.about}
                    </Typography>
                </Grid>
      </Grid>

      <Grid container className="section pb_45"  >
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text"> Resume</h6>   
                </Grid>

                <Grid item xs={12}  >
                    <Grid container className="resumeTimeLine">
                 
                    <Grid item xs={12} sm={12} md={6} >
                    <CustomTimeline title="Professional Experience"
                                icon={<WorkIcon />}
                            >
                                {resumeData.experiences.map(experience => (
                                    <TimelineItem  key={experience.id}>
                                       <CustomTimeLineSeparator/>
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{experience.title}</Typography>
                                            
                                            <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{ experience.description}</Typography>
                                    </TimelineContent>    
                                   </TimelineItem>
                    ))}
                                
                                
                    </CustomTimeline>       
                    </Grid>

  
                    <Grid item xs={12} sm={12} md={6} >
                    <CustomTimeline title="Education and Certifications"
                                icon={<SchoolIcon/>}
                            >
                                {resumeData.educations.map((education) => (
                                    <TimelineItem key={education.id}>
                                       <CustomTimeLineSeparator/>
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{education.title}</Typography>
                                            
                                            <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{ education.description}</Typography>
                                    </TimelineContent>    
                                   </TimelineItem>
                    ))}
                                
                                
                    </CustomTimeline>       
                    </Grid>   
                 </Grid>
                </Grid>
      </Grid>

      
    </>
  )
}

export default Resume