import { createApi } from 'unsplash-js';
const unsplash = createApi({
  accessKey: 'mYj9awBmDjuLzvC_Xa--o75rGZdsvi1EIWIRB3mxHxo',
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
  let pictures = [];
  photoArr.map(
    async (photo) =>
      await unsplash.photos.get({ photoId: photo }).then((res) => {
        pictures.push(res.response);
      })
  );

  return pictures;
};
