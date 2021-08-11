import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getPhotoURL } from './unsplash';
//Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDUXQ5JFGL01ZATDjDvOBdRmuPYzXIQf_w',
  authDomain: 'like-dislike-av.firebaseapp.com',
  projectId: 'like-dislike-av',
  storageBucket: 'like-dislike-av.appspot.com',
  messagingSenderId: '740085860406',
  appId: '1:740085860406:web:2e3d3eba6132fa03e17097',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//create a user using firebase authentication
export const createUser = async (name, email, password) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    generateUserDocument(user, name);
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

//creating a user document in firestore
export const generateUserDocument = async (user, name) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const { email } = user;
  try {
    await userRef.set({
      email,
      name,
    });
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

//get user document from firestore
export const getUserDocument = async (user) => {
  if (!user) return;
  try {
    const { uid } = user;
    const userDoc = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDoc.data(),
    };
  } catch (error) {
    console.log('error fetching data', error);
    throw error;
  }
};

//logging in user
export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log('error signin ', error);
    throw error;
  }
};

//logout user
export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log('error signing out', error);
    throw error;
  }
};

//add picId to user document
export const addPic = async (user, picId) => {
  if (!user) return;
  const { uid } = user;
  try {
    const userRef = firestore.doc(`users/${uid}`);
    await userRef
      .set(
        {
          picArr: firebase.firestore.FieldValue.arrayUnion(picId),
        },
        { merge: true }
      )
      .then(async () => {
        const url = await getPhotoURL(picId);
        await generatePhotoDocument(user, picId, url);
      })
      .catch((error) => console.log(error));
    return await getUserDocument(user);
  } catch (error) {
    console.log('error in adding pic to user doc', error);
    throw error;
  }
};

//delete document field from user document
export const deleteField = async (user, id) => {
  if (!user) return;
  try {
    const { uid } = user;
    const userRef = firestore.doc(`users/${uid}`);
    userRef.update({
      picArr: firebase.firestore.FieldValue.arrayRemove(id),
    });
  } catch (error) {
    console.log('error in deleting liked photo', error);
    throw error;
  }
  return await getUserDocument(user);
};

//generate photolinks document
export const generatePhotoDocument = async (user, picId, url) => {
  if (!user) return;
  const { uid } = user;
  console.log('pic id and url', picId, url);
  try {
    const photoRef = firestore.doc(`photos/${uid}`);
    await photoRef
      .set({
        pics: [{ picId, url }],
      })
      .then();
  } catch (error) {
    console.log('error in generating photo document', error);
  }
};
