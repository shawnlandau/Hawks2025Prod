#!/bin/bash

echo "🔥 Firebase Configuration Updater"
echo "=================================="
echo ""

# Check if firebase-config.js exists
if [ ! -f "firebase-config.js" ]; then
    echo "❌ firebase-config.js not found!"
    exit 1
fi

echo "📝 Enter your new Firebase project details:"
echo ""

read -p "Project ID: " project_id
read -p "API Key: " api_key
read -p "Messaging Sender ID: " sender_id
read -p "App ID: " app_id
read -p "Measurement ID (optional): " measurement_id

# Create backup
cp firebase-config.js firebase-config.js.backup
echo "✅ Backup created: firebase-config.js.backup"

# Update the configuration
cat > firebase-config.js << EOF
// Firebase Configuration - DEVELOPMENT/TESTING PROJECT
// Replace these values with your new Firebase project configuration
const firebaseConfig = {
  apiKey: "${api_key}",
  authDomain: "${project_id}.firebaseapp.com",
  projectId: "${project_id}",
  storageBucket: "${project_id}.appspot.com",
  messagingSenderId: "${sender_id}",
  appId: "${app_id}",
  measurementId: "${measurement_id}"
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
EOF

echo "✅ Firebase configuration updated!"
echo ""
echo "📋 Next steps:"
echo "1. Commit and push the changes:"
echo "   git add firebase-config.js"
echo "   git commit -m 'Update Firebase config for development'"
echo "   git push origin main"
echo ""
echo "2. Test the connection:"
echo "   Visit: https://hawks2025dev.netlify.app/debug.html"
echo ""
echo "3. If you need to restore the old config:"
echo "   cp firebase-config.js.backup firebase-config.js" 