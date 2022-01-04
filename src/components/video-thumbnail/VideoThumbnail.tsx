import React from "react";

import "./VideoThumbnail.css";

interface Props {
  title?: string;
  channel_name: string;
  views: string;
  publish_date: string;
  thumbnail_link: string;
  icon_link: string;
}

export default function VideoThumbnail({
  title = "Antarctica penguins!",
  channel_name,
  views,
  publish_date,
  thumbnail_link,
  icon_link,
}: Props) {
  return (
    <div className="video-thumbnail-container">
      <img className="thumbnail" src={thumbnail_link} alt="thumbnail" />
      <div className="description">
        <img className="channel-icon" src={icon_link} alt="channel-icon"/>
        <div className="details">
          <h3 className="title">{title}</h3>
          <span>{channel_name}</span>
          <div className="views-hours">
            <span>
              {views} {publish_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
