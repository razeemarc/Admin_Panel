import firebase from 'firebase/compat/app'; // Update the import statement
import { getFirestore } from 'firebase/firestore'; // Update the import statement
import 'firebase/compat/auth'; // Update the import statement
import { getStorage, ref ,listAll ,deleteObject} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyB0nxVJjfTqizwzKCzGn-Z0i5KxGkVuliU",
    authDomain: "adminpanel-e1d50.firebaseapp.com",
    projectId: "adminpanel-e1d50",
    storageBucket: "adminpanel-e1d50.appspot.com",
    messagingSenderId: "268201396807",
    appId: "1:268201396807:web:b864a92e23ebc380ae3f62",
    measurementId: "G-F7DK5R3F96"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = getFirestore(); // Corrected method name
export const imageDb=getStorage();
export { ref,listAll,deleteObject};
 
export default app;