import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'mYj9awBmDjuLzvC_Xa--o75rGZdsvi1EIWIRB3mxHxo',
});

export const randomPic = async () => {
  let pic;
  unsplash.photos.getRandom({}).then((photo) => {
    pic = photo;
  });
  return pic;
};
