import firebase from 'firebase/app'
import 'firebase/auth'

// Initialize App
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT,
    storageBucket: process.env.REACT_APP_FB_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDER,
    appID: process.env.REACT_APP_FB_APP
});  

export const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.NONE);
export default app;