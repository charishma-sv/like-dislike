import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
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

//create a user
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
    const { id } = user;
    console.log('id of user in get user doc', id);
    const userDoc = await firestore.doc(`users/${id}`).get();
    return {
      id,
      ...userDoc.data(),
    };
  } catch (error) {
    console.log('error fetching data', error);
    throw error;
  }
};

//loggin in user
export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log('error signin ', error);
    throw error;
  }
};
