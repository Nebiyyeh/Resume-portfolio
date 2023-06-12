import { Typography } from "@mui/material";
import React from "react";
import CustomTimeline, { CustomTimeLineSeparator } from "../timeline/Timeline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Profile.css";
import resumeData from "../../utils/resumeData";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";
import NebResume from "../../utils/Resume.pdf";


const CustomTimeLineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/nebiyyeh.png")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimeLineItem title="Name" text={resumeData.name} />
          <CustomTimeLineItem title="Title" text={resumeData.title} />
          <CustomTimeLineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimeLineItem
              key={resumeData.socials[key].id}
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        <div className="button_container">
          <CustomButton text={"Resume"} icon={<GetAppIcon />} href={NebResume} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
