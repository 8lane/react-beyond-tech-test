const config = {
  APIURL: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
};

export default function fetchVideos() {
  return new Promise((resolve, reject) => {
    fetch(config.APIURL)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  });
}