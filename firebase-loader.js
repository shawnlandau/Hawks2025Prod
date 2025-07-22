// Firebase Loader - Ensures Firebase is loaded before React
(function() {
    console.log('Loading Firebase configuration...');
    
    // Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCouuChPSVEKmaxkw3f4r4-Xx-4vADiBWc",
        authDomain: "hawksbaseballphotos-5bb61.firebaseapp.com",
        projectId: "hawksbaseballphotos-5bb61",
        storageBucket: "hawksbaseballphotos-5bb61.firebasestorage.app",
        messagingSenderId: "1090003594150",
        appId: "1:1090003594150:web:92ff02eb4fe204a67f7d67",
        measurementId: "G-RS15QL2HJ0"
    };

    // Load Firebase SDK
    function loadFirebase() {
        return new Promise((resolve, reject) => {
            // Check if Firebase is already loaded
            if (typeof firebase !== 'undefined') {
                console.log('Firebase already loaded');
                initializeFirebase();
                resolve();
                return;
            }

            // Load Firebase SDK
            const script = document.createElement('script');
            script.src = 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js';
            script.onload = function() {
                console.log('Firebase SDK loaded');
                
                // Load Firebase Auth
                const authScript = document.createElement('script');
                authScript.src = 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth-compat.js';
                authScript.onload = function() {
                    console.log('Firebase Auth loaded');
                    
                    // Load Firestore
                    const firestoreScript = document.createElement('script');
                    firestoreScript.src = 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js';
                    firestoreScript.onload = function() {
                        console.log('Firestore loaded');
                        
                        // Load Storage
                        const storageScript = document.createElement('script');
                        storageScript.src = 'https://www.gstatic.com/firebasejs/9.0.0/firebase-storage-compat.js';
                        storageScript.onload = function() {
                            console.log('Firebase Storage loaded');
                            initializeFirebase();
                            resolve();
                        };
                        storageScript.onerror = reject;
                        document.head.appendChild(storageScript);
                    };
                    firestoreScript.onerror = reject;
                    document.head.appendChild(firestoreScript);
                };
                authScript.onerror = reject;
                document.head.appendChild(authScript);
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    function initializeFirebase() {
        try {
            firebase.initializeApp(firebaseConfig);
            console.log('Firebase initialized successfully');
            
            // Test Firebase services
            const auth = firebase.auth();
            const db = firebase.firestore();
            const storage = firebase.storage();
            
            console.log('All Firebase services initialized');
            
        } catch (error) {
            console.error('Firebase initialization error:', error);
        }
    }

    // Load Firebase before React
    loadFirebase().then(() => {
        console.log('Firebase ready, React can now load');
        
        // Load React app after Firebase is ready
        const reactScript = document.createElement('script');
        reactScript.src = '/static/js/main.822604f0.js';
        reactScript.onload = function() {
            console.log('React app loaded after Firebase');
        };
        reactScript.onerror = function() {
            console.error('React app failed to load');
        };
        document.head.appendChild(reactScript);
        
    }).catch((error) => {
        console.error('Failed to load Firebase:', error);
    });
})(); 