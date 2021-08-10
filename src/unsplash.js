import { createApi } from 'unsplash-js';
const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
});

export const randomPic = async () => {
  let photo;
  let id;
  await unsplash.photos.getRandom({}).then((res) => {
    id = res.response.id;
    photo = res.response.urls.regular;
  });
  return { photo, id };
};

export const getPhotos = async (photoArr) => {
  if (!photoArr) return;
  let pictures = [];
  try {
    photoArr.map(
      async (photo) =>
        await unsplash.photos.get({ photoId: photo }).then((res) => {
          pictures.push(res.response);
        })
    );
  } catch (error) {
    console.log('error in get photos', error);
  }

  return pictures;
};
