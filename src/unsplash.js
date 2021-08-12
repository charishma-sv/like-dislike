import { createApi } from 'unsplash-js';
const unsplash = createApi({
  accessKey: 'mYj9awBmDjuLzvC_Xa--o75rGZdsvi1EIWIRB3mxHxo',
});

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

export const getPhotoURL = async (id) => {
  if (!id) return;
  let url;
  await unsplash.photos.get({ photoId: id }).then((result) => {
    url = result.response.urls.full;
  });
  return url;
};
