// Firebase Configuration - DEVELOPMENT/TESTING PROJECT
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCouuChPSVEKmaxkw3f4r4-Xx-4vADiBWc",
  authDomain: "hawksbaseballphotos-5bb61.firebaseapp.com",
  projectId: "hawksbaseballphotos-5bb61",
  storageBucket: "hawksbaseballphotos-5bb61.firebasestorage.app",
  messagingSenderId: "1090003594150",
  appId: "1:1090003594150:web:92ff02eb4fe204a67f7d67",
  measurementId: "G-RS15QL2HJ0"
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
