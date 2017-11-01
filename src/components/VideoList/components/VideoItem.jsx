import React from 'react';

import PublishedDate from '../../PublishedDate/PublishedDate';

const VideoItem = ({
  title,
  publishedAt,
  description,
  thumbnail,
  onClick
}) => {
  return (
    <li>
      <a className="video-item__link" href={`#${title}`} onClick={onClick}>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <PublishedDate date={publishedAt} />
        <p>{description}</p>
      </a>
    </li>
  )
};

export default VideoItem;