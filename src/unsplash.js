import { createApi } from 'unsplash-js';
const unsplash = createApi({
  accessKey: 'mYj9awBmDjuLzvC_Xa--o75rGZdsvi1EIWIRB3mxHxo',
});

export const randomPic = async () => {
  console.log('inside unsplash random js');
  let photo;
  let id;
  await unsplash.photos.getRandom({}).then((res) => {
    console.log('response', res);
    id = res.response.id;
    photo = res.response.urls.regular;
  });
  return { photo, id };
};
