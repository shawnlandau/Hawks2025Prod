# Firebase Setup Guide for Development

## 🚀 Creating a New Firebase Project

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `hawks-2025-dev` (or your preferred name)
4. Enable Google Analytics (optional)
5. Click "Create project"

### Step 2: Add Web App
1. In your new project, click the web icon (</>) 
2. Register app with nickname: `hawks-2025-web`
3. Check "Also set up Firebase Hosting" (optional)
4. Click "Register app"

### Step 3: Get Configuration
After registering, you'll see a configuration object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "hawks-2025-dev.firebaseapp.com",
  projectId: "hawks-2025-dev",
  storageBucket: "hawks-2025-dev.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};
```

### Step 4: Update Configuration
Replace the values in `firebase-config.js` with your new project's configuration.

## 🔧 Enable Firebase Services

### Authentication
1. Go to Authentication > Sign-in method
2. Enable "Email/Password" authentication
3. Add test users if needed

### Firestore Database
1. Go to Firestore Database
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users

### Storage
1. Go to Storage
2. Click "Get started"
3. Choose "Start in test mode" (for development)
4. Select a location

## 📋 Test Mode Rules

### Firestore Rules (Test Mode)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### Storage Rules (Test Mode)
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

## 🧪 Testing Your Setup

1. Update `firebase-config.js` with your new project details
2. Deploy the changes to Netlify
3. Visit `https://hawks2025dev.netlify.app/debug.html`
4. Click "Test Firebase Connection"
5. Check for any errors in the console

## 🔒 Security Notes

⚠️ **Important**: The test mode rules above allow full read/write access. This is fine for development but should be restricted for production.

## 📝 Configuration Checklist

- [ ] Firebase project created
- [ ] Web app registered
- [ ] Configuration copied to `firebase-config.js`
- [ ] Authentication enabled
- [ ] Firestore database created
- [ ] Storage bucket created
- [ ] Test mode rules applied
- [ ] Configuration deployed to Netlify
- [ ] Debug page shows successful connection

## 🚨 Troubleshooting

### Common Issues:
1. **"Firebase not initialized"** - Check configuration values
2. **"Permission denied"** - Ensure test mode rules are applied
3. **"Project not found"** - Verify project ID is correct
4. **"API key invalid"** - Check API key in configuration

### Debug Steps:
1. Check browser console for errors
2. Use the debug page to test connections
3. Verify all Firebase services are enabled
4. Ensure configuration is properly deployed 