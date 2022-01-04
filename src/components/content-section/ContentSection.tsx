import React, { useEffect, useRef, useState } from "react";

import "./ContentSection.css";
import VideoThumbnail from "../video-thumbnail/VideoThumbnail";

import thumbnails from "../../data/thumbnails.json";

interface Props {
  searchValue: string;
}
export default function ContentSection({ searchValue }: Props) {
  const allVideos = useRef(thumbnails);
  const [selectedVideos, setSelectedVideos] = useState(thumbnails);

  useEffect(() => {
    setSelectedVideos(
      allVideos.current.filter((video) =>
        video.title.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]);

  return (
    <div className="content-container">
      <h2 className="content-title">Recommandé</h2>
      <div className="video-grid">
        {selectedVideos.map((thumbnail, index) => (
          <VideoThumbnail
            title={thumbnail.title}
            channel_name={thumbnail.channel_name}
            views={thumbnail.views}
            publish_date={thumbnail.publish_date}
            thumbnail_link={thumbnail.thumbnail_link}
            icon_link={thumbnail.icon_link}
          />
        ))}
      </div>
    </div>
  );
}