import { createApi } from 'unsplash-js';
import axios from 'axios';

//http request to get random pic from unsplash
export const getRandom = async () => {
  let photo;
  let id;
  let message;
  await axios
    .get(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
    )
    .then((res) => {
      id = res.data.id;
      photo = res.data.urls.full;
    })
    .catch((error) => {
      message = error.message;
      console.log('error in getting random image', error);
    });
  return { photo, id, message };
};

//get photo by id using http req
export const getPhoto = async (id) => {
  if (!id) return;
  let url;
  let name;
  let html;
  let description;
  let userHtml;
  await axios
    .get(
      `https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
    )
    .then((res) => {
      url = res.data.urls.full;
      name = res.data.user.name;
      html = res.data.links.html;
      userHtml = res.data.user.links.html;
      description = res.data.description;
    })
    .catch((error) => {
      console.log('error in getting random image', error);
    });
  return { url, html, name, userHtml, description };
};

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
});

//getting random pic using unsplash npm package methods
export const randomPic = async () => {
  let photo;
  let id;
  let message;
  await unsplash.photos
    .getRandom({})
    .then((res) => {
      id = res.response.id;
      photo = res.response.urls.regular;
    })
    .catch((error) => {
      message = error.message;
      console.log('error in getting random image', error);
    });
  return { photo, id, message };
};

//getting all photos by pic array from unsplash
export const getPhotos = async (photoArr) => {
  if (!photoArr) return;
  let pictures = [];
  let message;
  try {
    photoArr.map(
      async (photo) =>
        await unsplash.photos
          .get({ photoId: photo })
          .then((res) => {
            pictures.push(res.response);
          })
          .catch((error) => {
            message = error.message;
            console.log('error in getting photos form unsplsh', error);
          })
    );
  } catch (error) {
    console.log('error in get photos', error);
  }

  return { pictures, message };
};

//getting the url of photo by id
export const getPhotoURL = async (id) => {
  if (!id) return;
  let url;
  await unsplash.photos.get({ photoId: id }).then((result) => {
    url = result.response.urls.full;
  });
  return url;
};
