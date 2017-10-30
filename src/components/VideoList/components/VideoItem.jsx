import React from 'react';

const VideoItem = ({
  title,
  publishedAt,
  description,
  thumbnail,
  onClick
}) => {
  return (
    <li>
      <a className="video-item__link" href="#" onClick={onClick}>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <date>{publishedAt}</date>
        <p>{description}</p>
      </a>
    </li>
  )
};

export default VideoItem;