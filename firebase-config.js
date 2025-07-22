// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbH17q1a0ft5udGpkfPsWPYb4G5Lb1jEU",
  authDomain: "the-hawks-photo-app.firebaseapp.com",
  projectId: "the-hawks-photo-app",
  storageBucket: "the-hawks-photo-app.firebasestorage.app",
  messagingSenderId: "315176217689",
  appId: "1:315176217689:web:caa6f33189013a7fe5d548",
  measurementId: "G-428LKBHM36"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = firebaseConfig;
} 