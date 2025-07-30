import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBR5sd5kI8l-3WpNnL0J16t3SvqGi7lQg",
  authDomain: "henu-586ce.firebaseapp.com",
  projectId: "henu-586ce",
  storageBucket: "henu-586ce.firebasestorage.app",
  messagingSenderId: "633755919625",
  appId: "1:633755919625:web:3a86a50604c1e143495fd8",
  measurementId: "G-GTVCJE7M5T"
};

// Google OAuth configuration
const googleOAuthConfig = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || "756347539673-tm61v3l1peq6uena8tcekpri57l7aktr.apps.googleusercontent.com",
  clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || "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"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Authentication functions
export const signInWithGoogle = async () => {
  try {
    // Configure Google provider with custom parameters
    googleProvider.addScope('email');
    googleProvider.addScope('profile');
    googleProvider.setCustomParameters({
      client_id: googleOAuthConfig.clientId
    });
    
    const result = await signInWithPopup(auth, googleProvider);
    return { user: result.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { user: result.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { user: result.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export { auth }; 