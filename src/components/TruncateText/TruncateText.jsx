import React from 'react';

export function getTruncatedText(text, maxCharacters) {
  return text.substr(0, maxCharacters) + '...';
}

const TruncateText = ({ text, maxCharacters }) => {
  return text ? <p>{getTruncatedText(text, maxCharacters)}</p> : null
}

export default TruncateText;