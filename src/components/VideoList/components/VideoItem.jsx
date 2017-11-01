import React from 'react';

import PublishedDate from '../../PublishedDate/PublishedDate';
import TruncateText from '../../TruncateText/TruncateText';

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

        <TruncateText
          text={description}
          maxCharacters={200}
        />
      </a>
    </li>
  )
};

export default VideoItem;