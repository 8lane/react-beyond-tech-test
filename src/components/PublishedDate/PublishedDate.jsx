import React from 'react';

export function getDate(date) {
  const parsedDate = new Date(date);
  const locale = 'en-uk';
  const day = parsedDate.toLocaleString(locale, { day: 'numeric' });
  const month = parsedDate.toLocaleString(locale, { month: 'long' });
  const year = parsedDate.toLocaleString(locale, { year: 'numeric' });
  
  return `${month} ${day}, ${year}`;
}

const PublishedDate = ({ date }) => {
  return (
    date ?
      <div>Published on {getDate(date)}</div>
    : null
  )
}

export default PublishedDate;