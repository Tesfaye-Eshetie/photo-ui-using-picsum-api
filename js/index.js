const baseURL = 'https://picsum.photos/v2/list?limit=100';

const Container = document.querySelector('.container');

async function fetchPicsumPhotos() {
  try {
    const response = await fetch(baseURL);
    const photos = await response.json();
    const RandomPhoto = await photos
      .filter((photo, index) => index === Math.floor(Math.random() * 100))
      .forEach((photo) => {
        const photoUI = `
          <div class="card">
            <img src="${photo.download_url}" alter="picsum photo" loading="lazy">
            <h2><span>Author name :</span> ${photo.author}</h2>
            <h4>Photo id : ${photo.id}</h4>
          </div>
        `;
        Container.innerHTML = photoUI;
      });
  } catch (error) {
    console.log(error.message);
  }
}
fetchPicsumPhotos();
