// Firebase Configuration - DEVELOPMENT/TESTING PROJECT
// Replace these values with your new Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_NEW_API_KEY",
  authDomain: "YOUR_NEW_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_NEW_PROJECT_ID",
  storageBucket: "YOUR_NEW_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_NEW_SENDER_ID",
  appId: "YOUR_NEW_APP_ID",
  measurementId: "YOUR_NEW_MEASUREMENT_ID"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully with development config');
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = firebaseConfig;
} 