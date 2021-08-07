import { createApi } from 'unsplash-js';
const unsplash = createApi({
  accessKey: 'mYj9awBmDjuLzvC_Xa--o75rGZdsvi1EIWIRB3mxHxo',
});

export const randomPic = async () => {
  console.log('inside unsplash random js');
  let pic;
  await unsplash.photos.getRandom({}).then((res) => {
    pic = res.response.urls.regular;
  });
  return pic;
};
