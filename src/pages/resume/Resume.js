import React from "react";
import "./Resume.css";
import resumeData from "../../utils/resumeData";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../../components/timeline/Timeline";
import { TimelineContent } from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { TimelineItem } from "@mui/lab";
import { TimelineDot } from "@mui/lab";
import { Paper } from "@mui/material";
import CustomButton from "../../components/button/Button";

const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <br></br>
          <h6 className="section_title_text"> About me</h6>
        </Grid>
        <Grid item>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text"> Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resumeTimeLine">
            <Grid item xs={12} sm={12} md={6}>
              <CustomTimeline
                title="Professional Experience"
                icon={<WorkIcon />}
              >
                {resumeData.experiences.map((experience) => (
                  <TimelineItem key={experience.id}>
                    <CustomTimeLineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>

                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <CustomTimeline
                title="Education and Certifications"
                icon={<SchoolIcon />}
              >
                {resumeData.educations.map((education) => (
                  <TimelineItem key={education.id}>
                    <CustomTimeLineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>

                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justify="space-between"
        className="section graybg pb_45 p_50 "
      >
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text"> Skills </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between " spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3} key={skill.id}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>

                  {skill.description.map((element) => (
                    <Typography
                      key={element.id}
                      variant="body2"
                      className="skill_description"
                    >
                      <TimelineDot
                        variant={"outline"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <div id="contactUs">
            <Grid container spacing={6} className="section pt_45 pb_45" >
                
                <Grid item xs={12} lg={7}>
                    <Grid container >
                        <Grid item className="section_title mb_30" >
                    <span></span>
                    <br/>
                    <h6 className="section_title_text"> Contact Form</h6>   
                            </Grid>
                        
                            <Grid item xs={12}>
                          
                            <Grid container spacing={3} >
                                <Grid item xs={12} sm={6}>
                                    <input type="text" placeholder="Name" name="name" className="form-control" />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <input type="text" placeholder="E-mail" name="email" className="form-control"/>
                                </Grid>

                                <Grid item xs={12} >
                                     <textarea cols="30" rows="8 " type="text" placeholder="Message" name="message" className="form-control"/>
                                </Grid>

                                        <Grid item xs={12} >
                                            
                                 <CustomButton text="Submit" type="submit"/>                             
                                </Grid>
                                </Grid>
                                
                        </Grid>
                        
                </Grid>
    
                </Grid>
       
               <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section_title mb_30" >
                    <span></span>
                    <br/>
                    <h6 className="section_title_text"> Contact Information</h6>      
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography className="contactInfo_item">
                                      <span> Address: </span>  {resumeData.address} 
                                    </Typography>
                                </Grid>

                                
                                <Grid item xs={12}>
                                    <Typography className="contactInfo_item">
                                      <span> Email: </span>  {resumeData.email} 
                                    </Typography>
                                </Grid>
                            </Grid>
                       
                     </Grid>
                        <Grid item xs={12}>
                            <Grid container className="contactInfo_socialsContainer">
                                {Object.keys(resumeData.socials).map((key) => (
                                    <Grid key={resumeData.socials[key].id} item className="contactInfo_socials" >
                                        <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon }</a>
                                        </Grid>
                                ))}
                         </Grid>   
                       </Grid>
                    </Grid>
               </Grid>  
                </Grid>
      </div>

    </>
  );
};

export default Resume;
